import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Portfolio Details SoleDigital - Creative Digital Agency ",
  description: "Portfolio SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;
