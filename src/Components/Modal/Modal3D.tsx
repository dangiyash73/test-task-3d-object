import React, { useState } from "react";
import Converter from "../utils/Converter";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { DataProps } from "../../utils";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const Modal3D: React.FC<DataProps> = ({
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragStart,
  onDrop,
  onDragOver,
  objOnWindow,
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };
  const handleRotate = (angle: number) => {
    setRotationAngle((prevAngle) => prevAngle + angle);
  };

  return (
    <>
      <div
        className="mt-10"
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, false, "")}
      >
        <div className="bg-gray-500 py-2 flex px-6">
          <p className="bg-red-700  self-center mx-2">
            <ViewInArIcon className="text-white text-xl" />
          </p>
          <h3 className="text-white font-bold mx-2 self-center">3D Viewer</h3>
        </div>
        <div className="bg-black py-2 flex text-black px-6 justigy-center">
          <button onClick={handleZoomOut} className="bg-white self-center mx-1">
            <ZoomInIcon />
          </button>
          <button onClick={handleZoomIn} className="bg-white self-center mx-1">
            <ZoomOutIcon />
          </button>
          <button
            onClick={() => handleRotate(Math.PI / 4)}
            className="bg-white self-center mx-1"
          >
            <AutorenewIcon />
          </button>
        </div>
        <div
          className=" border-black border-2 border-indigo-800 relative"
          style={{ height: "71vh", width: "100%" }}
        >
          {objOnWindow && (
            <div
              className="grid grid-cols-[200px_minmax(500px,_1fr)_200px] gap-4 "
              key={objOnWindow.id.toString()}
              id={objOnWindow.id.toString()}
            >
              <div className="text-center py-8">{objOnWindow.title}</div>

              <div
                className="border-x border-black flex justify-center p-0"
                style={{ height: "70vh", width: "100%" }}
              >
                <Converter
                  onZoomIn={handleZoomIn}
                  onZoomOut={handleZoomOut}
                  zoom={zoom}
                  rotationAngle={rotationAngle}
                  imageUrl={objOnWindow.image}
                />
              </div>

              <div className="text-center py-8">{objOnWindow.days}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal3D;
