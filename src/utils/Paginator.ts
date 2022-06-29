const Paginator = <t>(items: t[], offset: number, limit: number): t[] =>
  items.slice(offset).slice(0, limit);
export default Paginator;
