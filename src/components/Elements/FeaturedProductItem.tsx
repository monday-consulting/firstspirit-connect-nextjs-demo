interface FeaturedProductItemProps {
  label: string;
  primary?: boolean;
}

export const FeaturedProductItem = ({
  label,
  primary = true,
}: FeaturedProductItemProps) => {
  const mode = primary ? 'storybook-featuredproductitem--primary' : 'storybook-featuredproductitem--secondary';
  return(
    <h1>{ label }</h1>
  )
}
