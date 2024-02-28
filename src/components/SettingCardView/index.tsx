import React, {useState, useMemo, useCallback} from 'react';

import {Animated} from 'react-native';

import {POST} from '../../models/Post';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ToCamelCase} from '../../helpers/functions';

import {ConfirmModal} from '../ConfirmModal';

import {useTheme} from 'styled-components';

import {
  Container,
  Main,
  Title,
  Description,
  ActionButton,
  ActionsContainer,
} from './styles';

export const SettingCardView = ({
  post,
  handleEditButton,
  handleDeleteButton,
}: {
  post: POST;
  handleEditButton: (data: POST) => void;
  handleDeleteButton: (postID: string) => void;
}) => {
  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;

  const [modalVisible, setModalVisible] = useState(false);

  const opacity = useState(new Animated.Value(1))[0];

  const handleSubmit = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      handleDeleteButton(post.id);
    }, 300);
  }, [handleDeleteButton, opacity, post.id]);

  const renderModalConfirmation = useMemo(
    () =>
      modalVisible && (
        <ConfirmModal
          handleSubmit={handleSubmit}
          handleCancel={() => setModalVisible(false)}
          modalVisible={modalVisible}
          mainMessage={
            'Quando este item for excluido não haverá como recuperar.'
          }
          questionMessage={'Deseja continuar?'}
          type={'Negative'}
        />
      ),
    [handleSubmit, modalVisible],
  );

  return (
    <Container>
      <Animated.View style={[{opacity}]}>
        <Main>
          <Title>{ToCamelCase(post.title)}</Title>

          <Description>{ToCamelCase(post.description)}</Description>

          <ActionsContainer>
            <ActionButton onPress={() => setModalVisible(true)}>
              <MaterialIcons
                size={18}
                name={'delete-outline'}
                color={colors.backgroundPrimary}
              />
            </ActionButton>

            <ActionButton onPress={() => handleEditButton(post)}>
              <MaterialIcons
                size={18}
                name={'edit'}
                color={colors.backgroundPrimary}
              />
            </ActionButton>
          </ActionsContainer>
        </Main>

        {renderModalConfirmation}
      </Animated.View>
    </Container>
  );
};
