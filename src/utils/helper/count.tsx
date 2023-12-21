export const countStat = (data: Array<any>): number => {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    count += data[i].total_price;
  }

  return count;
};

export const countStatStock = (data: Array<any>): number => {
  let count = 0;

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].total_stock < 10) {
        count++;
      }
    }
  }

  return count;
};
