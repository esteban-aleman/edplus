export type LinkProps = {
  text: string;
  target?: string;
  url: string;
};
export type FooterColumnProps = {
  title: string;
  links: Array<LinkProps>;
};
