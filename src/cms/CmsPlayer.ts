import CmsBase from "./CmsBase";

type CmsPlayer = CmsBase & {
  name: string;
  slug: string;
  position: string; 
};

export default CmsPlayer;
