import React from 'react'

const CounterSection = ({counters}) => {
  return (
   <section className="counter">
    <div className="counter-in-box">
              <div className="stats-container">
                  {counters.map(counter => (
                       <div className="stat" key={counter.missionName}>
    <div className="conuter-img">
       <img src={counter.image.imageUrl} alt={counter.image.alt} />
    </div>
    <div className="subscribers-odometer odometer plus">{counter.value}</div>
    <div className="type">{counter.missionName} </div>
  </div>
                  ))}
 
</div>
</div>
</section>
  )
}

export default CounterSection