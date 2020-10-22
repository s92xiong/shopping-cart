import React from 'react';

const About = () => {
  return (
    <div className="component about-component">
      <section className="top-left-section"></section>
      <section className="top-right-section text-section">
        <div>
          <span>CLEAN GREEN</span>
          <br/>
          <span>SWEDISH STEEL</span>
          <p>Our proprietary Swedish steel has been the foundation of our bars for 60 years. Our steel is pure ultra-clean steel, and now it is also green. Improved cleaner manufacturing processes reduce environmental impact while our bars retain their distinguishing characteristics; strength and flexibility. A winning combination.</p>
        </div>
      </section>
      <section className="bottom-left-section text-section">
        <div>
          <span>DURABLE DESIGN</span>
          <p>We design products that last. They are durable, built from the finest quality components and crafted to withstand the test of time rep after rep, drop after drop. This focus on quality and designing products for long useful life, with technical qualities and timeless classic designs, benefits not only our customers but minimizes the environmental impact associated with disposal.</p>
        </div>
      </section>
      <section className="bottom-right-section"></section>
    </div>
  );
}

export default About;