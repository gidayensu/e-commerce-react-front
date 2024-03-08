import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../util/http.js';

export const useQueryProcessor = ()=> {
  const source = "featured";

    const {data, isPending, error} =  useQuery({
        queryKey: ['categories'],
        queryFn: ()=> fetchProducts({source})
      });

      if (isPending) {
        return "...Loading"
      }

      if (error) {
        return error;
      }
      
    return {data, isPending, error}
    
  }

  