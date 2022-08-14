import { Image } from 'react-bootstrap'
import { New } from './style'
import { formatDate } from '../../utils'
import { NewData } from '../../interfaces'

export const Article: React.FC<NewData> = ({image, title, subtitle, createdAt}) => {
  return (
    <a href={'/ler-noticia'}>
      <New role="article" className="p-4 mb-4">
        <div className="text-center">
          <Image
            width={300}
            height={200}
            className={"mb-xs-4"}
            src={image}
            alt={title}
          />
        </div>
        <div className="ms-md-4 w-100">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>
            <strong>{formatDate(createdAt)}</strong>
          </span>
        </div>
      </New>
    </a>
  );
};
