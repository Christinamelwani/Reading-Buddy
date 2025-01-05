"use client";

import React, { useState } from "react";

const AddToLibraryButton = () => {
  const baseStyle =
    "px-4 py-2 rounded-md text-xl text-white font-medium transition";
  const inactiveStyle = "bg-blue-500 hover:bg-blue-600";
  const activeStyle = "bg-green-500 hover:bg-green-600";

  const activeText = "Adding to Library...";
  const inactiveText = "Add to Library";

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={toggleActive}
      aria-label={active ? activeText : inactiveText}
      className={`${baseStyle} ${active ? activeStyle : inactiveStyle}`}
    >
      {active ? activeText : inactiveText}
    </button>
  );
};

export default AddToLibraryButton;
