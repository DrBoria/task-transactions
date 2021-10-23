export type TMenu = {
  id: string;
  title: string;
  url: string;
};

export type TMessageTypes = 'success' | 'info' | 'warning' | 'error';

export type TMessage = {
  type: TMessageTypes;
  text: string;
};
