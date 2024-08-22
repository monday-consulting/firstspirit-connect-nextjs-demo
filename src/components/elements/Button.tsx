import { useRouter } from "next/navigation";

export type ButtonProps = {
  lt_button_text: string;
  lt_product_link?: { route: string };
  lt_internal?: {
    referenceId: string;
  };
};

const Button = ({ lt_button_text, lt_product_link, lt_internal }: ButtonProps) => {
  const clickHandler = () => {
    const router = useRouter();

    if (lt_product_link) {
      router.push(lt_product_link.route);
    }
  };

  return (
    <button
      type="button"
      className="border border-white p-3 capitalize hover:bg-gray-800 hover:text-white"
      onClick={clickHandler}
    >
      {lt_button_text}
    </button>
  );
};

export { Button };
