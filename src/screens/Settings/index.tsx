import React from 'react';
import {useGlobalSelector} from '../../contexts/GlobalContext';
import {ListPosts} from '../../components/ListPosts';

export const Settings = () => {
  const currentPosts = useGlobalSelector(state => state.context.currentPosts);
  return <ListPosts data={currentPosts} />;
};
