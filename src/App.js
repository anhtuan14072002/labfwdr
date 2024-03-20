import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import Menu from "./component/page/Menu";
import About from "./component/page/About";
import Work from "./component/page/Work";
import Team from "./component/page/Team";
import Services from "./component/page/Services";
import FollowMe from "./component/page/FollowMe";
import Events from "./component/page/Events";
import Contact from "./component/page/Contact";
import Brand from "./component/common/Brand";

function App(props) {

  return(
    <>
      <Brand/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/followme" element={<FollowMe />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
