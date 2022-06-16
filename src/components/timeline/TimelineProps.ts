export type TimelineEntryProps = {
  date: string;
  title: string;
  description: string;
};

export type TimelineProps = {
  entries: Array<TimelineEntryProps>;
  title: string;
};
