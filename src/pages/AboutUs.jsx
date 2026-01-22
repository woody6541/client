import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* ===== HEADING ===== */}
        <h1 className="text-center text-3xl md:text-5xl font-extrabold text-[#ec1e1e] mb-10 tracking-wide">
          G-TEC EDUCATION NEDUMANGAD
        </h1>

        {/* ===== INTRO PARAGRAPH ===== */}
        <p className="text-gray-800 text-[15px] md:text-base leading-8 text-justify mb-10">
          Welcome to <span className="font-semibold">G-TEC Nedumangad</span>, your gateway
          to high-quality computer education and industry-relevant skills. As a
          proud part of the <span className="font-semibold">G-TEC Education</span> network,
          we are committed to empowering students in Nedumangad and beyond with
          the knowledge, tools, and confidence to build successful careers in
          technology.
          <br /><br />
          G-TEC Nedumangad is more than just a training centre; we are a community
          dedicated to empowering individuals with the digital and vocational
          skills they need to succeed. As an
          <span className="font-semibold"> ISO-certified education organization</span>,
          we deliver a wide range of training programs including  software
          development, accounting, digital marketing, CAD,Hospital Administration, Logistics, and
          multimedia.
        </p>

        {/* ===== SECOND PARAGRAPH ===== */}
        <p className="text-gray-800 text-[15px] md:text-base leading-8 text-justify">
          Our G-TEC Nedumangad journey began with a clear vision — to make
          high-quality, industry-relevant education accessible to everyone. Over
          the years, we have grown into one of the most trusted skill-development
          institutions, building a strong reputation in Nedumangad and beyond.
          <br /><br />
          We believe in continuous learning. For us, education is not just a
          business — it is a lifelong mission. Our experienced mentors, modern
          infrastructure, and student-focused approach ensure that every learner
          receives the guidance and support they need to excel in their chosen
          career path.
        </p>

      </div>
    </section>
  );
}
