export function filterdata(search, restaurants) {
    const fildata = restaurants.filter((rest) =>
      rest.info.name.toLowerCase().includes(search.toLowerCase())
    );
    return fildata;
  }