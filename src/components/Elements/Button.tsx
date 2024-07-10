interface Button {
  lt_button_text: string;
  lt_product_link?: { route: string };
  lt_internal?: {
    referenceId: string;
  };
}
interface ButtonProps {
  primary?: boolean;
  data: Button;
}

export const Button = ({ data, primary = true }: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  const clickHandler = () => {};
  return (
    <button className="border border-white p-3 capitalize hover:bg-gray-800" onClick={clickHandler}>
      {data.lt_button_text}
    </button>
  );
};
