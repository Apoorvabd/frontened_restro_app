import HeroSection from "../components/HeroSection"
import About from "../components/About";
import Qualities from "../components/Qualities";
import Footer from "../components/Footer";
import WhoAreWe from "../components/Whoarewe";
import Team from "../components/Team";
import Menu from "../components/Menu";
import Crousel from "../components/Crousel";
import Reservation from "../components/Reservation";
import userReservationStore from "../store";

function Home() {
  const showReservation = userReservationStore(
    (state) => state.showReservation
  );
  
  return (
    <>
    <HeroSection />
    <Menu/>
    {/* <Crousel/> */}
    <Qualities/>
     <WhoAreWe/>
    <About/>
    <Team/>
    <Footer/>
    {showReservation && <Reservation />}  </>
  )
}
export default Home;