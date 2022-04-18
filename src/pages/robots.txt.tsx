import { GetServerSideProps, NextPage } from "next";

const Robots: NextPage = () => {
  return <></>;
};

const allowRobots = true;

const getRobots = (host?: string) => {
  const allowed = `User-agent: * \nSitemap: https://www.${host}/sitemap.xml`;
  const disallowed = `User-agent: * \nDisallow: /\nHost: ${host}`;

  return allowRobots ? allowed : disallowed;
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (!req || !res) {
    return {
      props: {},
    };
  }

  res.setHeader("Content-Type", "text/plain");

  res.write(getRobots(req.headers.host));
  res.end();

  return {
    props: {},
  };
};

export default Robots;
