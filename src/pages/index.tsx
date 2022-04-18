import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { teams } from "./api/teams";

const Container = styled.div``;

const HomePage: NextPage = () => {
  return (
    <Container>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <ul>
        {teams.map((team) => (
          <li key={team.slug}>
            <Link href={`/teams/${team.slug}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomePage;
