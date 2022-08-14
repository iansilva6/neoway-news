import { Image } from "react-bootstrap";
import { New } from "./style";
import { formatDate } from "../../utils";
import { News } from "../../interfaces";

export const Article: React.FC<News> = ({
  urlToImage,
  title,
  description,
  publishedAt,
}) => {
  return (
    <New role="article" className="p-4 mb-4">
      <div className="text-center">
        <Image
          width={300}
          height={200}
          className={"mb-xs-4"}
          src={urlToImage}
          alt={title}
        />
      </div>
      <div className="ms-md-4 w-100">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>
          <strong>{formatDate(publishedAt)}</strong>
        </span>
      </div>
    </New>
  );
};
