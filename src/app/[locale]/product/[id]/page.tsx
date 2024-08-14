import { ProductOverview } from "@/components/section/ProductOverview";
import { getAllProducts } from "@/gql/documents/products";

const SlugPage = async ({
    params,
}: {
    params: { locale: string; id: string };
}) => {
    const doorLocksRaw = await getAllProducts(params.locale);

    const filteredProducts = doorLocksRaw.filter((item) => {
        const parsedData = JSON.parse(item.data);
        return parsedData.tt_categories[0].id === params.id;
    });

    const doorLocks = filteredProducts.map((item) => ({
        route: item.route,
        data: JSON.parse(item.data),
        id: item.fsId,
    }));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ProductOverview
                products={doorLocks.map((item) => ({
                    image: {
                        src: item.data.tt_image.resolutions.ORIGINAL.url,
                        alt: item.data.tt_image_alt_text,
                    },
                    categories: item.data.tt_categories[0].data.tt_name,
                    name: item.data.tt_name,
                    price: item.data.tt_price,
                    id: item.id,
                    route: item.route,
                }))}
            />
        </main>
    );
};

export default SlugPage;
