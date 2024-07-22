interface FooterProps {
  label: string;
}

export const Footer = ({ label }: FooterProps) => {
  return <h1>{label}</h1>;
};
