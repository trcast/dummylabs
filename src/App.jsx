import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

const Showroom = lazy(() => import("./components/Showroom"));
const TitleTextLeft = lazy(() => import("./components/TitleTextLeft"));
const TitleTextRight = lazy(() => import("./components/TitleTextRight"));
const ServicesGroup = lazy(() => import("./components/ServicesGroup"));
const StudioClientsGroup = lazy(() =>
  import("./components/StudioClientsGroup")
);
const TeamGroup = lazy(() => import("./components/TeamGroup"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

import Dots from "./assets/background/dots-bg.png";
import Gradient from "./assets/background/gradient.png";
import GraphicOne from "./assets/background/big-graphic-one.png";
import GraphicTwo from "./assets/background/big-graphic-two.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const showroomRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar
            refs={{
              showroomRef,
              servicesRef,
              clientsRef,
              teamRef,
              contactRef,
              headerRef,
            }}
          />
          <Header ref={headerRef} />
          <Suspense fallback={<Loading />}>
            <Showroom ref={showroomRef} />
            <TitleTextLeft title="3D Design Services" />
            <ServicesGroup ref={servicesRef} />
            <TitleTextRight title="Studio Clients" />
            <StudioClientsGroup ref={clientsRef} />
            <TitleTextLeft title="Team" />
            <TeamGroup ref={teamRef} />
            <TitleTextRight title="Work with us" />
            <ContactForm ref={contactRef} />
            <Footer />
            <div className="background-elements">
              <img className="dots-bg" src={Dots} alt="" />
              <img className="gradient-one" src={Gradient} alt="" />
              <img className="gradient-two" src={Gradient} alt="" />
              <img className="gradient-three" src={Gradient} alt="" />
              <img className="gradient-four" src={Gradient} alt="" />
              <img className="gradient-five" src={Gradient} alt="" />
              <img className="gradient-six" src={Gradient} alt="" />
              <img className="gradient-seven" src={Gradient} alt="" />
              <img className="graphic-one" src={GraphicOne} alt="" />
              <img className="graphic-two" src={GraphicTwo} alt="" />
            </div>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
