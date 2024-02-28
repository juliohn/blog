import styled from 'styled-components/native';

interface ItemCategoryProps {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  margin: 10px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  align-items: center;
`;

export const CategoryFilters = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  height: 35px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;

export const ItemCategory = styled.TouchableOpacity<ItemCategoryProps>`
  height: 30px;
  width: 100px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${({isActive, theme}) =>
    isActive ? theme.colors.danger : theme.colors.textSecondary};
`;

export const ItemCategoryText = styled.Text<ItemCategoryProps>`
  color: ${({isActive, theme}) =>
    isActive
      ? theme.colors.backgroundPrimary
      : theme.colors.backgroundOpposite};
`;

export const ContainerLottie = styled.SafeAreaView`
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 200px;
  margin-top: 50px;
`;

export const ItemNoResults = styled.Text`
  color: ${({theme}) => theme.colors.backgroundOpposite};
  margin-bottom: 50px;
`;
