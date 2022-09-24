import { Children, cloneElement } from "react"

export function TodoHeader({ children, loading }) {

  const arrayChildren = Children.toArray(children).map( 
    child => cloneElement(child, { loading })
  )

  return (
    <header>
      { arrayChildren }
    </header>
  )
}