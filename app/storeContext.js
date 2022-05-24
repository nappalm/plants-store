import { createContext, useState } from 'react'

export const StoreContext = createContext()

const AppContext = ({ children }) => {
  const [items, setItems] = useState([])

  const toggleItem = item => {
    const exist = items.find(({ id }) => id == item.id)
    if (!exist) {
      setItems(prev => [...prev, item])

      return
    }

    const newItems = items.filter(({ id }) => id !== item.id)
    setItems(newItems)
  }

  return (
    <StoreContext.Provider value={{ items, toggleItem }}>
      {children}
    </StoreContext.Provider>
  )
}

export default AppContext
