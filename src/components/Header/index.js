import React from "react";
import Nav from "../Nav";
//import New from "./5330558.jpg";
function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div style={{backgroundColor:"#FFDAB9"}}>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>SRINIDHI S</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta" >
          <h2 style={{color:"#9370DB"}}>Welcome</h2>
          <p style={{color:"#F08080"}} >
            <i>
            Welcome to my portfolio page built with react. Here,
            you can find a small sample of the project I have worked on over
            the course of the program.
            </i>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
