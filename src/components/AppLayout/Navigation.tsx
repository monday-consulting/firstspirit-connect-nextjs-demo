interface NavigationProps {
  label: string;
  primary?: boolean;
}

export const Navigation = ({
  label,
  primary = true,
}: NavigationProps) => {
  const mode = primary ? 'storybook-navigation--primary' : 'storybook-navigation--secondary';
  return(
    <h1>{ label }</h1>
  )
}
