interface HeaderProps {
  label: string;
  primary?: boolean;
}

export const Header = ({ label, primary = true }: HeaderProps) => {
  const mode = primary ? "storybook-header--primary" : "storybook-header--secondary";
  return <h1>{label}</h1>;
};
