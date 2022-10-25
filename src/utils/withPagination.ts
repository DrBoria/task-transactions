function WithPagination<ArrayElement> (array: ArrayElement[], elementsPerPage: number, currentPage: number): ArrayElement[] {
  // Show limited count of orders
  return array.slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage);
};

export default WithPagination;
