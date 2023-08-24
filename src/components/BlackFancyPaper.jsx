function BlackFancyPaper({
    children,
    bg = "bg-feature-card",
    borderBg = "bg-feature-card-border",
  }) {
    return (
      <div
        className={`shadow-[0px_4px_50px_rgba(0,0,0,0.25)] rounded-[30px] p-[2px] flex flex-col feature-card  max-w-3xl mx-auto ${borderBg}` }
      >
        <div className="bg-main-bg rounded-[30px] overflow-hidden flex-1 flex flex-col">
          <div className={`${bg} flex-1 relative`}>{children}</div>
        </div>
      </div>
    );
  }
  
  export default BlackFancyPaper;
  