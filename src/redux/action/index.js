//  for add item to cart

export const AddCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  }
}
// for delete item cart

export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  }
}
export const clearCart = (product) => {
  return {
    type: 'REMOVE_CART',
    payload: product,
  }
}
