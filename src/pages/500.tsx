// https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-500-page
import { NextPage } from "next";

const InternalServerErrorPage: NextPage = () => {
  return (
    <div>
      <h1>Min egen 500-side!</h1>
    </div>
  );
};

export default InternalServerErrorPage;
