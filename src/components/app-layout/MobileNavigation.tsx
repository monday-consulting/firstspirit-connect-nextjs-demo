interface MobileNavigationProps {
  label: string;
  primary?: boolean;
}

export const MobileNavigation = ({ label, primary = true }: MobileNavigationProps) => {
  const mode = primary
    ? "storybook-mobilenavigation--primary"
    : "storybook-mobilenavigation--secondary";
  return <h1>{label}</h1>;
};
