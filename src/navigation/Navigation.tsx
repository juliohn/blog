import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import {PostEditor} from '../screens/PostEditor';
import {PostsList} from '../screens/PostList';
import {PostDetails} from '../screens/PostDetails';

import {Settings} from '../screens/Settings';
import {useGlobalActorRef} from '../contexts/GlobalContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {backgroundColor: colors.backgroundPrimary, alignItems: 'center'},
        ],
      }}
      sceneContainerStyle={{backgroundColor: colors.backgroundPrimary}}>
      <Tab.Screen
        name="Blog"
        component={PostsList}
        options={{
          tabBarLabel: () => {
            return null;
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <MaterialIcons
              size={24}
              name={'checklist-rtl'}
              color={colors.backgroundOpposite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: AddNewPost,
          tabBarLabel: () => {
            return null;
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <MaterialIcons
              size={24}
              name={'settings'}
              color={colors.backgroundOpposite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AddNewPost = () => {
  const {send} = useGlobalActorRef();

  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;

  return (
    <TouchableOpacity
      style={{marginRight: 20}}
      onPress={() => send('SHOW_EDITOR')}>
      <MaterialIcons size={24} name={'add-circle'} color={colors.success} />
    </TouchableOpacity>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Group>
        <RootStack.Screen name="Tabs" component={Tabs} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: 'Editor de Post',
        }}>
        <Tab.Screen name="PostEditor" component={PostEditor} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: 'Detalhes do Post',
        }}>
        <Tab.Screen name="PostDetails" component={PostDetails} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export type RootStackParamList = {
  PostEditor: {};
  Tabs: {};
};
