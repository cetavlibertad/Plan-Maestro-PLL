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
    onMouseOver={(evt) => {
      evt.target.setAttribute('r', '15');
        if (description !== undefined) {          
          evt.target.setAttribute('fill', 'green'); 
        }else{
          evt.target.setAttribute('fill', 'red'); 
        }
      }}
    onMouseOut={(evt) => {
        evt.target.setAttribute('r', '12');
        evt.target.setAttribute('fill', color); 
    }}
    cx={cords.x}
    cy={cords.y}
    r={13}
    fill={color}
    stroke="white"
    strokeWidth={2} 
    onClick={() => onClick(props)}
  />
  <text
    x={cords.x}
    y={cords.y}
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
