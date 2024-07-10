interface HomeProps {
  label: string;
  primary?: boolean;
}

export const Home = ({
  label,
  primary = true,
}: HomeProps) => {
  const mode = primary ? 'storybook-home--primary' : 'storybook-home--secondary';
  return(
    <h1>{ label }</h1>
  )
}
