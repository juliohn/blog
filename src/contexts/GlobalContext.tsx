import React from 'react';
import {createActorContext} from '@xstate/react';
import {globalController} from '../controllers/globalController';
import {PropsWithChildren} from 'react';
import {useNavigation} from '@react-navigation/native';
import {POST, mockData} from '../models/Post';

const GlobalStateContext = createActorContext(globalController);
const useGlobalActor = GlobalStateContext.useActor;
const useGlobalSelector = GlobalStateContext.useSelector;
const useGlobalActorRef = GlobalStateContext.useActorRef;

const GlobalStateProvider = (props: PropsWithChildren) => {
  const navigation = useNavigation<any>();

  const currentPosts = mockData;

  return (
    <GlobalStateContext.Provider
      machine={globalController.withContext({
        navigationController: navigation,
        currentPosts: currentPosts as [POST],
      })}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export {
  useGlobalActor,
  useGlobalActorRef,
  useGlobalSelector,
  GlobalStateProvider,
};
