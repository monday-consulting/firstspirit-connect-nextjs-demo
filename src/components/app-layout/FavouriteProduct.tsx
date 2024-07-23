import React from "react";

interface FavouriteProductProps {
  label: string;
}

export const FavouriteProduct = ({ label }: FavouriteProductProps) => {
  return <h1>{label}</h1>;
};
