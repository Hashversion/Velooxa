const Plane = () => {
  return (
    <>
      <mesh position-y={-3} rotation-x={-Math.PI / 2} scale={50}>
        <planeGeometry />
        <meshStandardMaterial color={"#dadade"} />
      </mesh>
    </>
  );
};

export default Plane;
