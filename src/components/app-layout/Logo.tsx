interface LogoProps {
  label: string;
  primary?: boolean;
}

export const Logo = ({ label, primary = true }: LogoProps) => {
  const mode = primary ? "storybook-logo--primary" : "storybook-logo--secondary";
  return <h1>{label}</h1>;
};
