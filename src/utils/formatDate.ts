const formatDate = (value: Date): string =>
  new Intl.DateTimeFormat('pt-br').format(new Date(value));

export default formatDate;
