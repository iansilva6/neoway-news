import { Image } from 'react-bootstrap'
import { New } from './style'
import moment from 'moment'

type Props = {
  image: string;
  title: string;
  subtitle: string;
  createdAt: string;
}

export const Article: React.FC<Props> = ({image, title, subtitle, createdAt}) => {
  return (
    <a href={'/read'}>
      <New className="p-4 mb-4">
        <div className="text-center">
          <Image
            width={300}
            height={200}
            className={"mb-xs-4"}
            src={image}
          />
        </div>
        <div className="ms-md-4 w-100">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>
            <strong>{moment(createdAt).format('DD/MM/YYYY')}</strong>
          </span>
        </div>
      </New>
    </a>
  );
};
