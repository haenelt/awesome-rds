// initialize RDS coordinates
const initArray = (dataLength) => {
  return Array.from({ length: dataLength }, () =>
    [Math.random() * 100, Math.random() * 100]
  );
}

// get distance to image center for each RDS coordiante
const centerDistance = (data) => {
  return data.map(([x, y]) => (
    Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2))
  ));
}

// define 3D shape of RDS
const shapeFunction = (distance, amplitude, omega, phi) => {
  return distance.map((distance) => (
    amplitude * Math.sin(2 * Math.PI * omega * distance + phi)
  ));
}

export { initArray, centerDistance, shapeFunction };
