import { useState, useEffect } from "react";
import { centerDistance, shapeFunction } from "../utils/helper";
import config from "../utils/config";


const RDS = ({ color, data }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      setStep(step + config.step_size),
      config.refresh_time
    );

    return () => {
      clearInterval(interval);
    };
  }, [step]);

  let step_direction;
  if (color === "red") {
    step_direction = 1;
  } else {
    step_direction = -1;
  }

  let delta_x = centerDistance(data).map((d) => d * 0.1);
  delta_x = shapeFunction(
    delta_x,
    config.sine_amplitude,
    config.sine_freq,
    step_direction * step
  );

  return (
    <div>
      <svg className="svg" viewBox="0 0 100 100">
        {data.map(([x, y], i) => (
          <rect
            key={i}
            x={x + delta_x[i]}
            y={y}
            width={config.rds_size}
            height={config.rds_size}
            fill={color}
            opacity={color === "red" ? 0.2 : 0.5}
          />
        ))}
      </svg>
    </div>
  );
}

export default RDS;
