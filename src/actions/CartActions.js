export const addToCart = (item) => {

  console.log(`ACTION: adding ${item} to cart`)
  return{
    type: "ADD_ITEM",
    item
  }
}

export const removeFromCart = (item) => {
  console.log(`ACTION: removing ${item} from cart`)
  return {
    type: "REMOVE_ITEM",
    item
  }
}
