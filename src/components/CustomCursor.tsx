import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const addHover = () => setIsHover(true);
    const removeHover = () => setIsHover(false);

    // Attach hover events to interactive elements (e.g. links/buttons)
    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div>
      {/* Outer ring / circle */}
      <div
        className="fixed pointer-events-none rounded-full border border-white/20 transition-all duration-300"
        style={{
          width: isHover ? "80px" : "40px",
          height: isHover ? "80px" : "40px",
          left: pos.x - (isHover ? 40 : 20),
          top: pos.y - (isHover ? 40 : 20),
          borderColor: isHover ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
          zIndex: 9999,
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none rounded-full transition-all duration-150"
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
