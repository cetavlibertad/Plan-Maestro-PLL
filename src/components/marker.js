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
    buildstate,
  } = props;
  return (
    <Tooltip title={name} placement="top">
 <g className={buildstate}>
 <polygon
  onMouseOver={(evt) => {
    evt.target.setAttribute('fill', 'green');
    if (description === undefined) {
      evt.target.setAttribute('fill', 'red');
    }
  }}
  onMouseOut={(evt) => {
    evt.target.setAttribute('fill', color);
  }}
  points={`${cords.x },${cords.y +12} ${cords.x + 14},${cords.y - 22} ${cords.x - 14},${cords.y - 22}`}
  fill={color}
  stroke="black"
  strokeWidth={1}
  onClick={() => onClick(props)}
/>
  <text
    x={cords.x}
    y={cords.y -8}
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
