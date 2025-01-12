import React from 'react'
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner'
import BestCompanySection from '../../BestCompanySection/BestCompanySection'
import CompetitorSection from '../../CompetitorSection/CompetitorSection'
import { serviceGraphicsDesignConfig } from '../../../Constant/config/servicesConfig'
import ServiceSection from '../ServiceSection '
import { constants } from '../../../Constant/constants'

const GraphicsDesign = () => {
  return (
    <>
    <LetterHeroBanner
          headingText={"GRAPHICS DESIGN"} 
          socialIcons={constants.socialIcons} 
          subtitle={constants.heroBannerHeading.subtitle}
          linkText={constants.heroBannerHeading.linkText} 
          linkUrl={constants.heroBannerHeading.linkUrl}
          />
    <BestCompanySection />
    <CompetitorSection />
    <div>
      {serviceGraphicsDesignConfig.map((section) => (
        <ServiceSection
          key={section.id}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          altText={section.altText}
          points={section.points}
          pulseImageSrc={section.pulseImageSrc}
          pulseAltText={section.pulseAltText}
          imageSide={section.id % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
    </>
  )
}

export default GraphicsDesign