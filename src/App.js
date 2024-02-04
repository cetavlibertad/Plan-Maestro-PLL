import { useEffect, useState } from "react";

import map_pll2 from "./assets/mapa 4_B-1.png";
import logo from "./assets/logo.png";

import "./App.css";
import Marker from "./components/marker";

import NOT_BUILT_JSON_ARRAY from "./geo/notbuilt";
import built from "./geo/built";

import { Typography } from "@mui/material";
import DialogModal from "./components/dialog";
import {DropdownPrint , MapList} from "./layout/maplayouts";

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
      <div className="box">
        <img src={logo} id="logo" alt="Page Logo" />
        <Typography
          textAlign={"center"}
          component={"h1"}
          sx={{ margin: 0 }}
          fontSize={32}
        >
          <b>MAPA PLAN MAESTRO</b>
        </Typography>
      </div>
      <div className="lock">
        <DropdownPrint />        
      </div>
      <DialogModal
        closeHandler={() => {
          setOpen(false);
        }}
        item={selectedItem}
        open={open}
      />
      <svg id="map" className="mapSvg">
        <image
          href={map_pll2}
          className="mapImg img23"
          ai
          x={-135}
          y={-175}
        ></image>
        {NOT_BUILT_JSON_ARRAY.map((item, index) => {
          const handleClick = (i) => {
            if (i.description === undefined) {
              return;
            }
            setSelectedItem(i);
          };
          return (
            <Marker
              buildstate="not_built"
              color={"#d67b15"}
              onClick={handleClick}
              key={"marker-" + item.id}
              {...item}
            />
          );
        })}
        {built.map((item, index) => {
          const handleClick = (i) => {
            if (i.description === undefined) {
              return;
            }
            setSelectedItem(i);
          };
          return (
            <Marker
              buildstate="built"
              color={"#e4a224"}
              key={"marker-" + item.id}
              {...item}
              onClick={handleClick}
            />
          );
        })}
      </svg>

      <MapList/>
    </div>
  );
}

export default App;
