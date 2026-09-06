import { useFrame, useLoader } from "@react-three/fiber";
import { type Mesh, TextureLoader } from "three";
import { useRef, useState } from "react";
import { Outlines, useCursor } from "@react-three/drei";
import { type PlanetProps } from "./types";
function Planet({
  planetName,
  textureUrl,
  distance,
  radius,
  speed,
  rotationSpeed,
  elapsed,
  isPaused,
  selectPlanet,
  selected,
}: PlanetProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const texture = useLoader(TextureLoader, `${textureUrl}`);
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (isPaused || !meshRef.current) return;
    const angle = elapsed.current * speed;
    meshRef.current.rotation.y += delta * rotationSpeed;
    meshRef.current.position.x = Math.cos(angle) * distance;
    meshRef.current.position.z = Math.sin(angle) * distance;
  });
  useCursor(isHovered);
  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        selectPlanet(planetName);
      }}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      ref={meshRef}
      position={[distance, 0, 0]}
    >
      <sphereGeometry args={[radius, 36, 36]} />
      <meshStandardMaterial map={texture} />
      {selected === planetName ? (
        <Outlines thickness={0.8} color="white" />
      ) : null}
    </mesh>
  );
}
export default Planet;
