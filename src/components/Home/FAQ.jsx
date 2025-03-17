import React from "react";
import SectionTitle from "../SectionTitle";
import FaqContent from "./FaqContent";
const faq = [
  {
    img: "../../../public/assets/face/uifaces-popular-image (1).jpg",
    question:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    answer:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    img: "../../../public/assets/face/uifaces-popular-image (2).jpg",
    question: "Mauris viverra diam vitae quam. Suspendisse potenti.",
    answer:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    img: "../../../public/assets/face/uifaces-popular-image (3).jpg",
    question:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    answer:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    img: "../../../public/assets/face/uifaces-popular-image (4).jpg",
    question:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    answer:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    img: "../../../public/assets/face/uifaces-popular-image (5).jpg",
    question: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    answer:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24">
      <SectionTitle
        addClass={`mb-20`}
        title={`Frequently`}
        titleClr={`Asked Questions`}
        text={`Still you have any questions? Contact our Team via support@yourbank.com`}
      />
      <div className="grid grid-cols-2 gap-8">
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
