const Paginator = (items, offset, limit) => {
  let paginatedItems = items.slice(offset).slice(0, limit);
  return {
    data: paginatedItems,
  };
};
export default Paginator;
