function service() {
  const getAllProducts = () => {
    return fetch(
      "https://flymaxindia.stnshops.com",


    )
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((e) => e);
  };

  return {
    getAllProducts,
  };
}

const productsService = service();

export default productsService;
