import categoriesData from '../../assets/categories.json';
import { useState, useEffect } from 'react';


function Categories() {
//   const [categories, setCategories] = useState([]);

    const categories = categoriesData.categories;
    

    
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
            
    //       const response = await fetch('./categories.json');

    //       console.log('this is response', response.json());
    //       if (!response.ok) {
    //         throw new Response(
    //           JSON.stringify({ message: "Could not fetch categories data" }),
    //           { status: 500 }
    //         );
    //       } else {
    //         const data = await response.json();
            
    //         setCategories(data);
           
    //       }
    //     } catch (error) {
    //       throw error;
    //     }
    //   };
    //   fetchData();
    // }, []);
    
    return(
        <>   
        <div className='flex flex-wrap items-center justify-center sm:justify-start sm:items-start gap-3'>
        {categories.map((category)=> {
            return(
                <div key={category.id} className="flex flex-col bg-white w-32 sm:w-60 p-4 h-24 sm:h-auto justify-center items-center drop-shadow-lg rounded-lg">
                <img className="w-12 sm:w-32 h-auto mx-auto mb-2" src={`${category.image}`} alt={`${category.name} image`} />
                <p className="text-center">{category.name}</p> 
            </div>
            
            )
        }
            )}
            

            
        </div>        
        </>
    )
}

export default Categories;

