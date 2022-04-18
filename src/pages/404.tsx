// https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-404-page
import { NextPage } from "next";

const FourOhFourPage: NextPage = () => {
  return (
    <div>
      <h1>Min egen 404-side!</h1>
    </div>
  );
};

export default FourOhFourPage;
