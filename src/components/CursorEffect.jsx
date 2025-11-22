import React, { useEffect, useState } from "react";
import "./CursorEffect.css";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div
      className="cursor-effect"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default CursorEffect;
