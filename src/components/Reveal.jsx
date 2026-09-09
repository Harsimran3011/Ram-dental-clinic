import useScrollReveal from "../hooks/useScrollReveal";

const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, isVisible] = useScrollReveal();

  const hiddenDirection = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `opacity-0 ${hiddenDirection[direction]}`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
