import ReactPaginate from 'react-paginate';
import {  useEffect, useMemo, useState } from "react"
import ProductsUI from './ProductsUI';
import {  useSelector } from 'react-redux';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";


function PaginatedProducts({ itemsPerPage }) {
  // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchData())
    // }, []) 
  

  
    
  // We start with an empty list of data.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const { products } = useSelector((state)=>state.products);
  const {filteredProducts} = useSelector((state)=>state.filter);

  let productsToBeDisplayed = products;

  if (filteredProducts.length !== 0) {
    productsToBeDisplayed = filteredProducts;
  }

  useMemo(()=> {
    setCurrentItems(productsToBeDisplayed)
  }, [products, productsToBeDisplayed])

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

    

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(productsToBeDisplayed.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(productsToBeDisplayed.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productsToBeDisplayed]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % productsToBeDisplayed.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductsUI productsData={currentItems} />
      <ReactPaginate
        nextLabel={<FaCaretRight/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<FaCaretLeft/>}
        pageClassName="page-item"
        pageLinkClassName="page-link btn rounded-none bg-transparent"
        previousClassName="page-item "
        previousLinkClassName="page-link"
        nextClassName="page-item "
        nextLinkClassName="page-link "
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link text-center  "
        containerClassName="pagination join md:w-full -ml-8"
        activeClassName="active bg-primary text-white"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedProducts