/* eslint-disable no-unused-vars */
import { Tooltip } from "@mui/material";

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
  } = props;
  return (
    <Tooltip title={name} placement="top">
      <g>
      <circle
      onMouseOver={(evt) => evt.target.setAttribute('r', '15')}
      onMouseOut={(evt) => evt.target.setAttribute('r', '10')}
      cx={cords.x}
      cy={cords.y}
      r={10}
      fill={color}
      onClick={() => onClick(props)}
    />
    <text
      x={cords.x}
      y={cords.y}
      textAnchor="middle"
      alignmentBaseline="middle"
    >
      {chartId}
    </text>
  </g> 
    </Tooltip>
  );
};

export default Marker;
