import { useEffect, useState } from "react";

import map_pll from "./assets/MAPAPLL.png";
import logo from "./assets/logo.png";

import "./App.css";
import Marker from "./components/marker";

import NOT_BUILT_JSON_ARRAY from "./geo/notbuilt";
import REMODELATION_JSON_ARRAY from "./geo/remodelation";

import DialogModal from "./components/dialog";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setOpen(true);
    }
  }, [selectedItem]);

  return (
    <div className="App">
      <DialogModal
        closeHandler={() => {
          setOpen(false);
        }}
        item={selectedItem}
        open={open}
      />
      <img src={logo} id="logo" alt="Page Logo" />
      <svg id="map" class="mapSvg" >
        <image href={map_pll} class="mapImg"  ai></image>
        {NOT_BUILT_JSON_ARRAY.map((item, index) => {
          return (
            <Marker
              color={"red"}
              onClick={setSelectedItem}
              key={"marker-" + item.id}
              {...item}
            />
          );
        })}
        {REMODELATION_JSON_ARRAY.map((item, index) => {
          return (
            <Marker
              color={"blue"}
              onClick={setSelectedItem}
              key={"marker-" + item.id}
              {...item}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default App;