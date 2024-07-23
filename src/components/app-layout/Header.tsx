interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return <h1>{label}</h1>;
};
