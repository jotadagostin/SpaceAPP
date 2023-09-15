import tags from "./tags.json";

const Tags = () => {
  return (
    <>
      <p>Busque por Tags:</p>
      {tags.map((tag) => (
        <button key={tag.id}>{tag.titulo}</button>
      ))}
    </>
  );
};

export default Tags;
