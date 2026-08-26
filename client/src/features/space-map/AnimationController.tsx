import { useFrame } from "@react-three/fiber";
import { type Dispatch, type SetStateAction } from "react";
interface AnimationControllerProps {
  isPaused: boolean;
  setElapsed: Dispatch<SetStateAction<number>>;
}
function AnimationController({
  isPaused,
  setElapsed,
}: AnimationControllerProps) {
  useFrame((_, delta) => {
    if (!isPaused) {
      setElapsed((elapsed) => elapsed + delta);
    }
  });
  return null;
}
export default AnimationController;
