const commentsLabel = (nro: any) => {
  return !nro || isNaN(nro) || nro === 0
    ? 'No Comments'
    : `${nro} Comment${nro > 1 ? 's' : ''}`;
};
export default commentsLabel;
