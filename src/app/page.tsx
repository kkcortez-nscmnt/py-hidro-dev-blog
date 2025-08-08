import FeaturedProjects from "@/components/FeaturedProjects";
import AboutPreview from "@/components/AboutPreview";
import LatestPosts from "@/components/LatestPost";
import { getHomeData } from "@/lib/home/get-home-data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "PyHidroDev",
    description: "Tratamento de dados e desenvolvimento web.",
  };
}

const HomePage =async () => {
const { projects, posts } = await getHomeData();

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <LatestPosts posts={posts} limit={5} />
      <AboutPreview />
    </>
  );
};

export default HomePage;
