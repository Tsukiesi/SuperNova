import * as THREE from "three";
function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation-x={-Math.PI / 2}>
      <torusGeometry args={[radius, 0.02, 8, 128]} />
      <meshBasicMaterial color="white" side={THREE.DoubleSide} />
    </mesh>
  );
}
export default OrbitRing;
