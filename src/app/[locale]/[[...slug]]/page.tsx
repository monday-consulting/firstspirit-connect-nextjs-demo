import { Home } from "@/components/page-layout/Home";
import { StandardLayout } from "@/components/page-layout/StandardLayout";
import { getPageContentById } from "@/gql/pageContent";
import type { PageBody } from "fsxa-api";

const SlugPage = async () => {
  const pageContent = await getPageContentById("10f3e2ca-b451-5ab0-b83b-eba3034c55ea");
  const pageBodies = pageContent?.pageBodies?.map((item) => item) as PageBody[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {pageContent?.layout === "home" && (
        <>
          <Home path="test" />
        </>
      )}
      {pageContent?.layout === "standard" && (
        <>
          <StandardLayout pageBodies={pageBodies} />
        </>
      )}
    </main>
  );
};

export default SlugPage;
