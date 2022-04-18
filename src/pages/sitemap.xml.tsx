import { GetServerSideProps, NextPage } from "next";
import { createGzip } from "node:zlib";
import { SitemapStream, streamToPromise } from "sitemap";
import { getTeamsFromCmsAsync } from "../cms/client";

const SitemapPage: NextPage = () => {
  return <></>;
};

const addUrls = async (smStream: SitemapStream) => {
  const teams = await getTeamsFromCmsAsync();
  const urls: string[] = teams.map((t) => `/teams/${t.slug}`);

  for (const url of urls) {
    smStream.write(url);
  }
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (!req || !res) {
    return {
      props: {},
    };
  }

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");

  const smStream = new SitemapStream({
    hostname: `https://${req.headers.host}/`,
  });

  const pipeline = smStream.pipe(createGzip());

  try {
    await addUrls(smStream);
    smStream.end();
    const resp = await streamToPromise(pipeline);

    res.write(resp);
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.write("Could not generate sitemap.");
    res.end();
  }

  return {
    props: {},
  };
};

export default SitemapPage;
