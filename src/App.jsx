import "./App.css";
import Header from "./components/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";
import Feedback from "./components/Feedback/Feedback";
import WhyUs from "./components/WhyUs/WhyUs";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import ApplicationBite from "./components/ApplicationBite/ApplicationBite";

export default function App() {
  return (
    <>
      <Header />
      <MainInfo />
      <Price />
      <WhyUs />
      {/* <ApplicationBite /> */}
      {/* <FeedbackSection /> */}
      <Feedback />
      <Footer />
    </>
  );
}
