interface LanguageSwitchProps {
  label: string;
}

export const LanguageSwitch = ({ label }: LanguageSwitchProps) => {
  return <h1>{label}</h1>;
};
