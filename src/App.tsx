import "./App.css";
import Main from "./Components/Main";
import { OBJECTS } from "./Components/Constants/3dMock_Data";

function App() {
  return <Main tasks={OBJECTS} />;
}

export default App;
