import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Showroom from "./components/Showroom";
import TitleTextLeft from "./components/TitleTextLeft";
import TitleTextRight from "./components/TitleTextRight";
import ServicesGroup from "./components/ServicesGroup";
import StudioClientsGroup from "./components/StudioClientsGroup";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Showroom />
      <TitleTextLeft title="3D Design Services" />
      <ServicesGroup />
      <TitleTextRight title="Studio Clients" />
      <StudioClientsGroup />
    </>
  );
}

export default App;
