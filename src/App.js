import React from "react";
import Header from "./component/header/Header";
import Navigation from "./component/navigation/Navigation";
import Tile from "./component/tile/Tile";
import TileRow from "./component/tilerow/TileRow";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
      <div className="App">
        <Navigation />
        <Header />
        <TileRow>
          <Tile oneColumn />
        </TileRow>
        <TileRow>
          <Tile />
          <Tile />
        </TileRow>
        <TileRow>
          <Tile />
          <Tile />
        </TileRow>
        <Footer />
      </div>
  );
};

export default App;
