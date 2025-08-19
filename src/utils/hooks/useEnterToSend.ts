export const useEnterToSend = (callback: () => void) => {
  return (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      callback();
    }
  };
};
