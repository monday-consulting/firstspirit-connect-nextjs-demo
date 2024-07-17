import { getPageContentById } from "@/gql/pageContent";

const Home = async () => {
  // const pageContent = await getPageContentById("10f3e2ca-b451-5ab0-b83b-eba3034c55ea");
  // console.log(pageContent?.pageBodies?.map((item) => item?.children));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {pageContent && (
        <ul>
          {pageContent.pageBodies?.map((body) => (
            <li key={body?.children}>{body?.children}</li>
          ))}
        </ul>
      )} */}
    </main>
  );
};

export default Home;
