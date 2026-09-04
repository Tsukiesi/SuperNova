import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { type Mesh, TextureLoader } from "three";
import { useRef, useState } from "react";
import { Outlines, useCursor } from "@react-three/drei";
interface PlanetProps {
  planetName: string;
  textureUrl: string;
  distance: number;
  radius: number;
  speed: number;
  rotationSpeed: number;
  elapsed: number;
  isPaused: boolean;
  selectPlanet: (planetName: string) => void;
  selected: string | null;
}
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
  const angle = elapsed * speed;
  useFrame((_, delta) => {
    if (isPaused || !meshRef.current) return;
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
