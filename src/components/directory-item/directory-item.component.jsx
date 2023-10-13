import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from './directory-item.styles';

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
