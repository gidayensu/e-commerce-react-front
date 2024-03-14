import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import ProductsUI from './ProductsUI';
import { useSelector } from 'react-redux';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

function PaginatedProducts({ itemsPerPage }) {
  const { products } = useSelector(state => state.products);
  const { filteredProducts, filtered } = useSelector(state => state.filter);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    let productsToBeDisplayed = [];

    if (filteredProducts.length !== 0) {
      productsToBeDisplayed = filteredProducts;
    } else if (filteredProducts.length === 0 && filtered) {
      setCurrentItems(null);
      return; 
    } else {
      productsToBeDisplayed = products;
    }

    const endOffset = itemOffset + itemsPerPage;
    const slicedItems = productsToBeDisplayed.slice(itemOffset, endOffset);

    setCurrentItems(slicedItems);
    setPageCount(Math.ceil(productsToBeDisplayed.length / itemsPerPage));
  }, [filteredProducts, filtered, products, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  if (currentItems === null) {
    return <p>No products meet your specification. Clear filters or search with new specifications</p>;
  }

  return (
    <>
      <ProductsUI productsData={currentItems} />
      <ReactPaginate
        nextLabel={<FaCaretRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<FaCaretLeft />}
        pageClassName="page-item"
        pageLinkClassName="page-link btn rounded-none bg-transparent"
        previousClassName="page-item btn"
        previousLinkClassName="page-link"
        nextClassName="page-item btn"
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

export default PaginatedProducts;
