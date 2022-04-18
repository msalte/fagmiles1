import SanityClient from "@sanity/client";
import CmsPlayer from "./CmsPlayer";
import CmsTeam from "./CmsTeam";

const sanityClient = SanityClient({
  projectId: "rv6wayhy",
  dataset: "production",
  apiVersion: "2022-04-18",
});

export const getTeamsFromCmsAsync = async (): Promise<CmsTeam[]> => {
  const teams = await sanityClient.fetch<CmsTeam[]>(
    `*[_type == "team"] { _id, name, slug, manager -> { _id, slug, name }, players[] -> { _id, name, slug, position} }`
  );

  return teams;
};

export const getPlayersFromCmsAsync = async (): Promise<CmsPlayer[]> => {
  const players = await sanityClient.fetch<CmsPlayer[]>(
    `*[_type == "player"] { _id, name, slug, position }`
  );

  return players;
};
