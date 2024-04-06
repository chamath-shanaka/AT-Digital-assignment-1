import "./App.css";
import DesktopNav from "./components/DesktopNav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Card_1 from "./components/Card_1";
import Card_2 from "./components/Card_2";

function App() {
  return (
    <div className="font-Inter">
      <DesktopNav />
      <Banner />

      <div className="my-20 flex-col space-y-20">
        <Card_1 />
        <Card_2 />
      </div>

      <Footer />
    </ div>
  );
}

export default App;
