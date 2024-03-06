function CategoryUI({ categoryName, imageUrl, numberOfProducts }) {
  return (
    
      <div className="flex flex-col items-center">
        <div className="bg-slate-300 h-36 w-36 hover:h-40 hover:w-40 mb-5 hover:mb-0 rounded-lg flex items-center justify-center">
          <img className="object-cover rounded-xl h-36 w-auto hover:h-40" src={imageUrl} alt={categoryName} />
        </div>
        <p className="mt-3 font-bold">{categoryName}</p>
        <p>{numberOfProducts || 0} products</p>
      </div>
    
  );
}

export default CategoryUI;
