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
import abi from "./abi/NFT.json";
import { ethers } from "ethers";

const CONTRACT = "0xab74f343d537d7de5797dfc0199593ac0af69b3b";

function App() {
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [onboard, setOnboard] = useState();
  const [notify, setNotify] = useState();
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();

  const mint = async () => {
    const tx = await contract.mint();
    notify.hash(tx.hash);
    await tx.wait();
  };

  useEffect(() => {
    const initOnboard = Onboard({
      dappId: "11e82408-4791-4664-8d58-f581ac8e95d1", // [String] The API key created by step one above
      networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
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
    if (provider?.provider?.networkVersion === "4") {
      setSigner(provider.getSigner());
    }
  }, [provider, connected]);

  useEffect(() => {
    const initNotify = Notify({
      dappId: "11e82408-4791-4664-8d58-f581ac8e95d1", // [String] The API key created by step one above
      networkId: 42, // [Integer] The Ethereum network ID your Dapp uses.
    });
    setNotify(initNotify);
  }, []);

  useEffect(() => {
    if (signer) {
      setContract(new ethers.Contract(CONTRACT, abi.abi, signer));
    }
  }, [signer]);
  return (
    <>
      <nav>
        <h3>NomeProgetto</h3>
        <Login
          onboard={onboard}
          signer={signer}
          connected={connected}
          setConnected={setConnected}
        />
      </nav>
      <header className="light">
        <h1 className="title">Project</h1>
        <div className="text-container">
          <p className="paragraph left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </header>
      <section className="dark">
        <h1 className="title">Mint</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <h1 className="title mint">MINT YOUR OWN HERO!</h1>
            <p className="paragraph mint">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mint--card">
            <h3 className="mint--card--title">Your tickect to Eldevia</h3>
            <img className="mint--card--img" src="../images/mint.png"/>
            <p className="mint--card--btn" onClick={mint}></p>
          </div>
        </div>
      </section>
      <section className="dark">
        <h1 className="title">Quests</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
          <img
            className="map--img"
            src="../images/Map.png"
            alt="game map"
          />
        <p className="comingSoon--quest"></p>
      </section>
      <section className="light ">
        <h1 className="title">Roadmap</h1>
        <div className="version--cards">
          <VersionCard version="1.0" />
          <VersionCard version="2.0" />
          <VersionCard version="3.0" />
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
