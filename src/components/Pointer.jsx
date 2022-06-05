import { useState, useEffect } from "react";

const Pointer = () => {
  const [mouseLocation, setmouseLocation] = useState({ x: null, y: null });

  useEffect(() => {
    const handle = (e) => {
      setmouseLocation({
        x: e.pageX,
        y: e.pageY,
        movementX: e.movementX,
        movementY: e.movementY,
      });
      console.log(e.pageX);
    };
    window.addEventListener("mousemove", handle);

    // return window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      style={{
        top: mouseLocation.x,
        left: mouseLocation.y,
        position: "absolute",
      }}
      className="cursor-direction bg-indigo-100"
    ></div>
  );
};

export default Pointer;
