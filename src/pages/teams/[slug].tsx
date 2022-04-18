import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getTeamsFromCmsAsync } from "../../cms/client";
import CmsTeam from "../../cms/CmsTeam";

type TeamPageProps = {
  team: CmsTeam;
};

const TeamPage: NextPage<TeamPageProps> = ({ team }) => {
  return (
    <div>
      <Head>
        <title>{team.name}</title>
      </Head>
      <h1>{team.name}</h1>
      <h2>Manager</h2>
      <p>{team.manager.name}</p>
      <h2>Players</h2>
      <ul>
        {team.players.map((p) => (
          <li key={p._id}>
            <Link href={`/players/${p.slug}`} passHref>
              <a>
                {p.name} ({p.position})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug;
    const teams = await getTeamsFromCmsAsync();
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
  const teams = await getTeamsFromCmsAsync();
  const slugs = teams.map((t) => t.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default TeamPage;
