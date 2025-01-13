import React from 'react';

const SocialMediaMarketingCompetitors = () => {
  const competitorData = [
    {
      iconClass: 'fa-earth-americas',
      title: 'Custom Plans',
      description:
        'At Tech Saraz, we create unique plans that fit each client\'s needs. We take the time to learn about your business, audience, and industry to help you stand out online.',
    },
    {
      iconClass: 'fa-laptop',
      title: 'Complete Service',
      description:
        'We do more than create posts. We monitor your social media, chat with your audience, and keep improving your plan. This full service makes sure we deliver outstanding results.',
    },
    {
      iconClass: 'fa-people-group',
      title: 'Skilled Team & Modern Tools',
      description:
        'Tech Saraz has a team of Social media experts who know all the latest trends and technicians. We use new tools and study data to make intelligent choices, keeping your business ahead.',
    },
  ];

  return (
    <section className="social-media-marketing-competitors">
      <div className="social-media-marketing-competitors-pulse">
        <img src="images/competitor-analysis.png" alt="Competitor Analysis" />
      </div>
      <div className="social-media-marketing-competitors-in-box">
        <h1 className="social-media-marketing-competitors-h1">
          What sets Tech Saraz apart from its competitors?
        </h1>
        <div className="social-media-marketing-competitors-in-box-wraper">
          {competitorData.map((item, index) => (
            <div className="social-media-marketing-competitors-box" key={index}>
              <div className="social-media-marketing-competitors-box-i">
                <i className={`fa-solid ${item.iconClass}`}></i>
              </div>
              <h1 className="social-media-marketing-competitors-box-h1">
                {item.title}
              </h1>
              <p className="social-media-marketing-competitors-box-p">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaMarketingCompetitors;
