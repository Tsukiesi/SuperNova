import { useFrame, useLoader } from "@react-three/fiber";
import { type Mesh, TextureLoader } from "three";
import { useRef } from "react";
interface PlanetProps {
  textureUrl: string;
  distance: number;
  radius: number;
  speed: number;
  rotationSpeed: number;
  elapsed: number;
  isPaused: boolean;
}
function Planet({
  textureUrl,
  distance,
  radius,
  speed,
  rotationSpeed,
  elapsed,
  isPaused,
}: PlanetProps) {
  const texture = useLoader(TextureLoader, `${textureUrl}`);
  const meshRef = useRef<Mesh>(null);
  const angle = elapsed * speed;
  useFrame((_, delta) => {
    if (isPaused || !meshRef.current) return;
    meshRef.current.rotation.y += delta * rotationSpeed;
    meshRef.current.position.x = Math.cos(angle) * distance;
    meshRef.current.position.z = Math.sin(angle) * distance;
  });
  return (
    <mesh ref={meshRef} position={[distance, 0, 0]}>
      <sphereGeometry args={[radius, 36, 36]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
export default Planet;
