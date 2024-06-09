import React from "react";
import { reactIcons } from "../../utils/icons";

const PopupModal = ({ message, onClose }) => {
  return (
    <div className="popup-modal bg-white absolute right-3 top-3 rounded-md text-black min-w-96 text-sm">
      <div className="flex items-center justify-between border-b border-black border-dashed p-1">
        <h4>Heading</h4>
        <button className=" " onClick={onClose}>
          {reactIcons.close}
        </button>
      </div>
      <div className="popup-content p-3">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PopupModal;
