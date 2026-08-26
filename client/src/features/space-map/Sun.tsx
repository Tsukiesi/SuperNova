import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
function Sun() {
  const sunTexture = useLoader(TextureLoader, "sun.jpg");
  return (
    <mesh>
      <sphereGeometry args={[8, 36, 36]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
}
export default Sun;
