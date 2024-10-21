import { products } from "./productstData.js";

(() => {
    let category = checkIfCategoryExist(products, "Irasikite kategorija:")


    function checkIfCategoryExist(products, text){
        let category = prompt(text);
        products.forEach(function (product) {
            if(product.category === category){
                return category;   
            }      
        });
        return checkIfCategoryExist(products, "Tokios kategorijos nera bandykite darkarta");
    }
    


  let filteredProducts = fillterByCategory(products, category);

  let priceOrder = prompt("irasykite asc ar dsc")
  priceOrder.toLowerCase();



  console.log(orderProductdByPrice(filteredProducts, priceOrder));

  function orderProductdByPrice(filteredProducts, text) {
    let productsByPrice = [];
    if (text == "dsc") {
      productsByPrice = filteredProducts.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price < a.price) return -1;
        return 0;
      });
    } else if (text == "asc") {
      productsByPrice = filteredProducts.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price < a.price) return 1;
        return 0;
      });
    }
    return productsByPrice;
  }

  function fillterByCategory(products, category) {
    return products.filter((product) => product.category == category);
  }
})();
