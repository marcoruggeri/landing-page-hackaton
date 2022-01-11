import React from "react"
import './App.css';
import Card from './components/Card'
import MintData from './MintData'
import VersionCard from "./components/VersionCard";
import ConceptData from "./ConceptData";
import DarkCard from "./components/DarkCard";

function App() {
  return (
    <>
    <nav>
      <h3>NomeProgetto</h3>
      <button>connect your wallet</button>
    </nav>
    <header className="light">
      <h1 className="title">Project</h1>
      <div className="text-container">
        <p className="paragraph left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </header>
    <section className="dark">
      <h1 className="title">Mint</h1>
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="multi--cards--container">
        {MintData.map(cdata => (
            <Card 
              key={cdata.id}
              name={cdata.name}
              text={cdata.text}
              img={cdata.img}
            />
        ))}
      </div>
    </section>
    <section className="light ">
      <h1 className="title">Roadmap</h1>
      <div className="version--cards">
        <VersionCard version="1.0"/>
        <VersionCard version="2.0"/>
        <VersionCard version="3.0"/>
      </div>
    </section>
    <section className="dark">
      <h1 className="title">Quests</h1>
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="img--border">
        <img className="map--img" src="https://i.stack.imgur.com/Bf4md.jpg" alt="game map"/>
      </div>
      <button className="comingSoon">COMING SOON</button>
    </section>
    <section className="light">
      <h1 className="title">Concept</h1>
      <div className="multi--cards--container concept--container">
        {ConceptData.map(cdata => (
            <DarkCard 
              key={cdata.id}
              name={cdata.name}
              text={cdata.text}
              img={cdata.img}
            />
        ))}
      </div> 
    </section>
    </>
  )
}

export default App;
