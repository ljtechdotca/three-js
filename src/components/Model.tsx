import { PrimitiveProps, useFrame, useLoader } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelProps {
  path: string;
  position?: [number, number, number];
  scale?: number;
}

export const Model: FC<ModelProps> = ({
  path,
  position = [0, 0, 0],
  scale = 40,
}) => {
  const ref = useRef<PrimitiveProps>(null);
  const gltf = useLoader(GLTFLoader, path);
  const [isHovering, setIsHovering] = useState(false);

  useFrame((state, delta) => ((ref.current as any).rotation.y += 0.003));

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={isHovering ? scale * 1.2 : scale}
      onPointerOver={() => setIsHovering(true)}
      onPointerOut={() => setIsHovering(false)}
    />
  );
};

export default Model;
