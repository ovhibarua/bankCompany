import React from "react";
import SectionTitle from "../SectionTitle";
import FaqContent from "./FaqContent";
import face from "../../../public/assets/face/uifaces-popular-image (1).jpg";
import face2 from "../../../public/assets/face/uifaces-popular-image (2).jpg";
import face3 from "../../../public/assets/face/uifaces-popular-image (3).jpg";
import face4 from "../../../public/assets/face/uifaces-popular-image (4).jpg";
import face5 from "../../../public/assets/face/uifaces-popular-image (5).jpg";
import face6 from "../../../public/assets/face/uifaces-popular-image (6).jpg";
const faq = [
  {
    img: face,
    question:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    answer:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    img: face2,
    question: "Mauris viverra diam vitae quam. Suspendisse potenti.",
    answer:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    img: face3,
    question:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    answer:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    img: face4,
    question:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    answer:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    img: face5,
    question: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    answer:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    img: face6,
    question:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    answer:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 lg:py-24">
      <SectionTitle
        addClass={`mb-20`}
        title={`Asked`}
        titleClr={`Questions`}
        text={`Still you have any questions? Contact our Team via support@yourbank.com`}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        {faq.map((item, id) => (
          <FaqContent
            key={id}
            title={item.question}
            content={item.answer}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
