import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { teams, Team } from "../api/teams";

type TeamPageProps = {
  team: Team;
};

const TeamPage: NextPage<TeamPageProps> = ({ team }) => {
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>Manager</h2>
      <p> {team.manager.name}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug;

    const team = teams.find((t) => t.slug === slug);

    if (!team) {
      return {
        notFound: true,
      };
    }

    return {
      revalidate: 60 * 60,
      props: {
        team,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = teams.map((t) => t.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default TeamPage;
