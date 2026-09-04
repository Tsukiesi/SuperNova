import { Outlines, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";
function Sun({
  selectPlanet,
  selected,
}: {
  selectPlanet: (planetName: string) => void;
  selected: string | null;
}) {
  const sunTexture = useLoader(TextureLoader, "sun.jpg");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useCursor(isHovered);
  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        selectPlanet("sun");
      }}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <sphereGeometry args={[8, 36, 36]} />
      <meshBasicMaterial map={sunTexture} />
      {selected === "sun" ? <Outlines thickness={0.8} color="white" /> : ""}
    </mesh>
  );
}
export default Sun;
