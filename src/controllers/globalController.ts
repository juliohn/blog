import {InterpreterFrom, MachineOptions, assign, createMachine} from 'xstate';
import {NavigationProp} from '@react-navigation/native';
import {POST} from '../models/Post';
import {RootStackParamList} from '../navigation/Navigation';

export type GlobalService = InterpreterFrom<typeof globalController>;

type GlobalContext = {
  currentPosts: [POST];
  currentPost?: POST;
  navigationController: NavigationProp<RootStackParamList>;
};

type GlobalEvents =
  | {type: 'SHOW_EDITOR'}
  | {type: 'CANCEL'}
  | {type: 'SAVE'; postID?: string}
  | {type: 'EDIT'; data: Partial<POST>}
  | {type: 'DELETE'; postID?: string}
  | {type: 'DETAILS'; data: POST};

const actions: MachineOptions<GlobalContext, GlobalEvents>['actions'] = {
  dismissPostEditor: (ctx, _) =>
    ctx.navigationController.navigate('Settings' as any),
  openPostEditor: (ctx, _) =>
    ctx.navigationController.navigate('PostEditor' as any),
  editPost: assign((ctx, e) => {
    if (e.type !== 'EDIT') {
      return {};
    }
    ctx.navigationController.navigate('PostEditor' as any);
    const currentPost = {
      ...(ctx.currentPost ?? {}),
      ...e.data,
    } as Post;
    return {
      currentPost,
    };
  }),
  detailsPost: assign((ctx, e) => {
    if (e.type !== 'DETAILS') {
      return {};
    }
    ctx.navigationController.navigate('PostDetails' as any, {
      post: e.data,
    });
  }),

  saveNewPost: assign((ctx, e) => {
    if (e.type !== 'SAVE') {
      return {};
    }
    if (!e.postID && ctx.currentPost) {
      const newPost: POST = {
        id: (Math.random() * ctx.currentPost.title.length * 100).toString(),
        title: ctx.currentPost.title,
        description: ctx.currentPost.description,
        uriImage: ctx.currentPost.uriImage,
        publishedAt: new Date().toLocaleDateString('pt-BR'),
        category: ctx.currentPost.category,
      };

      const updatedPosts = [...ctx.currentPosts, newPost];
      return {
        currentPosts: updatedPosts as [POST],
        currentPost: undefined,
      };
    }

    const allPosts = [
      ...ctx.currentPosts.filter(item => item.id !== ctx.currentPost?.id),
      ctx.currentPost,
    ];

    return {
      currentPost: undefined,
      currentPosts: allPosts as [POST],
    };
  }),
  deletePost: assign((ctx, e) => {
    if (e.type !== 'DELETE') {
      return {};
    }

    const allPosts = [...ctx.currentPosts.filter(item => item.id !== e.postID)];

    return {
      currentPost: undefined,
      currentPosts: allPosts as [Post],
    };
  }),
};

export const globalController = createMachine(
  {
    schema: {
      context: {} as GlobalContext,
      events: {} as GlobalEvents,
    },
    predictableActionArguments: true,
    initial: 'idle',
    states: {
      idle: {
        on: {
          SHOW_EDITOR: {
            actions: 'openPostEditor',
            target: 'editing',
          },
          CANCEL: {
            actions: 'dismissPostEditor',
            target: 'idle',
          },
          DELETE: {
            actions: 'deletePost',
            target: 'idle',
          },
          DETAILS: {
            actions: 'detailsPost',
            target: 'idle',
          },
        },
      },
      editing: {
        on: {
          EDIT: {
            actions: 'editPost',
            target: 'editing',
          },
          SAVE: {
            actions: 'saveNewPost',
            target: 'idle',
          },
          CANCEL: {
            actions: 'dismissPostEditor',
            target: 'idle',
          },
        },
      },
    },
  },
  {
    actions,
  },
);
