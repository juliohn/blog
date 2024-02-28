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

export const Description = styled.Text`
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
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 12px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.backgroundPrimary};
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

export const Category = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 128px;
  background-color: ${({theme}) => theme.colors.danger};
`;
