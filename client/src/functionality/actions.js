
var product = {
   name:" ", des:" ", comm: "" 
}

const add = (product,  desc, comment = "") => {
  if (productList[input]) {
    return "Product exists";
  }
  productList[input] = {des:desc, comm:comment};
  return "Product is added!";
};

export { add, product };

{ label: "Name", value: product.name, type: "textinput"},
{ label: "Desc", value: product.desc, type: "textinput" },
{ label: "Comment", value: product.comm, type: "textinput" },