import React from "react";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Coments from "./Coments";
import { Autoplay } from "swiper/modules";

const comentsData = [
  {
    coment: `I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.`,
    comenter: `John D`,
  },
  {
    coment: `As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills`,
    comenter: `Emily G`,
  },
  {
    coment: `As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical`,
    comenter: `Sara L`,
  },
  {
    coment: `As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments`,
    comenter: `Clark M`,
  },
  {
    coment: `As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills`,
    comenter: `Json T`,
  },
  {
    coment: `As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills`,
    comenter: `Emily G`,
  },
  {
    coment: `I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.`,
    comenter: `Mavrick C`,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <SectionTitle
        addClass={`mb-28`}
        title={`Our`}
        titleClr={`Testimonials`}
        text={`Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey`}
      />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        slidesPerView={3}
        spaceBetween={70}
        centeredSlides={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {comentsData.map((item, id) => (
          <SwiperSlide>
            <Coments key={id} pera={item.coment} post={item.comenter} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
