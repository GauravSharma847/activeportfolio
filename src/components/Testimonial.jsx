import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Satya Nadella (Microsoft)"}
          feedback={"Your are a good web developer."}
        />

        <TestimonialCard
          name={"Sundar Pichai (Google)"}
          feedback={
            "Wow what a portfolio"
          }
        />

        <TestimonialCard
          name={"Elon Musk"}
          feedback={"Perfect"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;