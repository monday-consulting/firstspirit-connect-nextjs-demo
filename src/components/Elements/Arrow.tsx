import React from "react";

interface ArrowProps {
  primary?: boolean;
}

export const Arrow = ({ primary = true }: ArrowProps) => {
  const mode = primary ? "storybook-arrow--primary" : "storybook-arrow--secondary";
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Arrow Icon</title>
      <path
        d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
