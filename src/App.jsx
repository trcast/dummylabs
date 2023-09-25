import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Showroom from "./components/Showroom";
import TitleTextLeft from "./components/TitleTextLeft";
import TitleTextRight from "./components/TitleTextRight";
import ServicesGroup from "./components/ServicesGroup";
import StudioClientsGroup from "./components/StudioClientsGroup";
import TeamGroup from "./components/TeamGroup";
import TypeformEmbed from "./components/TypeformEmbed";
import Footer from "./components/Footer.jsx";
import Dots from "./assets/background/dots-bg.png";
import Gradient from "./assets/background/gradient.png";
import GraphicOne from "./assets/background/big-graphic-one.png";
import GraphicTwo from "./assets/background/big-graphic-two.png";
import { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IconLogo from "./assets/client/link-preview-logo.png";
import PreviewBanner from "./assets/client/link-preview-banner.png";

function App() {
  const showroomRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <HelmetProvider>
      <Helmet>
        <title>DUMMY LABS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Delivering premium 3D design services & crafting timeless collections."
        />
        <meta property="og:image" content={PreviewBanner} />
        <meta property="og:url" content="https://dummylabs.netlify.app" />
        <meta name="og:title" content="DUMMY LABS" />

        <link rel="apple-touch-icon" sizes="180x180" href={IconLogo} />
        <link rel="icon" type="image/png" sizes="32x32" href={IconLogo} />
        <link rel="icon" type="image/png" sizes="16x16" href={IconLogo} />
        <meta name="theme-color" content="#fb9516" />
        <meta name="twitter:card" content={PreviewBanner} />
        <meta name="twitter:url" content="https://twitter.com/DummiesLab" />
        <meta name="twitter:title" content="DUMMY LABS" />
        <meta
          name="twitter:description"
          content="Delivering premium 3D design services & crafting timeless collections."
        />
        <meta name="twitter:image" content={IconLogo} />
      </Helmet>
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
      <Showroom ref={showroomRef} />
      <TitleTextLeft title="3D Design Services" />
      <ServicesGroup ref={servicesRef} />
      <TitleTextRight title="Studio Clients" />
      <StudioClientsGroup ref={clientsRef} />
      <TitleTextLeft title="Team" />
      <TeamGroup ref={teamRef} />
      <TitleTextRight title="Work with us" />
      <TypeformEmbed ref={contactRef} />
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
    </HelmetProvider>
  );
}

export default App;
