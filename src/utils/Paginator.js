const Paginator = (items, offset, limit) => items.slice(offset).slice(0, limit);
export default Paginator;
