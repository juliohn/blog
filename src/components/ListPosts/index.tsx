import React from 'react';
import {FlatList} from 'react-native';
import {useGlobalActorRef} from '../../contexts/GlobalContext';

import {PostView} from '../PostView';
import {POST} from '../../models/Post';

import {useRoute} from '@react-navigation/native';
import {SettingCardView} from '../SettingCardView';

export const ListPosts = ({data}: {data: [POST]}) => {
  const {send} = useGlobalActorRef();

  const route = useRoute();
  const routeName = route.name;

  const handleEditPost = (post: Post) => {
    send({type: 'SHOW_EDITOR'});
    send({type: 'EDIT', data: post});
  };

  const handleDeletePost = (postID: string) => {
    send({type: 'DELETE', postID});
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item, index}) =>
        routeName === 'Blog' ? (
          <PostView key={index} post={item} />
        ) : (
          <SettingCardView
            key={index}
            handleEditButton={handleEditPost}
            handleDeleteButton={handleDeletePost}
            post={item}
          />
        )
      }
      showsVerticalScrollIndicator={false}
    />
  );
};
