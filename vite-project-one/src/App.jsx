import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Container } from "./components/container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="sidebar-container">
        <Sidebar />
        <Container />
      </div>
    </>
  );
}

export default App;
