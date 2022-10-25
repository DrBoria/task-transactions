const WithPagination = (array: any[], elementsPerPage: number, currentPage: number): any[] => {
  // Show limited count of orders
  return array.slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage);
};

export default WithPagination;
