export type EntryProps = {
  date: string;
  title: string;
  description: string;
  order: number;
  isFirst: boolean;
  isLast: boolean;
  revealLine?: boolean;
  isInView: (isInView: boolean) => void;
};
