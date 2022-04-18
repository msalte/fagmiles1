import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getTeamsFromCmsAsync } from "../cms/client";
import CmsTeam from "../cms/CmsTeam";

const Container = styled.div``;

type HomePageProps = {
  teams: CmsTeam[];
};

const HomePage: NextPage<HomePageProps> = ({ teams }) => {
  return (
    <Container>
      <Head>
        <title>NextJS FagMiles</title>
      </Head>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>
            <Link href={`/teams/${team.slug}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const teams = await getTeamsFromCmsAsync();

  return {
    props: {
      teams,
    },
  };
};

export default HomePage;
