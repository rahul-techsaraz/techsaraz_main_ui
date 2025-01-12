import React from "react";
import SocialMediaMarketingCompetitors from "../../../Pages/Services/DigitalMarketing/SocialMarketingCompititor";
import { OurEcommerce } from "../../../Pages/Services/WebDevelopment/WebApplicationDevelopment/EcommerceDevelopment";
import BenefitsSection from "../../BenefitsSection/BenefitsSection";
import { seoBenefitsData } from "../../../Constant/config/benefitsConfig";
import { constant } from "../../../Constant/en";

const SeoServices = () => {
  const { title, description } = constant;
  return (
    <>
      <SocialMediaMarketingCompetitors />
      <OurEcommerce />
      <BenefitsSection
        benefitsData={seoBenefitsData}
        title={title.seoBenefitTitle}
        description={description.seoBenefitDescription}
      />
    </>
  );
};

export default SeoServices;
