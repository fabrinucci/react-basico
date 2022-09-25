import { useEffect, useState } from "react"

export function useStorageListener(synchronize) {  
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
    synchronize();
    setStorageChange(false);
  }

  return [
    storageChange,
    toggleShow
  ]  
}