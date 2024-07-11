interface LinebreakProps {
  primary?: boolean;
}

export const Linebreak = ({ primary = true }: LinebreakProps) => {
  const mode = primary ? "storybook-linebreak--primary" : "storybook-linebreak--secondary";
  return (
    <>
      <br />
    </>
  );
};
