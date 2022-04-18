// https://nextjs.org/docs/advanced-features/custom-error-page

import { NextPage } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
