


export const filterData = (data, filterBy, value) => {
    console.log(filterBy);
    const dataFiltrada = data.filter(campeona => campeona.hechos[filterBy] === value);
      console.log(dataFiltrada)
    return dataFiltrada;
  };
  
  export const sortData = (data, sortBy, sortOrder) => {
    if (sortOrder === "asc") {
      return data.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (sortOrder === "desc") {
      return data.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return -1;
        } else if (a[sortBy] < b[sortBy]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      // Si el sortOrder no es "asc" ni "desc", devolver los datos sin ordenar
      return data;
    }
  };