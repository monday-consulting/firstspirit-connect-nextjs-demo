import { useRouter } from "next/navigation";

export interface ButtonT {
  lt_button_text: string;
  lt_product_link?: { route: string };
  lt_internal?: {
    referenceId: string;
  };
}
interface ButtonProps {
  data: ButtonT;
}

const Button = ({ data }: ButtonProps) => {
  const clickHandler = () => {
    const router = useRouter();

    if (data.lt_product_link) {
      router.push(data.lt_product_link.route);
    }
  };

  return (
    <button
      type="button"
      className="border border-white p-3 capitalize hover:bg-gray-800 hover:text-white"
      onClick={clickHandler}
    >
      {data.lt_button_text}
    </button>
  );
};

export { Button };
