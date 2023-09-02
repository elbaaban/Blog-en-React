import "./App.css";
import { Footer } from "./components/public/Footer";
import Main from "./components/public/Main";
import NavBar from "./components/public/NavBar";
import NavUnderline from "./components/public/NavUnderline";

function App() {
  return (
    <div>
      <NavBar />

      <NavUnderline />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
