import Animation from "./_components/Animation";

export default async function Home() {
  const resp = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query ProjectsList {
            projects {
            title
            id
            img {
              url
              }
                slug
                context
                approach
                category
            }
          }`,
    }),
  });

  const { data } = await resp.json();

  return (
    <div>
      <Animation projects={data.projects} />
    </div>
  );
}
