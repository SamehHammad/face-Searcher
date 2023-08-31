import "./App.css";
import Popup from "./components/Home/Popup/Popup";
import UploadSec from "./components/Home/UploadSec/UploadSec";
import Navv from "./components/Nav/Navv"

function App() {
  return (
    <>
      <Navv />
      {/* <Popup/> */}
      <UploadSec/>
    </>
  );
}

export default App;
