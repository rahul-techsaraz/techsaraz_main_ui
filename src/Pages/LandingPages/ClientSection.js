import React from 'react'

const ClientSection = ({clients}) => {
  return (
   <section className="our-client">
  <div className="our-client-pulse">
    <img src="images/customer-care.png" alt="" />
</div>
  <div className="our-client-in-box">
    <div className="our-client-heading"><button className="our-client-heading-text">Clients<span className="our-client-span-circle"></span></button></div>
	<div className="our-client-heading">
		<h1 className="our-client-h1">Our clients</h1>
    </div>
              <div className="wrapper">
                  {clients.map((client, index) => (
                      <div className={`itemLeft item${index+1}`} key={index}>
        <div className={`item${index+1}-img`}>
          <img src={client.imageUrl} alt={client.alt} />
        </div>
      </div>
                  ))}
    </div>
              <div className="wrapper">
                  {clients.map((client, index) => (
                      <div className={`itemRight item${index+1}`} key={index}>
        <div className={`item${index+1}-img`}>
          <img src={client.imageUrl} alt={client.alt} />
        </div>
      </div>
                  ))}
    </div>
  </div>
 </section>
  )
}

export default ClientSection