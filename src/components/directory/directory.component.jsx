import DirectoryItem from '../directory-item/directory-item.component';
import categories from '../../categories.json';
import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, title, imageUrl, route }) => {
        return (
          <DirectoryItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            route={route}
          />
        );
      })}
    </DirectoryContainer>
  );
};

export default Directory;
