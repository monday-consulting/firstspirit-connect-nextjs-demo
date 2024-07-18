import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

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

const Button = ({ data, primary = true }: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";

    const clickHandler = () => {
        const router = useRouter();

        if (data.lt_product_link) {
            router.push(data.lt_product_link.route);
        }
    };

    return (
        <button
            type="button"
            className={cn(
                mode,
                "border border-white p-3 capitalize hover:bg-gray-800 hover:text-white"
            )}
            onClick={clickHandler}
        >
            {data.lt_button_text}
        </button>
    );
};

export { Button };
