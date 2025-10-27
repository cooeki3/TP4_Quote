import ClientPage from "./ClientPage";

const ProjetPage = async ({ params }) => {
  const { projectIndex } = await params;

  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query MesSaxQuery($slug: String!) {
      project(where: {slug: $slug}) {
            title
            id
            img { url }
                slug
                context
                approach
                category
            }
      }`,
      variables: { slug: projectIndex },
    }),
  });

  const { data } = await response.json();

  return (
    <ClientPage
      slug={data.project.slug}
      context={data.project.context}
      approach={data.project.approach}
      category={data.project.category}
      title={data.project.title}
      id={data.project.id}
    />
  );
};

export default ProjetPage;
