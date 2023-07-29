import NavbarComp from "./componets/NavbarComp";
import HeroComp from "./componets/HeroComp";
import GalleryComp from "./componets/GalleryComp";
import ServicesComp from "./componets/ServicesComp";
import FaqComp from "./componets/FaqComp";
import FooterComp from "./componets/FooterComp";
import LokasiComp from "./componets/LokasiComp";

function App() {
  return (
   <div>
    <HeroComp />

    {/* Content */} 
      <NavbarComp />
      <GalleryComp />
      <ServicesComp />
      <FaqComp />
      <LokasiComp />
    {/* Content */}

    <FooterComp />
   </div>
  );
}

export default App;
