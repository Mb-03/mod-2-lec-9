import { useState } from "react";
import Popup from "./Popup/Popup";

const App = () => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handlePopup}>{popup ? "close fetch" : "open fetch"}</button>
      {popup && <Popup />}
    </div>
  );
};

export default App;
