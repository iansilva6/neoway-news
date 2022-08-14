export interface Object {
  [key: string]: string
}

export interface Filter {
  orderBy: string;
  filterBy: string;
}

export interface News {
  urlToImage?: string;
  title: string;
  description: string;
  publishedAt: string;
  author?: string;
  content?: string;
  url?: string;
}

export interface HandleFunctions {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
}