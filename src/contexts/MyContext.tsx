import { ReactNode, createContext, useState } from 'react'

interface MyContextProviderProps {
  children: ReactNode
  bag: [object]
  setBag: () => void
  quantity: number
  setQuantity: () => void
}
export const MyContext = createContext({} as MyContextProviderProps)

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [bag, setBag] = useState([])
  const [quantity, setQuantity] = useState(1)
  return (
    <MyContext.Provider
      value={{ bag, setBag, children, quantity, setQuantity }}
    >
      {children}
    </MyContext.Provider>
  )
}
