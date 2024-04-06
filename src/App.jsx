import "./App.css";
import DesktopNav from "./components/DesktopNav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="font-Inter">
      <DesktopNav />
      <Banner />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <Footer />
    </ div>
  );
}

export default App;
