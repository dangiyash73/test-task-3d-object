import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Euler, TextureLoader } from "three";

interface MyModelProps {
  imageval: string;
  fileType: "gltf" | "image";
  rotation: number[];
}

const GLTFLoad = (imageval: string) => {
  return useLoader(GLTFLoader, imageval);
};

const TextureLoad = (imageval: string) => {
  return useLoader(TextureLoader, imageval);
};

const MyModel: React.FC<MyModelProps> = ({ imageval, fileType, rotation }) => {
  if (fileType === "gltf") {
    const model = GLTFLoad(imageval);
    return <primitive object={model.scene} rotation={rotation} />;
  }

  if (fileType === "image") {
    const model = TextureLoad(imageval);
    const [x, y, z] = rotation;
    const eulerRotation = new Euler(x, y, z);
    return (
      <mesh rotation={eulerRotation}>
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
        <meshBasicMaterial attach="material" map={model} />
      </mesh>
    );
  }
  return null;
};

interface ARViewProps {
  imageval: string;
  fileType: "gltf" | "image";
  zoom: number;
  rotationAngle: number;
}

const ARView: React.FC<ARViewProps> = ({
  imageval,
  fileType,
  zoom,
  rotationAngle,
}) => {
  return (
    <>
      <Canvas style={{ width: "100% !important", height: "100%" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5 * zoom]} />
        <ambientLight />

        <pointLight position={[10, 10, 10]} />
        <MyModel
          imageval={imageval}
          fileType={fileType}
          rotation={[0, rotationAngle, 0]}
        />
        <OrbitControls />
      </Canvas>
    </>
  );
};

interface ConverterProps {
  imageUrl: string;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom: number;
  rotationAngle: number;
}

const Converter: React.FC<ConverterProps> = ({
  imageUrl,
  onZoomIn,
  onZoomOut,
  zoom,
  rotationAngle,
}) => {
  let fileType: "gltf" | "image" = "image";
  if (typeof imageUrl === "string") {
    const extension = imageUrl.split(".").pop()?.toLowerCase();
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "png" ||
      extension === "svg" ||
      extension === "webp"
    ) {
      fileType = "image";
    } else if (extension === "gltf" || extension === "glb") {
      fileType = "gltf";
    } else {
      // Handle other file types if needed
    }
  }
  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <ARView
        imageval={imageUrl}
        fileType={fileType}
        zoom={zoom}
        rotationAngle={rotationAngle}
      />
    </div>
  );
};

export default Converter;
