import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Banner />
      <Description />
    </div>
  );
}

export default App;
