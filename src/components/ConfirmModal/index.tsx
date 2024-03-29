import React from 'react';
import {Modal} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Message,
  Footer,
  Cancel,
  CancelText,
  Submit,
  SubmitText,
} from './styles';
export const ConfirmModal = ({
  handleSubmit,
  handleCancel,
  modalVisible,
  mainMessage,
  questionMessage,
  type,
}: {
  handleSubmit: () => void;
  handleCancel: () => void;
  modalVisible: boolean;
  mainMessage: string;
  questionMessage: string;
  type: string;
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Container>
        <Header>
          <Title>Confirmação</Title>
        </Header>
        <Content>
          <Message>{mainMessage}</Message>
          <Message>{questionMessage}</Message>
        </Content>
        <Footer>
          <Cancel
            onPress={() => {
              handleCancel();
            }}>
            <CancelText>Cancelar</CancelText>
          </Cancel>
          <Submit
            type={type}
            onPress={() => {
              handleSubmit();
            }}>
            <SubmitText>Excluir</SubmitText>
          </Submit>
        </Footer>
      </Container>
    </Modal>
  );
};
