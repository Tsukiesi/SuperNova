import { useFrame } from "@react-three/fiber";
import { type AnimationControllerProps } from "./types";
function AnimationController({ isPaused, elapsed }: AnimationControllerProps) {
  useFrame((_, delta) => {
    if (!isPaused) {
      elapsed.current += delta;
    }
  });
  return null;
}
export default AnimationController;
