import React from "react";
import SectionTitle from "../SectionTitle";
import TabButton from "../TabButton";
import bag from "../../../public/assets/bag.png";
import download from "../../../public/assets/download.png";
import cam from "../../../public/assets/cam.png";
import Image from "../Image";

const productDetails = [
  {
    img: bag,
    title: `Checking Accounts`,
    text: `Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.`,
  },
  {
    img: download,
    title: `Savings Accounts`,
    text: `Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.`,
  },
  {
    img: cam,
    title: `Loans and Mortgages`,
    text: `Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.`,
  },
];
const productDetails2 = [
  {
    img: "../../../public/assets/case/IconContainer5.png",
    title: `Checking Accounts`,
    text: `Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.`,
  },
  {
    img: "../../../public/assets/case/IconContainer6.png",
    title: `Savings Accounts`,
    text: `Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.`,
  },
  {
    img: "../../../public/assets/case/IconContainer7.png",
    title: `Loans and Mortgages`,
    text: `Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.`,
  },
];

const Product = () => {
  return (
    <section className="py-24">
      <div className="flex justify-between items-end mb-32">
        <SectionTitle
          title={`Our`}
          titleClr={`Products`}
          text={`Discover a range of comprehensive and customizable banking products at
        YourBank, designed to suit your unique financial needs and aspirations`}
        />
        <TabButton />
      </div>
      <div className="flex justify-between items-center">
        {productDetails.map((item, id) => (
          <div
            key={id}
            className="flex flex-col items-center px-12 text-center"
          >
            <div className="mb-7">
              <Image addImg={item.img} />
            </div>
            <h4 className="mb-5">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
        {/* {productDetails2.map((item, id) => (
          <div
            key={id}
            className="flex flex-col items-center px-12 text-center"
          >
            <div className="mb-7">
              <Image addImg={item.img} />
            </div>
            <h4 className="mb-5">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Product;
