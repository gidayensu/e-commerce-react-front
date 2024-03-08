function Accordion({question, children}) {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="checkbox" id="accordion1" className="collapse-open" />
        <div className="collapse-title md:text-xl text-sm font-medium">
          {question}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
