import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import MintData from "./MintData";
import VersionCard from "./components/VersionCard";
import ConceptData from "./ConceptData";
import DarkCard from "./components/ConceptCard";
import Login from "./components/Login";
import Onboard from "bnc-onboard";
import Notify from "bnc-notify";
import abi from "./abi/TalesOfEldevia.json";
import { ethers } from "ethers";

const CONTRACT = "0x27156b0157965bdE1702CdFD6Aa794e5EFbB6017";

function App() {
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [onboard, setOnboard] = useState();
  const [notify, setNotify] = useState();
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const [minted, setMinted] = useState();

  const mint = async () => {
    const tx = await contract.mint();
    notify.hash(tx.hash);
    await tx.wait();
    getMinted();
  };

  const getMinted = async () => {
    const minted = await contract.totalMinted();
    setMinted(ethers.utils.formatUnits(minted, 0));
  };

  useEffect(() => {
    const initOnboard = Onboard({
      dappId: "11e82408-4791-4664-8d58-f581ac8e95d1", // [String] The API key created by step one above
      networkId: 137, // [Integer] The Ethereum network ID your Dapp uses.
      subscriptions: {
        wallet: (wallet) => {
          const initProvider = new ethers.providers.Web3Provider(
            wallet.provider,
            "any"
          );
          setProvider(initProvider);
        },
      },
      walletSelect: {
        wallets: [{ walletName: "metamask", preferred: true }],
      },
    });
    setOnboard(initOnboard);
  }, []);

  useEffect(() => {
    if (provider?.provider?.networkVersion === "137") {
      setSigner(provider.getSigner());
    }
  }, [provider, connected]);

  useEffect(() => {
    const initNotify = Notify({
      dappId: "11e82408-4791-4664-8d58-f581ac8e95d1", // [String] The API key created by step one above
      networkId: 137, // [Integer] The Ethereum network ID your Dapp uses.
    });
    setNotify(initNotify);
  }, []);

  useEffect(() => {
    if (signer) {
      setContract(new ethers.Contract(CONTRACT, abi.abi, signer));
    }
  }, [signer]);

  useEffect(() => {
    if (contract) {
      getMinted();
    }
  }, [contract]);
  return (
    <>
      <nav>
        <h3>Tales of Eldivia</h3>
        <Login
          onboard={onboard}
          signer={signer}
          connected={connected}
          setConnected={setConnected}
        />
      </nav>
      <header className="light">
        <h1 className="title">Tales of Eldivia</h1>
        <div className="text-container">
          <p className="paragraph left">
            Fantasy-style Dungeon Crawler to face in Singleplayer. Discover the
            secrets of the metaverse through{" "}
            <span className="bold">specific missions for each class</span>,
            unravel the mysteries, defeat enemies and{" "}
            <span className="bold">shape the story with your choices.</span>
            Evolve your character, making him{" "}
            <span className="bold">UNIQUE and inimitable,</span> in a continuous
            struggle between good and evil.
          </p>
        </div>
      </header>
      <section className="dark">
        <h1 className="title">Races</h1>
        <p className="paragraph">
          Every race will have unique skills and characteristics that determine
          your game experience.
        </p>
        <div className="multi--cards--container">
          {MintData.map((cdata) => (
            <Card
              key={cdata.id}
              name={cdata.name}
              text={cdata.text}
              img={cdata.img}
              statsImg={cdata.statsImg}
              textTitle={cdata.textTitle}
              int={cdata.int}
              str={cdata.str}
              con={cdata.con}
              dex={cdata.dex}
              spd={cdata.spd}
              wis={cdata.wis}
              mint={mint}
            />
          ))}
        </div>
      </section>
      <section className="light">
        <div className="mint--flex">
          <div>
            <h1 className="title mint">FREE MINT YOUR OWN HERO!</h1>
            <p className="paragraph mint">
              1000 Scrolls will be the tickets to access Eldevia, allowing you
              to claim the first heroes in the game.
            </p>
            <p>One scroll per transaction, max 5 scrolls per address</p>
            {connected && <h3>{minted} / 1000 minted</h3>}
          </div>
          <div className="mint--card">
            <h3 className="mint--card--title">Your tickect to Eldevia</h3>
            <img className="mint--card--img" src="../images/mint.png" />
            {connected ? (
              <p className="mint--card--btn" onClick={mint}></p>
            ) : (
              <Login
                onboard={onboard}
                signer={signer}
                connected={connected}
                setConnected={setConnected}
                className={"mint--card--btn--connect"}
                mint={true}
              />
            )}
          </div>
        </div>
      </section>
      <section className="dark">
        <h1 className="title">Quests</h1>
        <p className="paragraph">
          1000 Scrolls will be the tickets to access Eldevia, allowing you to
          claim the first heroes in the game.
        </p>
        <img className="map--img" src="../images/Map.png" alt="game map" />
        <p className="comingSoon--quest"></p>
      </section>
      <section className="light ">
        <h1 className="title">Roadmap</h1>
        <div className="version--cards">
          <VersionCard
            version="1.0"
            step1="Ability to mint heroes"
            step2="Minting gear items, basic spell"
            step3="Demo / Beta"
          />
          <VersionCard
            version="2.0"
            step1="Definition of characteristics, experience, levels"
            step2="Basic quest presentation"
            step3="Add items, spells"
          />
          <VersionCard
            version="3.0"
            step1="Home base creation"
            step2="ERC-20 Token"
            step3="Dynamic implementation of NFTs and Token burning"
          />
          <VersionCard
            version="4.0"
            step1="Add new races"
            step2="Ability to change character alignment"
            step3="PvP"
          />
        </div>
      </section>
      <section className="dark">
        <h1 className="title">Concept</h1>
        <div className="multi--cards--container concept--container">
          {ConceptData.map((cdata) => (
            <DarkCard
              key={cdata.id}
              name={cdata.name}
              text={cdata.text}
              img={cdata.img}
              textTitle={cdata.textTitle}
            />
          ))}
        </div>
      </section>
      <footer>
        <p className="footer--text">Project by PlayToDAO</p>
      </footer>
    </>
  );
}

export default App;
