import React from 'react';

import {POST} from '../../models/Post';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ToCamelCase} from '../../helpers/functions';

import {useTheme} from 'styled-components';

import {useGlobalActorRef} from '../../contexts/GlobalContext';

import {useRoute} from '@react-navigation/native';

import {mockCategories} from '../../models/Category';

import {
  Container,
  ImageCover,
  Main,
  Title,
  Description,
  ReadMore,
  PublishedAtContainer,
  PublishedAt,
  DetailsButton,
  Category,
} from './styles';

export const PostView = ({post}: {post: POST}) => {
  const route = useRoute();
  const routeName = route.name;

  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;

  const category = mockCategories.find(data => data.key === post.category);

  const {send} = useGlobalActorRef();

  const handleDetails = (post: POST) => {
    send({type: 'DETAILS', data: post});
  };

  return (
    <Container>
      <ImageCover
        source={{
          uri: post.uriImage,
        }}
        resizeMethod="resize"
      />

      <Main>
        <Title>{ToCamelCase(post.title)}</Title>
        <Description
          numberOfLines={routeName === 'Blog' ? 4 : post.description?.length}>
          {ToCamelCase(post.description)}
        </Description>
        {routeName === 'Blog' ? (
          <DetailsButton
            onPress={() => {
              handleDetails(post);
            }}>
            <ReadMore>Leia Mais</ReadMore>
            <MaterialIcons
              size={18}
              name={'arrow-forward'}
              color={colors.backgroundPrimary}
            />
          </DetailsButton>
        ) : (
          <Category>
            <ReadMore>{category?.value}</ReadMore>
          </Category>
        )}
      </Main>

      <PublishedAtContainer>
        <PublishedAt>{post.publishedAt}</PublishedAt>
      </PublishedAtContainer>
    </Container>
  );
};
