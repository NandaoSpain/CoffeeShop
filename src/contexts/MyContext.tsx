// import { ReactNode, createContext, useState } from 'react'

// export interface Coffee {
//   quantity: number
//   coffee: any
//   image: string
//   name: string
//   id?: number
//   price: number
//   description?: string
// }

// interface MyContextProviderProps {
//   children: ReactNode
// }

// interface MyContextValue {
//   bag: Coffee
//   setBag: (bag: Coffee) => void
//   quantity: number
//   setQuantity: (quantity: number) => void
// }

// export const MyContext = createContext({} as MyContextValue)

// export function MyContextProvider({ children }: MyContextProviderProps) {
//   const [bag, setBag] = useState<Coffee[]>([])
//   const [quantity, setQuantity] = useState(1)

//   return (
//     <MyContext.Provider value={{ bag, setBag, quantity, setQuantity } as any}>
//       {children}
//     </MyContext.Provider>
//   )
// }

import { createContext, ReactNode, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  description?: string
  price: number
  quantity: number
  image: string
  coffee: any
}

interface MyContextValue {
  bag: Coffee[]
  setBag: (bag: Coffee[]) => void
}

interface MyContextProviderProps {
  children: ReactNode
}

export const MyContext = createContext({} as MyContextValue)

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [bag, setBag] = useState<Coffee[]>([])

  return (
    <MyContext.Provider value={{ bag, setBag }}>{children}</MyContext.Provider>
  )
}
