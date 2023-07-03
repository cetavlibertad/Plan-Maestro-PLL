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
      r={9}
      fill={color}
      onClick={() => onClick(props)}
    />
<text
  x={cords.x-3} 
  y={cords.y+1}
  textAnchor="start"
  alignmentBaseline="middle"
  fill="white"
  style={{ fontSize: "9px" }}
>
  {chartId}
</text>
  </g> 
    </Tooltip>
  );
};

export default Marker;
