// import logo from "./images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { setPopupMessage } from "./redux-toolkit/slice/popupSlice";
import { PopupModal } from "@components";

function App() {
  const dispatch = useDispatch();
  const popupMessage = useSelector((state) => state.popup.message);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(setPopupMessage("Welcome to React"));
    setShowPopup(true); // Show the popup initially
  }, [dispatch]);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        {showPopup && (
          <PopupModal message={popupMessage} onClose={closePopup} />
        )}

        <img
          src="/images/logo.png"
          className="App-logo border-2 border-white rounded-full"
          alt="logo"
        />
        <p>Welcome you are successfully installed template</p>
        <a
          className="App-link"
          href="https://rahul-kumar-sahu-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my profile
        </a>
      </header>
    </div>
  );
}

export default App;
