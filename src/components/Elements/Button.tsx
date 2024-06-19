interface ButtonProps {
  label: string;
  primary?: boolean;
}

export const Button = ({
  label,
  primary = true,
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return(
    <h1>{ label }</h1>
  )
}
