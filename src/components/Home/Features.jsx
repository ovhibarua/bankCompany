import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import FeaturesBox from "./FeaturesBox";
const data = [
  [
    {
      title: `24/7 Account Access`,
      con: `Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Mobile Banking App`,
      con: `Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Secure Transactions`,
      con: `Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Bill Pay and Transfers`,
      con: `Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.`,
      img: "../../../public/assets/linkArrow.png",
    },
  ],
  [
    {
      title: `Checking Accounts`,
      con: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Savings Accounts`,
      con: `Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Loans and Mortgages`,
      con: `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Saving for the Future`,
      con: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the`,
      img: "../../../public/assets/linkArrow.png",
    },
  ],
  [
    {
      title: `Startups and Entrepreneurs`,
      con: `The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Payment Solutions`,
      con: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Cash Flow Management`,
      con: `Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.`,
      img: "../../../public/assets/linkArrow.png",
    },
    {
      title: `Business Expansion`,
      con: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab`,
      img: "../../../public/assets/linkArrow.png",
    },
  ],
];

const Features = () => {
  const [tab, setTab] = useState(false);
  const [getTab, setGetTab] = useState(true);
  const [tab2, setTab2] = useState(true);
  const [getTab2, setGetTab2] = useState(false);
  const [tab3, setTab3] = useState(true);
  const [getTab3, setGetTab3] = useState(false);
  const toggle = () => {
    setGetTab(true);
    setGetTab2(false);
    setGetTab3(false);
    setTab(false);
    setTab2(true);
    setTab3(true);
  };
  const toggle2 = () => {
    setGetTab2(true);
    setGetTab3(false);
    setGetTab(false);
    setTab(true);
    setTab2(false);
    setTab3(true);
  };
  const toggle3 = () => {
    setGetTab3(true);
    setGetTab2(false);
    setGetTab(false);
    setTab(true);
    setTab2(true);
    setTab3(false);
  };
  return (
    <section className="py-24">
      <SectionTitle
        addClass={`mb-20`}
        title={`Our`}
        titleClr={`Features`}
        text={`Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience`}
      />
      <div className="flex gap-4 mb-8">
        <Button
          addText={`Online Banking`}
          addClass={`bg-grey-11 border-grey-15 border-[1px] ${
            tab ? "text-white" : "text-green-60"
          } px-6 w-fit`}
          clickFunc={toggle}
        />
        <Button
          addText={`Financial Tools`}
          addClass={`bg-grey-11 border-grey-15 border-[1px] ${
            tab2 ? "text-white" : "text-green-60"
          } px-6 w-fit`}
          clickFunc={toggle2}
        />
        <Button
          addText={`Customer Support`}
          addClass={`bg-grey-11 border-grey-15 border-[1px] ${
            tab3 ? "text-white" : "text-green-60"
          } px-6 w-fit`}
          clickFunc={toggle3}
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {getTab &&
          data[0].map((item, id) => (
            <FeaturesBox
              key={id}
              title={item.title}
              img={item.img}
              content={item.con}
            />
          ))}
        {getTab2 &&
          data[1].map((item, id) => (
            <FeaturesBox
              key={id}
              title={item.title}
              img={item.img}
              content={item.con}
            />
          ))}
        {getTab3 &&
          data[2].map((item, id) => (
            <FeaturesBox
              key={id}
              title={item.title}
              img={item.img}
              content={item.con}
            />
          ))}
      </div>
    </section>
  );
};

export default Features;
