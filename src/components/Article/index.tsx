import { Image } from "react-bootstrap";
import { New } from "./style";

export const Article = () => {
  return (
    <New className="p-4">
      <div className="text-center">
        <Image
          width={300}
          className={'mb-xs-4'}
          src={
            "https://s.yimg.com/os/creatr-uploaded-images/2022-07/c57b1660-033d-11ed-9fda-8da1ceb296ff"
          }
        />
      </div>
      <div className='ms-md-4'>
        <h2>Title</h2>
        <p>
          Este poderia ser o post de um fórum, um artigo de revista ou jornal,
          um post de um blog, um comentário enviado por um usuário, um gadget ou
          widget interativos, ou qualquer outra forma de conteúdo independente.
        </p>
        <span><strong>12/02/2022</strong></span>
      </div>
    </New>
  );
};
