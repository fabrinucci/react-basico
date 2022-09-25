import { useEffect, useState } from "react"

function withStorageListener(WrappedComponent) {  
  return function WrappedComponentStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = change => {
        if( change.key === 'Todos_V1') {
          setStorageChange(true)
        }
      }

      window.addEventListener('storage', onChange);

      return () => {
        window.removeEventListener('storage', onChange);
      }
    }, [])


    const toggleShow = () => {
      props.synchronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener };