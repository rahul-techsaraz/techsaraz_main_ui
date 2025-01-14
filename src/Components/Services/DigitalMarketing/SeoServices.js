import React from "react";
import BenefitsSection from "../../BenefitsSection/BenefitsSection";
import { seoBenefitsData } from "../../../Constant/config/benefitsConfig";
import { constant } from "../../../Constant/en";
import SlideBoxAnimations from "../../SlideBoxAnimations/SlideBoxAnimations";
import { seoSlideAnimationConfig } from "../../../Constant/config/slideBoxAnimationsConfig";

const SeoServices = () => {
  const { title, description } = constant;
  return (
    <>
    <SlideBoxAnimations
           slideAnimationData={seoSlideAnimationConfig}

              />
      <BenefitsSection
        benefitsData={seoBenefitsData}
        title={title.seoBenefitTitle}
        description={description.seoBenefitDescription}
      />
    </>
  );
};

export default SeoServices;
