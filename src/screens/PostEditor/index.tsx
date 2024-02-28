import React, {useEffect, useState} from 'react';

import {
  useGlobalActorRef,
  useGlobalSelector,
} from '../../contexts/GlobalContext';

import {CATEGORYPROPS, mockCategories} from '../../models/Category';

import {Controller, useForm} from 'react-hook-form';

import {
  Container,
  ErrorMessage,
  Input,
  TextArea,
  Footer,
  Cancel,
  CancelText,
  Submit,
  SubmitText,
  Category,
  ItemCategory,
  ItemCategoryText,
} from './styles';

export const PostEditor = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    shouldUnregister: false,
  });

  const {send} = useGlobalActorRef();

  const [isActive, setIsActive] = useState<string>('news');

  const currentPost = useGlobalSelector(state => state.context.currentPost);

  useEffect(() => {
    return () => send('CANCEL');
  }, [send]);

  useEffect(() => {
    setValue('title', currentPost?.title);
    setValue('uriImage', currentPost?.uriImage);
    setValue('description', currentPost?.description);
    setValue('category', currentPost?.category);

    setIsActive(currentPost?.category || 'news');


  }, [currentPost, setValue]);

  const handleEditTitle = (text: string) =>
    send({type: 'EDIT', data: {title: text}});

  const handleEditCategory = (text: string) => {
    setIsActive(text);
    send({type: 'EDIT', data: {category: text}});
  };

  const handleEditLink = (text: string) =>
    send({type: 'EDIT', data: {uriImage: text}});

  const handleEditDescription = (text: string) =>
    send({type: 'EDIT', data: {description: text}});

  const handleSave = () => {
    send({type: 'SAVE', postID: currentPost?.id ? currentPost?.id : undefined});
    setTimeout(() => {
      handleCancel();
    }, 100);
  };

  const handleCancel = () => send({type: 'CANCEL'});

  return (
    <Container>
      <Controller
        name="title"
        rules={{
          required: {
            value: true,
            message: 'Título é obrigatório!',
          },
          maxLength: {
            value: 50,
            message: 'Tamanho Máximo, 50 caracteres!',
          },
          minLength: {
            value: 3,
            message: 'Tamanho Minimo, 3 caracteres !',
          },
        }}
        control={control}
        defaultValue={null}
        render={({field: {onChange}}) => (
          <Input
            placeholder="Titulo"
            value={currentPost?.title}
            onChangeText={txt => {
              handleEditTitle(txt);
              onChange(txt);
            }}
          />
        )}
      />

      {errors.title && (
        <ErrorMessage>{errors.title?.message?.toString()}</ErrorMessage>
      )}

      <Controller
        name="category"
        control={control}
        defaultValue={null}
        render={({}) => (
          <Category>
            {mockCategories.map((category, index) => (
              <ItemCategory
                isActive={category.key === isActive}
                onPress={() => handleEditCategory(category.key)}>
                <ItemCategoryText isActive={category.key === isActive}>
                  {category.value}
                </ItemCategoryText>
              </ItemCategory>
            ))}
          </Category>
        )}
      />

      {errors.category && (
        <ErrorMessage>{errors.category?.message?.toString()}</ErrorMessage>
      )}

      <Controller
        name="uriImage"
        rules={{
          required: {
            value: true,
            message: 'Link é obrigaorio!',
          },
        }}
        control={control}
        defaultValue={null}
        render={({field: {onChange}}) => (
          <Input
            placeholder="Link da Imagem"
            value={currentPost?.uriImage}
            onChangeText={txt => {
              handleEditLink(txt);
              onChange(txt);
            }}
          />
        )}
      />

      {errors.uriImage && (
        <ErrorMessage>{errors.uriImage?.message?.toString()}</ErrorMessage>
      )}

      <Controller
        name="description"
        rules={{
          minLength: {
            value: 10,
            message: 'The minimum size, 10 characters',
          },
        }}
        control={control}
        defaultValue={null}
        render={({field: {onChange}}) => (
          <TextArea
            value={currentPost?.description ?? ''}
            onChangeText={txt => {
              handleEditDescription(txt);
              onChange(txt);
            }}
          />
        )}
      />

      {errors.description && (
        <ErrorMessage>{errors.description?.message?.toString()}</ErrorMessage>
      )}

      <Footer>
        <Cancel
          onPress={() => {
            handleCancel();
          }}>
          <CancelText>Cancelar</CancelText>
        </Cancel>
        <Submit onPress={handleSubmit(handleSave)}>
          <SubmitText>Salvar</SubmitText>
        </Submit>
      </Footer>
    </Container>
  );
};
