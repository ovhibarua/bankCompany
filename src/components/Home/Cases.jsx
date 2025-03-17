import React from "react";
import SectionTitle from "../SectionTitle";
import CaseItem from "./CaseItem";
import CaseContent from "./CaseContent";
const casedetails = [
  {
    img: "../../../public/assets/case/IconContainer.png",
    title: `Managing Personal Finances`,
  },
  {
    img: "../../../public/assets/case/Icon Container2.png",
    title: `Saving for the Future`,
  },
  {
    img: "../../../public/assets/case/IconContainer3.png",
    title: `Homeownership`,
  },
  {
    img: "../../../public/assets/case/IconContainer4.png",
    title: `Education Funding`,
  },
];
const casedetails2 = [
  {
    img: "../../../public/assets/case/IconContainer5.png",
    title: `Startups and Entrepreneurs`,
  },
  {
    img: "../../../public/assets/case/IconContainer6.png",
    title: `Cash Flow Management`,
  },
  {
    img: "../../../public/assets/case/IconContainer7.png",
    title: `Business Expansion`,
  },
  {
    img: "../../../public/assets/case/IconContainer8.png",
    title: `Payment Solutions`,
  },
];

const Cases = () => {
  return (
    <section className="py-16 lg:py-24">
      <SectionTitle
        addClass={`mb-24 xl:mb-32`}
        title={`Use`}
        titleClr={`Cases`}
        text={`At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions`}
      />
      <div className="flex flex-col xl:flex-row items-center gap-24 mb-16">
        <div className="bg-grey-11 p-8 lg:p-10 2xl:p-12 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5 relative overflow-hidden z-0 xl:w-1/2 w-full">
          {casedetails.map((item, id) => (
            <CaseItem id={id} title={item.title} img={item.img} />
          ))}
        </div>

        <CaseContent
          title={`For Individuals`}
          text={`For individuals, our mortgage services pave the way to homeownership,
        and our flexible personal loans provide vital support during various
        life milestones. We also prioritize retirement planning, ensuring a
        financially secure future for our customers`}
          subText1={`Secure Retirement Planning`}
          subText2={`Manageable Debt Consolidation`}
          subText3={`Reducing financial burdens`}
        />
      </div>
      <div className="flex flex-col-reverse xl:flex-row items-center gap-24">
        <CaseContent
          title={`For Business`}
          text={`For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them`}
          subText1={`Cash Flow Management`}
          subText2={`Drive Business Expansion`}
          subText3={`Streamline payroll processing`}
        />
        <div className="bg-grey-11 p-8 lg:p-10 2xl:p-12 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5 relative overflow-hidden z-0 xl:w-1/2 w-full">
          {casedetails2.map((item, id) => (
            <CaseItem id={id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
