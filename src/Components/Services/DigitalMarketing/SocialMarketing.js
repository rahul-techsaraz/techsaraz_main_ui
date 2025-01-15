import React from 'react';
import SlideBoxAnimations from '../../SlideBoxAnimations/SlideBoxAnimations';
import { socialMediaMarketingSlideAnimationConfig } from '../../../Constant/config/slideBoxAnimationsConfig';

const SocialMarketing = () => {
  return (
    <>
      <SlideBoxAnimations
        slideAnimationData={socialMediaMarketingSlideAnimationConfig}
      />
    </>
  );
};

export default SocialMarketing;
