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
      <g >
      <circle
      onMouseOver={(evt) => evt.target.setAttribute('r', '15')}
      onMouseOut={(evt) => evt.target.setAttribute('r', '12')}
      cx={cords.x}
      cy={cords.y}
      r={12}
      fill={color}
      stroke="white"
      strokeWidth={2} 
      onClick={() => onClick(props)}
    />
<text
  x={cords.x - 4.9} 
  y={cords.y+ 3.5}
  fill="black"
  className="custom-text-class"
>
  {chartId}
</text>
  </g> 
    </Tooltip>
  );
};

export default Marker;
