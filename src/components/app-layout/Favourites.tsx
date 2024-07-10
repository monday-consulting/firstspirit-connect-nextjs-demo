interface FavouritesProps {
  label: string;
  primary?: boolean;
}

export const Favourites = ({ label, primary = true }: FavouritesProps) => {
  const mode = primary ? "storybook-favourites--primary" : "storybook-favourites--secondary";
  return <h1>{label}</h1>;
};
