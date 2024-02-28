import React from 'react';

import {PostView} from '../../components/PostView';

import {RouteProp} from '@react-navigation/native';

import {useRoute} from '@react-navigation/native';

import {POST} from '../../models/Post';

export type ParamListDetails = {
  post: {
    post: POST;
  };
};

export const PostDetails = () => {
  const route = useRoute<RouteProp<ParamListDetails, 'post'>>();
  const post = route.params.post;

  return <PostView post={post} />;
};
