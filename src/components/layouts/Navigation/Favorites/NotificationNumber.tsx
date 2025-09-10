export type NotificationNumberProps = {
  amount: number;
};

const NotificationNumber = ({ amount }: NotificationNumberProps) => {
  return (
    <span className="-mb-4 -mr-4 absolute right-1 bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-sm text-white">
      {amount}
    </span>
  );
};

export { NotificationNumber };
