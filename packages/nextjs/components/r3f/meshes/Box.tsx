import type { MeshProps } from "@react-three/fiber";

interface IBox extends MeshProps {
  positionX: number;
}

function Box({ positionX }: IBox) {
  return (
    <>
      <mesh position-x={positionX}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Box;
