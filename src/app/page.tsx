import { getAllFsPages } from "@/gql/fsPages";
import Image from "next/image";

const Home = async () => {
  const pages = await getAllFsPages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {pages.map((page) => (
          <li key={page.id}>{page.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
