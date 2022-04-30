import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Model from "./Model";

interface ViewerProps {
  path: string;
  position?: [number, number, number];
  scale?: number;
}

export const Viewer: FC<ViewerProps> = ({ path, position, scale }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight
        angle={0.55}
        position={[2000, 2000, -1000]}
        intensity={0.3}
        penumbra={1}
      />
      <pointLight position={[-0, -0, -1000]} />
      <Suspense fallback={null}>
        <Model path={path} position={position} scale={scale} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Viewer;
