import modal from "../../logo.svg";
import car from "../../asset/images/car.jpeg";
import techImg from "../../asset/images/tech2.png";
import robotImg from "../../asset/images/robot.jpg";
import webpImg from "../../asset/images/tech.webp";
import gltfImg from "../../asset/images/boxmodal.gltf";

const OBJECTS = [
  {
    id: 1,
    title: "CRBRM Test (D)",
    status: "In Progress",
    image:"https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf",
    time: "8 hrs",
    days: "5 days left",
  },
  {
    id: 2,
    title: "CRBRM Test (D.1)",
    status: "In Progress",
    image: gltfImg,
    time: "6 hrs",
    days: "6 days left",
    done: false,
  },
  {
    id: 3,
    title: "CRBRM Test Part(D)",
    status: "In Progress",
    image: robotImg,
    time: "13 hrs",
    days: "4 days left",
  },
  {
    id: 4,
    title: "CRBRM Test Part.2(a)",
    status: "In Progress",
    image: techImg,
    time: "22 hrs",
    days: "2 days left",
    done: true,
  },
  {
    id: 5,
    status: "In Progress",
    image:
      "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf",
    title: "CRBRM Test Part.1(a,b)",
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false,
  },
  {
    id: 6,
    title: "Test Modal",
    status: "In Progress",
    image: modal,
    time: "20 hrs",
    days: "11 days left",
    done: true,
  },
  {
    id: 7,
    title: "CRBRM Test Part 2(b)",
    status: "In Progress",
    image:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
    time: "20 hrs",
    days: "11 days left",
    done: true,
  },
  {
    id: 8,
    title: "Sport-Car-modal",
    status: "In Progress",
    image: car,
    time: "20 hrs",
    days: "11 days left",
    done: true,
  },
  {
    id: 9,
    title: "Test Modal(2)",
    status: "In Progress",
    image: webpImg,
    time: "20 hrs",
    days: "11 days left",
    done: true,
  },
];

export { OBJECTS };
