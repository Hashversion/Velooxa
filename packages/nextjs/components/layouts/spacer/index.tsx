type Sizes = "sm" | "md" | "lg";

type SpacerProps = {
  children: React.ReactNode;
  section?: Sizes;
  container?: Sizes | boolean;
};

const Spacer = ({ section = "md", container = "lg", children }: SpacerProps) => {
  const containerClassName = container === false ? "none" : typeof container === "boolean" ? "lg" : `${container}`;

  return (
    <>
      <div className={`padding-global padding-section-${section}`}>
        {container ? <div className={`container-${containerClassName}`}>{children}</div> : children}
      </div>
    </>
  );
};

export default Spacer;
