import CmsBase from "./CmsBase";

type CmsManager = CmsBase & {
  name: string;
  slug: string;
};

export default CmsManager;
