interface CollatedTask {
  key: string;
  name: string;
}

export const collatedTasks: CollatedTask[] = [
  { key: "INBOX", name: "Inbox" },
  { key: "TODAY", name: "Today" },
  { key: "NEXT_7", name: "Next 7 Days" },
];
