import { useEffect, useState } from 'react';

export const useLocalStorage = (itemName, initialValue) => {

  const [synchronizedItem, setSynchronizedItem] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if( !localStorageItem ) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true);
  
      } catch (error) {
        setError(error);
      }
      
    }, 2500);
  }, [synchronizedItem]);

  const synchronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false);
  }

  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);

    } catch(error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  }

}