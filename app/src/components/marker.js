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
      <circle
        onmouseover="evt.target.setAttribute('r', '15');"
        onmouseout="evt.target.setAttribute('r', '10');"
        cx={cords.x}
        cy={cords.y}
        r={10}
        fill={color}
        onClick={() => onClick(props)}
      ></circle>
    </Tooltip>
  );
};

export default Marker;
