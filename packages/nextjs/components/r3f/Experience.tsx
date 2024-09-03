import Box from "./meshes/Box";
import Plane from "./meshes/Plane";

const Experience = () => {
  return (
    <>
      <directionalLight position={[3, 1, 3]} intensity={4} />
      <ambientLight intensity={0.5} />

      <Box positionX={4} />

      <Plane />
    </>
  );
};

export default Experience;
