interface NotificationNumberProps {
  amount: number;
  primary?: boolean;
}

export const NotificationNumber = ({ amount, primary = true }: NotificationNumberProps) => {
  const mode = primary
    ? "storybook-notificationnumber--primary"
    : "storybook-notificationnumber--secondary";
  return (
    <span
      id="wishlistSize"
      className="-mb-4 -mr-4 absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm text-white"
    >
      {amount}
    </span>
  );
};
