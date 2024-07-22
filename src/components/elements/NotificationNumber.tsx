interface NotificationNumberProps {
  amount: number;
}

export const NotificationNumber = ({ amount }: NotificationNumberProps) => {
  return (
    <span
      id="wishlistSize"
      className="-mb-4 -mr-4 absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm text-white"
    >
      {amount}
    </span>
  );
};
