import CmsBase from "./CmsBase";
import CmsManager from "./CmsManager";
import CmsPlayer from "./CmsPlayer";

type CmsTeam = CmsBase & {
  name: string;
  slug: string;
  manager: CmsManager;
  players: CmsPlayer[];
};

export default CmsTeam;
