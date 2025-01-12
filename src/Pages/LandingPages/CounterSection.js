import React, { useEffect, useState } from 'react';
import { images } from '../../Constant/images';

const CounterSection = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [completeProjects, setCompleteProjects] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [winningAwards, setWinningAwards] = useState(0);

  const {
    serviceImage,
    workFromHome3image,
    expertiseImage,
    sportsTrophyImage,
  } = images;

  // Function to increment the counter
  const incrementCounter = (setter, targetValue, time) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < targetValue) {
        count += 1;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, time); // Increment counter every 50ms
  };

  useEffect(() => {
    incrementCounter(setHappyClients, 225, 15); // Example target value for Happy Clients
    incrementCounter(setCompleteProjects, 470, 10); // Example target value for Complete Projects
    incrementCounter(setYearsOfExperience, 8, 50); // Example target value for Years of Experience
    incrementCounter(setWinningAwards, 25, 50); // Example target value for Winning Awards
  }, []);
  return (
    <section className="counter">
      <div className="counter-in-box">
        <div className="stats-container">
          <div className="stat">
            <div className="counter-img">
              <img src={serviceImage} alt="Happy Clients" />
            </div>
            <div className="subscribers-odometer odometer plus">
              {happyClients}
            </div>
            <div className="type">Happy Clients</div>
          </div>

          <div className="stat">
            <div className="counter-img">
              <img src={workFromHome3image} alt="Complete Projects" />
            </div>
            <div className="videos-odometer odometer plus">
              {completeProjects}
            </div>
            <div className="type">Complete Projects</div>
          </div>

          <div className="stat">
            <div className="counter-img">
              <img src={expertiseImage} alt="Years of Experience" />
            </div>
            <div className="projects-odometer odometer plus">
              {yearsOfExperience}
            </div>
            <div className="type">Years of Experience</div>
          </div>

          <div className="stat">
            <div className="counter-img">
              <img src={sportsTrophyImage} alt="Winning Awards" />
            </div>
            <div className="winning-odometer odometer plus">
              {winningAwards}
            </div>
            <div className="type">Winning Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
