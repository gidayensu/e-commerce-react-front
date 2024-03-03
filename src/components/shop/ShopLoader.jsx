function ShopLoader({number}){
    return (<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
    {[...Array(number)].map((_, index) => (
      <div key={index} className="flex flex-col gap-4 md:w-52 w-40">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    ))}
  </div>
  );
}

export default ShopLoader;