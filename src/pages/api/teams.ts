// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Manager = {
  slug: string;
  name: string;
};

export type Team = {
  slug: string;
  name: string;
  manager: Manager;
};

export const teams: Team[] = [
  {
    slug: "liverpool",
    name: "Liverpool",
    manager: {
      slug: "jurgen-klopp",
      name: "Jurgen Klopp",
    },
  },
  {
    slug: "manchester-united",
    name: "Manchester United",
    manager: {
      slug: "ralf-ragnick",
      name: "Ralf Rangnick",
    },
  },
  {
    slug: "manchester-city",
    name: "Manchester City",
    manager: {
      slug: "pep-guardiola",
      name: "Pep Guardiola",
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team[]>
) {
  res.status(200).json(teams);
}
