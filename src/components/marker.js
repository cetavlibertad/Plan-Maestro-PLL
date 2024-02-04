/* eslint-disable no-unused-vars */
import React from "react";
import { Tooltip } from "@mui/material";

import markerIcon from "../assets/icon-location2.png";

const Marker = (props) => {
  const {
    id,
    chartId,
    name,
    description,
    renders,
    antiproject,
    design,
    designer,
    source,
    estimatedCost,
    lastDate,
    costM,
    cords,
    onClick,
    color,
    buildstate,
  } = props;

  return (
    <Tooltip title={name} placement="top">
      <g className={buildstate}>
        <image
          href={markerIcon}
          x={cords.x - 24}
          y={cords.y - 29}
          style={{
            zIndex: "0",
            width: "auto",
            height: "45px",
            filter: "drop-shadow(0px 2px 4px black)",
            opacity: " 95%"
          }}
          onMouseOver={(evt) => {
            evt.target.setAttribute("fill", "green");
            if (description === undefined) {
              evt.target.setAttribute("fill", "red");
            }
          }}
          onMouseOut={(evt) => {
            evt.target.setAttribute("fill", color);
          }}
          onClick={() => onClick(props)}
        />
        <circle
          onMouseOver={(evt) => evt.target.setAttribute("r", "15")}
          onMouseOut={(evt) => evt.target.setAttribute("r", "10")}
          cx={cords.x - 1.05}
          cy={cords.y -8}
          r={10}
          fill={color}
          stroke="black"
          strokeWidth={2}
          onClick={() => onClick(props)}
          style={{opacity:"90%"}}
        />
        <text
          x={cords.x}
          y={cords.y - 7}
          fill="black"
          className="custom-text-class"
          textAnchor="middle"
          dominantBaseline="middle"
                    
        >
          {chartId}
        </text>
      </g>
    </Tooltip>
  );
};

export default Marker;
