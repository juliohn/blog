import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 8px;
`;

export const ImageCover = styled.Image`
  border-radius: 4px;
  width: 100%;
  height: 160px;
`;

export const Main = styled.View`
  padding: 4px;
  margin-top: 0.5px;
  margin-bottom: 0.5px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.textTitle};
  font-weight: bold;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 4,
})`
  margin-top: 8px;
  margin-bottom: 9px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const ReadMore = styled.Text`
  margin-top: 8px;
  margin-bottom: 9px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.backgroundPrimary};
  line-height: 16px;
`;

export const PublishedAtContainer = styled.View`
  position: absolute;
  top: 4px;
  right: 4px;
  height: 24px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.danger};
`;

export const PublishedAt = styled.Text`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #ffffff;
`;

export const ActionsContainer = styled.View`
  flex-direction: row-reverse;
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
  border-bottom-width: 0.3px;
  margin-top: 4px;
  padding-bottom: 5px;
`;

export const ActionButton = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40px;
  margin: 5px;
  background-color: ${({theme}) => theme.colors.danger};
`;

export const DetailsButton = styled.TouchableOpacity`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  width: 128px;
  background-color: ${({theme}) => theme.colors.danger};
`;
