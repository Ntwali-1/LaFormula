import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const addHover = () => setIsHover(true);
    const removeHover = () => setIsHover(false);

    const interactiveEls = document.querySelectorAll("a, button,#logo");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.body.style.cursor = "auto"; // restore default on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div>
      {/* Outer ring / circle */}
      <div
        className="fixed pointer-events-none rounded-full border border-white/30 transition-transform duration-100 ease-out"
        style={{
          width: isHover ? "60px" : "36px",
          height: isHover ? "60px" : "36px",
          left: pos.x - (isHover ? 30 : 18),
          top: pos.y - (isHover ? 30 : 18),
          borderColor: isHover ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
          zIndex: 9999,
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none rounded-full transition-transform duration-75 ease-out"
        style={{
          width: "8px",
          height: "8px",
          left: pos.x - 4,
          top: pos.y - 4,
          background: isHover
            ? "var(--gradient-primary-glow)"
            : "var(--gradient-primary)",
          zIndex: 10000,
        }}
      />
    </div>
  );
};

export default CustomCursor;
