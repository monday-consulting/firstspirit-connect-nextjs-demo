import SlugPage from "../../../products/[category]/[group]/page"

const SlugPageDe = async ({
  params,
}: {
  params: { locale: string; group: string };
}) => {
  return (
    <SlugPage params={{...params}} />
  );
};

export default SlugPageDe;
