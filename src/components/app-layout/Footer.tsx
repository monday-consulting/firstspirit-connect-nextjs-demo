interface FooterProps {
  label: string;
  primary?: boolean;
}

export const Footer = ({ label, primary = true }: FooterProps) => {
  const mode = primary ? "storybook-footer--primary" : "storybook-footer--secondary";
  return <h1>{label}</h1>;
};
