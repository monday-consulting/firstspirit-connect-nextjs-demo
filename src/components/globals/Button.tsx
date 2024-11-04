import { useRouter } from "@/i18n/routing";

export type ButtonProps = {
  text: string;
  link?: string;
};

const Button = ({ text, link }: ButtonProps) => {
  const clickHandler = () => {
    const router = useRouter();

    if (link) {
      router.push(link);
    }
  };

  return (
    <button
      type="button"
      className="border border-white p-3 capitalize hover:bg-textLight hover:text-white"
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export { Button };
