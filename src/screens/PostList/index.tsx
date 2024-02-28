import React, {useState} from 'react';
import {useGlobalSelector} from '../../contexts/GlobalContext';
import {ListPosts} from '../../components/ListPosts';
import {POST} from '../../models/Post';
import LottieView from 'lottie-react-native';

import {CATEGORYPROPS, mockCategories} from '../../models/Category';

import {
  CategoryFilters,
  ItemCategoryText,
  ItemCategory,
  ContainerLottie,
  ItemNoResults,
  Container,
} from './styles';

export const PostsList = () => {
  const currentPosts = useGlobalSelector(state => state.context.currentPosts);

  const [allPosts, setAllPosts] = useState<[POST]>(currentPosts);
  const [isActive, setIsActive] = useState<string>('all');

  const handleFilter = (item: CATEGORYPROPS) => {
    setIsActive(item.key);

    if (item.key === 'all') {
      setAllPosts(currentPosts);
      return;
    }
    const postsFiltered = currentPosts.filter(
      data => data.category === item.key,
    );
    setAllPosts(postsFiltered as [POST]);
  };

  const renderItem = ({item}: {item: CATEGORYPROPS}) => {
    return (
      <ItemCategory
        isActive={item.key === isActive}
        onPress={() => handleFilter(item)}>
        <ItemCategoryText isActive={item.key === isActive}>
          {item.value}
        </ItemCategoryText>
      </ItemCategory>
    );
  };

  return (
    <Container>
      <CategoryFilters
        data={[{"key": "all","value": "Todos"},...mockCategories]}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{margin: 6}}
        // keyExtractor={item : CATEGORYPROPS => item.}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {allPosts.length > 0 ? (
        <ListPosts data={allPosts} />
      ) : (
        <ContainerLottie>
          <ItemNoResults>Nenhum resultado encontrado</ItemNoResults>
          <LottieView
            source={require('../../assets/AnimationNoDataResults.json')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: '100%'}}
            autoPlay
          />
        </ContainerLottie>
      )}
    </Container>
  );
};
