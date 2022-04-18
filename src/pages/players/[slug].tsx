import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPlayersFromCmsAsync, getTeamsFromCmsAsync } from "../../cms/client";
import CmsPlayer from "../../cms/CmsPlayer";

type PlayerPageProps = {
  player: CmsPlayer;
};

const PlayerPage: NextPage<PlayerPageProps> = ({ player }) => {
  return (
    <div>
      <Head>
        <title>{player.name}</title>
      </Head>
      <h1>{player.name}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PlayerPageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug;
    const players = await getPlayersFromCmsAsync();
    const player = players.find((t) => t.slug === slug);

    if (!player) {
      return {
        notFound: true,
      };
    }

    return {
      revalidate: 60 * 60,
      props: {
        player,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const players = await getPlayersFromCmsAsync();

  const slugs = players.map((p) => p.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};
export default PlayerPage;
