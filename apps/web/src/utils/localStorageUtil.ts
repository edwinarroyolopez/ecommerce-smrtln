const getLocalStorageItem = <T>(key: string, initialValue: T | null): T | null => {
  try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
  } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
  }
};

  
  const setLocalStorageItem = <T,>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };
  
  const removeLocalStorageItem = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}"`, error);
    }
  };
  
  export { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem };