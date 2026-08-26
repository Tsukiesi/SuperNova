import { Canvas } from "@react-three/fiber";
import Sun from "./Sun";
import { planetsData } from "./planetsData";
import Planet from "./Planet";
import { useState, useRef, useEffect } from "react";
import AnimationController from "./AnimationController";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import OrbitRing from "./OrbitRing";
type CameraPosType = [x: number, y: number, z?: number | undefined];
function SpaceMap() {
  const [isPaused, setIsPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [isFullSreen, setIsFullScreen] = useState(false);
  const initialCameraPosition: CameraPosType = [0, 15, 30];
  const controlsRef = useRef<OrbitControlsImpl>(null);
  useEffect(() => {
    controlsRef.current?.saveState();
  }, []);
  return (
    <div className="absolute inset-0 flex justify-center">
      <div
        className={
          isFullSreen
            ? `fixed w-screen h-screen z-5 bg-[url('/solar-system-stars.jpg')]`
            : `fixed rounded-4xl w-240 h-120 bg-[url('/solar-system-stars.jpg')] mt-28`
        }
      >
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-4 left-4 z-10 w-8 h-8 flex justify-center items-center border-none outline-none select-none hover:w-9 hover:h-9"
        >
          {isPaused ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          )}
        </button>
        <Button
          onClick={() => controlsRef.current?.reset()}
          className="absolute top-4 right-4 z-10"
        >
          Reset camera
        </Button>
        <button
          onClick={() => setIsFullScreen(!isFullSreen)}
          className="absolute bottom-4 right-4 z-10 w-8 h-8 flex justify-center items-center border-none outline-none select-none hover:w-9 hover:h-9"
        >
          {isFullSreen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </button>
        <Canvas
          camera={{
            position: initialCameraPosition,
            fov: 70,
          }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={5000} />
          <Sun />
          {planetsData.map((data) => (
            <Planet
              key={data.id}
              textureUrl={data.textureUrl}
              distance={data.distance}
              radius={data.radius}
              speed={data.speed}
              rotationSpeed={data.rotationSpeed}
              elapsed={elapsed}
              isPaused={isPaused}
            />
          ))}
          {planetsData.map((data, index) => (
            <OrbitRing key={index} radius={data.distance} />
          ))}
          <AnimationController isPaused={isPaused} setElapsed={setElapsed} />
          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableRotate={true}
            enableZoom={true}
            rotateSpeed={1}
            zoomSpeed={1}
            minDistance={12}
            maxDistance={500}
            autoRotate={false}
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              MIDDLE: THREE.MOUSE.DOLLY,
              RIGHT: THREE.MOUSE.PAN,
            }}
          />
        </Canvas>
      </div>
    </div>
  );
}
export default SpaceMap;
