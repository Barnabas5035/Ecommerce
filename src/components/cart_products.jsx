import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './Reducer'

const url = 'http://fakestoreapi.com/products'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  loading: false,
  cart: getLocalStorage(),
  total: 0,
  amount: 0,
}
const ProductsContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        toggleAmount,
        increase,
        decrease,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(ProductsContext)
}

export { ProductsContext, AppProvider }
