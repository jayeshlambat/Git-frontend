import React from "react"
import Header from "./layouts/Header";
import "./index.css";
import Content from "./layouts/Content";

function App() {

  return (
    <div className="w-screen h-screen bg-[#E4EDED] dark:bg-[#28252E]">
      <Header />
      <Content />
    </div>
  )
}

export default App
