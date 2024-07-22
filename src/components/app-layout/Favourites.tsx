interface FavouritesProps {
  label: string;
}

export const Favourites = ({ label }: FavouritesProps) => {
  return <h1>{label}</h1>;
};
