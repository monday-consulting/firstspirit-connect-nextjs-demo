interface LogoProps {
  label: string;
}

export const Logo = ({ label }: LogoProps) => {
  return <h1>{label}</h1>;
};
