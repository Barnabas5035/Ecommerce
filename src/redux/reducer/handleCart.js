const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case 'ADDITEM':
      // check if the product exist
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        // increase the Quanlity
        return state.map((x) =>
          x.id === product.id ? { ...x, quanlity: x.quanlity + 1 } : x
        )
      } else {
        const product = action.payload
        return [...state, { ...product, quanlity: 1 }]
      }
      break
    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, quanlity: x.quanlity - 1 } : x
        )
      } else {
        return state
      }
      break

    case 'REMOVE_CART':
      const exist2 = state.find((x) => x.id === product.id)
      return state.filter((x) => x.id !== exist2.id)

    default:
      return state
      break
  }
}
export default handleCart

