interface LanguageSwitchProps {
  label: string;
  primary?: boolean;
}

export const LanguageSwitch = ({
  label,
  primary = true,
}: LanguageSwitchProps) => {
  const mode = primary ? 'storybook-languageswitch--primary' : 'storybook-languageswitch--secondary';
  return(
    <h1>{ label }</h1>
  )
}
