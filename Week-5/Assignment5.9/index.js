// Create a WeakMap to store product views
const productViews = new WeakMap();

// Create a WeakSet to store products in the user's cart
const cart = new WeakSet();

function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    const currentViews = productViews.get(productId);
    productViews.set(productId, currentViews + 1);
  } else {
    productViews.set(productId, 1);
  }
}

function addToCart(productId) {
  if (cart.has(productId)) {
    return "Product already in cart";
  } else {
    cart.add(productId);
    return "Product added to cart";
  }
}

const productId1 = { id: 1 };

incrementProductViews(productId1);
incrementProductViews(productId1);

console.log(addToCart(productId1)); // Output: "Product added to cart"
console.log(addToCart(productId1)); // Output: "Product already in cart"
