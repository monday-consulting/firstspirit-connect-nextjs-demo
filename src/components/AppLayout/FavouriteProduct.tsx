import React from "react";

interface FavouriteProductProps {
  label: string;
  primary?: boolean;
}

export const FavouriteProduct = ({
  label,
  primary = true,
}: FavouriteProductProps) => {
  const mode = primary ? 'storybook-favouriteproduct--primary' : 'storybook-favouriteproduct--secondary';
  return(
    <h1>{ label }</h1>
  );
};
