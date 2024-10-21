import "./App.css";
import Bottles from "./components/bottles/Bottles";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;
