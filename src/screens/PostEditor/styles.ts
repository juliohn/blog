import styled from 'styled-components/native';

interface ItemCategoryProps {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  row-gap: 8px;
  margin: 10px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  margin-left: 2px;
  color: ${({theme}) => theme.colors.danger};
`;

export const TextArea = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.textInput,
  placeholder: 'Detalhes',
  multiline: true,
}))`
  background-color: ${({theme}) => theme.colors.textInputBackground};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.neutralDark};
  padding: 2px;
  color: ${({theme}) => theme.colors.textInput};
  border-radius: 6px;
  flex: 2;
`;

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.textInput,
}))`
  background-color: ${({theme}) => theme.colors.textInputBackground};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.neutralDark};
  border-radius: 6px;
  padding: 2px;
  color: ${({theme}) => theme.colors.textInput};
  height: 40px;
`;

export const Cancel = styled.TouchableOpacity`
  flex: 1;
  padding: 7px;
  margin-right: 12px;
  background: ${({theme}) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-width: 0.5px;
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const CancelText = styled.Text`
  color: ${({theme}) => theme.colors.backgroundOpposite};
  font-size: 18px;
`;

export const Submit = styled.TouchableOpacity`
  flex: 1;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${({theme}) => theme.colors.success};
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
`;

export const Category = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  border: 1px solid #000;
  align-items: center;
  padding-left: 4px;
`;

export const ItemCategory = styled.TouchableOpacity<ItemCategoryProps>`
  height: 30px;
  width: 105px;
  padding: 4px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${({isActive, theme}) =>
    isActive ? theme.colors.danger : theme.colors.textSecondary};
`;

export const ItemCategoryText = styled.Text<ItemCategoryProps>`
  color: ${({isActive, theme}) =>
    isActive
      ? theme.colors.backgroundPrimary
      : theme.colors.backgroundOpposite};
`;


