import "./scss/App.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  IcInfo,
  IcPhone,
  IcPin,
  IcHam,
  IcArrRight,
  IcDashed,
  IcCv1,
  IcCv2,
  IcCv3,
  IcCv4,
  Health,
  IcLin,
  IcIgram,
  IcFace,
  IcTwit,
  Star,
} from "./svgs/svgs";
import { useEffect } from "react";
import IcFPhone from "./svgs/IcFPhone.png";
import Pic1 from "./svgs/chap-foot.png";
import Pic2 from "./svgs/MWBE.png";
import Standard from "./svgs/Standard.png";
import UClogo from "./svgs/UClogo.png";
import Wall from "./svgs/wall.png";
import HomeHero from "./svgs/home-hero.png";
import IcFeature1 from "./svgs/feature1.png";
import IcFeature2 from "./svgs/feature2.png";
import IcFeature3 from "./svgs/feature3.png";
import IcFeature4 from "./svgs/feature4.png";
import IcFeature5 from "./svgs/feature5.png";
import IcFeature6 from "./svgs/feature6.png";
import IcFeature7 from "./svgs/feature7.png";
import React from "react";

const cards = [
  {
    icon: IcFeature1,
    p1: "Hourly home Care",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature2,
    p1: "Personal Care",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature3,
    p1: "Private Nursing",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature4,
    p1: "Respite Care",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature5,
    p1: "Life-in Aid",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature6,
    p1: "Memory Care",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
  {
    icon: IcFeature7,
    p1: "Memorry Care",
    p2:
      "4x higher coverage limit than traditional policies for computers and home office equipment",
  },
];

const menubar = [
  "ABOUT",
  "SERVICES",
  "RESOURCES",
  "CAREERS",
  "HOME CARE HEROES",
  "CONTACT",
];

const cvcards = [
  {
    cvicon: IcCv1,
    cvh: "1. Initial Consultation",
    cvp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
  },
  {
    cvicon: IcCv2,
    cvh: "2. Customized Care Plan",
    cvp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
  },
  {
    cvicon: IcCv3,
    cvh: "3. Caregiver Matching",
    cvp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
  },
  {
    cvicon: IcCv4,
    cvh: "4. Ongoing Support & Supervision",
    cvp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
  },
];

function App() {
  useEffect(() => {
    document.querySelector(".IcHam").addEventListener("click", () => {
      console.log("clicked");
      document
        .querySelector(".Bar-Options.Bo-mobile")
        .classList.toggle("toggler");
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Banner">
          <IcInfo />
          <p>
            <strong>READ ABOUT OUR COVID-19 PRECAUTIONS</strong>
          </p>
        </div>

        <div className="Menu-Bar">
          <img src={UClogo} alt="logo" />
          <div className="Bar-Options">
            {menubar.map((menu) => {
              return (
                <span className="Bar-Options-li">
                  <li>{menu}</li>
                </span>
              );
            })}
          </div>
          <div className="Bar-Contact-Div">
            <IcPhone />
            <p className="Bar-Contact">866-986-3356</p>
          </div>
          <IcHam />
        </div>
        <div className="Bar-Options Bo-mobile">
          {menubar.map((menu) => {
            return (
              <span className="Bar-Options-li Bo-mobile-li">
                <li>{menu}</li>
              </span>
            );
          })}
        </div>
        <div className="Hero1">
          <div className="Hero1-Text">
            <h1>The Future of Health Care is Home Care</h1>
            <p>Over a Decade of Trusted Care.</p>
            <button>REQUEST AN APPOINTMENT</button>
          </div>
          <div className="Hero1-Image">
            <img src={HomeHero} alt="home-image" />
          </div>
        </div>
        <div className="Banner Banner2">
          <IcPin />
          <p>
            <strong>UNIVERSACARE AREAS OF COVERAGE</strong>
          </p>
        </div>
      </header>
      <div className="Cards-Area">
        <div className="Para-Section">
          <p>
            Your peace of mind is <br />
            <strong>our number one priority.</strong>
          </p>
          <hr />
          <p className="common-p">
            UniversaCare offers a range of services for in-home care. We are
            your partners in care, and work with you to come up with a plan of
            action.
          </p>
        </div>
        {cards.map((card) => {
          return (
            <div className="Cards">
              <img src={card.icon} alt="Card-Icon" />
              <p className="Card-Head">{card.p1}</p>
              <p className="Card-Text">{card.p2}</p>
              <div className="Card-Button-Div ">
                <button className="Card-Button">
                  <IcArrRight />
                </button>
              </div>
            </div>
          );
        })}
        <div className="Cards">
          <img src={IcFPhone} alt="Card-Icon" />
          <p style={{ textAlign: "Center" }} className="Card-Head">
            Do you need support?
          </p>
          <p className="Card-Text">We got help!</p>

          <button className="foot-button contact-us-but">CONTACT US</button>
        </div>
      </div>
      <Splide
        className="splide"
        options={{
          rewind: true,
          perPage: 1.25,
          perMove: 1,
        }}
        onMoved={(splide, newIndex) => {
          console.log("moved", newIndex);
        }}
      >
        {cards.map((card) => {
          return (
            <SplideSlide key={card.p1}>
              <div className="Cards Cards2">
                <img src={card.icon} alt="Card-Icon" />
                <p className="Card-Head">{card.p1}</p>
                <p className="Card-Text">{card.p2}</p>
                <div className="Card-Button-Div splide__arrows">
                  <button className="Card-Button">
                    <IcArrRight />
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="Cards feature-sec">
        <img src={IcFPhone} alt="Card-Icon" />

        <p style={{ textAlign: "Center" }} className="Card-Head">
          Do you need support?
        </p>
        <p className="Card-Text">We got help!</p>

        <button className="foot-button contact-us-but">CONTACT US</button>
      </div>

      <div className="Carevider">
        <p className="Cv-head">
          How We Find <span style={{ color: "#FF8400" }}>Best Careviger </span>
          For You
        </p>
        <div className="Cv-box">
          <IcDashed />
          {cvcards.map((card) => {
            return (
              <div className="Cv-card">
                {React.createElement(card.cvicon)}
                <div className="Cv-Text">
                  <p>{card.cvh}</p>
                  <p>{card.cvp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Standard-Div">
        <div className="Standard">
          <div className="Standard-img">
            <img src={Standard} alt="Image" />
          </div>
          <div className="Standard-Text">
            <p>CHAP Accreditation and this line can be about this big</p>
            <p>
              UniversaCare, LLC will provide the following home health care
              programs at flexible schedules and cost-friendly service rates.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="Standard-Div Review-Div">
        <div className="Standard Reviews">
          <div className=" Review-rating">
            <p>5.0</p>
            <Star />
            <p>
              2,054 verified customers reviews by <strong>Google.</strong>
            </p>
          </div>
          {/* <div className="Review-Slider"> */}
          <Splide
            className="splide"
            options={{
              rewind: true,
              perPage: 1,
              perMove: 1,
            }}
            onMoved={(splide, newIndex) => {
              console.log("moved", newIndex);
            }}
          >
            {cards.map((card) => {
              return (
                <SplideSlide key={card.p1}>
                  <div className="Cards Cards2 review-card">
                    <p>Alvin Stenley</p>
                    <Star />

                    <p>
                      Great company to work for! This organization cares for its
                      team of caregivers, office employees, and clients. There
                      is always someone available to pick up the phone when you
                      need help.
                    </p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
          {/* </div> */}
        </div>
      </div>
      <div className="Image-wall">
        <img src={Wall} alt="image" />
      </div>
      <div className="Standard-Div Ufoot">
        <div className="Standard-Text Ufoot-St">
          <p>WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND</p>
          <button>REQUEST AN APPOINTMENT</button>
        </div>
        <div className="Health-Image">
          <Health />
        </div>
      </div>
      <div className="Standard-Div Footer">
        <div className="col-1">
          <div className="col-11">
            <p>
              HEADQUARTER
              <p className="border-reducer"></p>
            </p>
            <p className="commonpp">
              246-50 57th Drive Douglaston, NY 11362 hello@universacare.com P:
              (718) 224-3758 F: 8777999065
            </p>
            <img src={UClogo} alt="logo" />
          </div>
          <div className="col-12">
            <div className="col-121 ">
              <p className="common-h">
                SERVICES
                <p className="border-reducer"></p>
              </p>
              <ul className="common-p">
                <li>Hourly Care</li>
                <li>Daily Care</li>
                <li>Hospital care</li>
                <li>Respite care</li>
                <li>Respite care</li>
              </ul>
            </div>
            <div className="col-122">
              <p className="common-h">
                COMPANY
                <p className="border-reducer"></p>
              </p>
              <ul className="common-p">
                <li>Hourly Care</li>
                <li>Daily Care</li>
                <li>Hospital care</li>
                <li>Respite care</li>
                <li>Respite care</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="common-p">Sign up to receive the latest articles</p>
          <input className="inp" type="text" placeholder="Your Email Address" />
          <button className="foot-button">SUBMIT</button>
          <div className="Pics">
            <img src={Pic1} alt="Image" />
            <img src={Pic2} alt="Image" />
          </div>
          <div className="social">
            <p className="common-p followus">Follow Us</p>
            <IcFace />
            <IcIgram />
            <IcLin />
            <IcTwit />
          </div>
        </div>
      </div>
      <hr />
      <div className="end">
        <p className="common-p">
          Copyright 2020{" "}
          <strong>
            <span style={{ color: "#ff8b08" }}>Universacare </span>
          </strong>
          - All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
