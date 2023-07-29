import { useEffect, useState } from "react";

import map_pll from "./assets/MAPAPLL.png";
import logo from "./assets/logo.png";

import "./App.css";
import Marker from "./components/marker";

import NOT_BUILT_JSON_ARRAY from "./geo/notbuilt";
import REMODELATION_JSON_ARRAY from "./geo/remodelation";
import built from "./geo/built";

import { Typography } from "@mui/material";
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
      <Typography
        textAlign={"center"}
        component={"h1"}
        sx={{ margin: 0 }}
        fontSize={32}
      >
        <b>MAPA PLAN MAESTRO PARQUE LA LIBERTAD</b>
      </Typography>
      <svg id="map" class="mapSvg" >
        <image href={map_pll} class="mapImg"  ai></image>
        {NOT_BUILT_JSON_ARRAY.map((item, index) => {
      const handleClick = (i) => { 
        if(i.description === undefined){
            return
          } setSelectedItem(i)   
        };
          return (
            <Marker
              color={"#d67b15"}
              onClick={handleClick}
              key={"marker-" + item.id}
              {...item}              
            />
          );
        })}
        {REMODELATION_JSON_ARRAY.map((item, index) => {
      const handleClick = (i) => { 
        if(i.description === undefined){
            return
          } setSelectedItem(i)   
        };
          return (
            <Marker
              color={"#4cc29c"}
              onClick={handleClick}
              key={"marker-" + item.id}
              {...item}
            />
          );
        })}
        {built.map((item, index) => {
      const handleClick = (i) => { 
        if(i.description === undefined){
            return
          } setSelectedItem(i)   
        };
          return (
            <Marker
              color={"#e4a224"}
              key={"marker-" + item.id}
              {...item}
              onClick={handleClick}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default App;
