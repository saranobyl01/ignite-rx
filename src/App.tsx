import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { GetStartedSec } from "./components/GetStartedSec";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import TreatmentsPage from "./pages/TreatmentsPage";
import CartPage from "./pages/CartPage";
import PackageLabs from "./pages/PackageLabs";
import IndividualLabs from "./pages/IndividualLabs";
import TestDetails from "./pages/TestDetails";
import AcidReflux from "./pages/Therapy/AcidReflux";
import B12 from "./pages/Therapy/B12";
import BirthControl from "./pages/Therapy/BirthControl";
import ColdSores from "./pages/Therapy/ColdSores";
// import Eyelashes from "./pages/Therapy/Eyelashes";
import Glutathione from "./pages/Therapy/Glutathione";
import Hairloss from "./pages/Therapy/Hairloss";
import HairlossMen from "./pages/Therapy/HairlossMen";
import Herpes from "./pages/Therapy/Herpes";
import LowDoseNaltrexone from "./pages/Therapy/LowDoseNaltrexone";
import Metfrormin from "./pages/Therapy/Metfrormin";
import NadInjectable from "./pages/Therapy/NadInjectable";
import NadNasal from "./pages/Therapy/NadNasal";
import PrematureEjaculation from "./pages/Therapy/PrematureEjaculation";
import Propranolol from "./pages/Therapy/Propranolol";
import Pt141 from "./pages/Therapy/Pt141";
import Sermorelin from "./pages/Therapy/Sermorelin";
import Skincare from "./pages/Therapy/Skincare";
import Sleep from "./pages/Therapy/Sleep";
import StopSmoking from "./pages/Therapy/StopSmoking";
import TRT from "./pages/Therapy/TRT";
import WeightLoss from "./pages/Therapy/WeightLoss";
import ErectileDysfunction from "./pages/Therapy/ErectileDysfunction";
import TermsOfUse from "./pages/Legal/TermsOfUse";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import HipaaNotice from "./pages/Legal/HipaaNotice";
import ReturnsRefunds from "./pages/Legal/ReturnsRefunds";
import CcpaOptOut from "./pages/Legal/CcpaOptOut";



import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<TreatmentsPage />} />
        <Route path="/cart" element={<CartPage />} />
         <Route path="/package-labs" element={<PackageLabs />} />
         <Route path="/individual-labs" element={<IndividualLabs />} />
         <Route path="/individual-labs/:slug" element={<TestDetails />} />

         {/* therapies */}
         <Route path="/acid-reflux" element={<AcidReflux />} />
         <Route path="/b12" element={<B12 />} />
         <Route path="/birth-control" element={<BirthControl />} />
         <Route path="/cold-sores" element={<ColdSores />} />
         {/* <Route path="/eyelashes" element={<Eyelashes />} /> */}
         <Route path="/glutathione" element={<Glutathione/>} />
         <Route path="/hairloss-women" element={<Hairloss/>} />
         <Route path="/hairloss-men" element={<HairlossMen/>} />
         <Route path="/herpes" element={<Herpes/>} />
         <Route path="/metformin" element={<Metfrormin/>} />
         <Route path="/low-dose-naltrexone" element={<LowDoseNaltrexone/>} />
         <Route path="/nad-nasal" element={<NadNasal/>} />
          <Route path="/nad-injectable" element={<NadInjectable/>} />
         <Route path="/premature-ejaculation" element={<PrematureEjaculation/>} />
         <Route path="/propranolol" element={<Propranolol/>} />
         <Route path="/pt-141" element={<Pt141/>} />
          <Route path="/sermorelin" element={<Sermorelin/>} />
          <Route path="/skincare" element={<Skincare/>} />
          <Route path="/sleep" element={<Sleep/>} />
          <Route path="/stop-smoking" element={<StopSmoking/>} />
          <Route path="/trt" element={<TRT/>} />
          <Route path="/weightloss" element={<WeightLoss/>} />
          <Route path="/erectile-dysfunction" element={<ErectileDysfunction/>} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/hipaa-notice" element={<HipaaNotice />} />
          <Route path="/returns-refunds" element={<ReturnsRefunds />} />
          <Route path="/ccpa-opt-out" element={<CcpaOptOut />} />
      </Routes>


 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
