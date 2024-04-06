import "./App.css";
import DesktopNav from "./components/DesktopNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-Inter">
      {/* <h1 className='bg-' */}
      <DesktopNav />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <Footer />
    </ div>
  );
}

export default App;
