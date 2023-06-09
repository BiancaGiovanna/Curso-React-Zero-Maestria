interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category[];
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
}

export function Destrucuring({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quatidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}
