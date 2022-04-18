import { GetServerSideProps, NextPage } from "next";

type ManagerPageProps = {
  path: string;
};

const ManagerPage: NextPage<ManagerPageProps> = ({ path }) => {
  return <div>{path}</div>;
};

export const getServerSideProps: GetServerSideProps<ManagerPageProps> = async (
  context
) => {
  const path = context.resolvedUrl;

  return {
    props: {
      path,
    },
  };
};

export default ManagerPage;
