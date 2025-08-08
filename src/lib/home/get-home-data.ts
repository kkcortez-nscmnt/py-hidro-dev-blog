import type {
  Project,
  Post,
  StrapiPost,
  StrapiResponse,
  StrapiProject,
} from "@/types/types";

export async function getHomeData(): Promise<{
  projects: Project[];
  posts: Post[];
}> {
  const apiUrl = process.env.NEXT_API_URL;
  const strapiUrl = process.env.NEXT_STRAPI_URL;

  const [projectRes, postRes] = await Promise.all([
    fetch(`${apiUrl}/projects?filters[featured][$eq]=true&populate=*`, {
      next: { revalidate: 60 },
    }),

    fetch(`${apiUrl}/posts?sort[0]=date:desc&populate=*`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch projects or posts.");
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects: Project[] = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${strapiUrl}${item.image.url}`
      : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  const posts: Post[] = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url
      ? `${strapiUrl}${item.image.url}`
      : "/images/no-image.png",
    date: item.date,
  }));

  return { projects, posts };
}
