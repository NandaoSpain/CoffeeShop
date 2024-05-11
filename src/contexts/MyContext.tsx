import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  quantity: string | number | readonly string[] | undefined
  coffee: any
  map(
    arg0: (item: Coffee) => import('react/jsx-runtime').JSX.Element,
  ): ReactNode
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
    <MyContext.Provider value={{ bag, setBag, quantity, setQuantity }}>
      {children}
    </MyContext.Provider>
  )
}
