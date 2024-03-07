function Accordion({question, children}) {
  return (
    <div className="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="checkbox" id="accordion1" class="collapse-open" />
        <div class="collapse-title md:text-xl text-sm font-medium">
          {question}
        </div>
        <div class="collapse-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
