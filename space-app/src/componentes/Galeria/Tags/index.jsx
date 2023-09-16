import tags from "./tags.json";
import { styled } from 'styled-components';


const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`

const Tags = () => {
  return (
    <TagsContainer>
      <p>Busque por Tags:</p>
      {tags.map((tag) => (
        <button key={tag.id}>{tag.titulo}</button>
      ))}
    </TagsContainer>
  );
};

export default Tags;
