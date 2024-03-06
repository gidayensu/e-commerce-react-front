function CategoryUI({ categoryName, imageUrl, numberOfProducts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="group bg-slate-300 h-36 w-36  rounded-lg flex items-center justify-center overflow-hidden">
          <img className="object-cover rounded-xl h-36 w-auto transition-opacity duration-300 ease-in-out group-hover:brightness-50" src={imageUrl} alt={categoryName} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">{categoryName}</p>
          </div>
        </div>
      </div>
      <p className="mt-3 inline font-bold">{categoryName}</p>
      <p>{numberOfProducts || 0} products</p>
    </div>
  );
}

export default CategoryUI;
