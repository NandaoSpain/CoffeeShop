import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  quantity: number
  coffee: any
  image: string
  name: string
  id?: number
  price: number
  description?: string
}

interface MyContextProviderProps {
  children: ReactNode
}

interface MyContextValue {
  bag: Coffee
  setBag: (bag: Coffee) => void
  quantity: number
  setQuantity: (quantity: number) => void
}

export const MyContext = createContext({} as MyContextValue)

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [bag, setBag] = useState<Coffee[]>([])
  const [quantity, setQuantity] = useState(1)

  return (
    <MyContext.Provider value={{ bag, setBag, quantity, setQuantity } as any}>
      {children}
    </MyContext.Provider>
  )
}
