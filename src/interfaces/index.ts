export interface Object {
  [key: string]: string
}

export interface Filter {
  orderBy: string;
  filterBy: string;
}

export interface NewData {
  image: string;
  title: string;
  subtitle: string;
  createdAt: string;
}

export interface HandleFunctions {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}