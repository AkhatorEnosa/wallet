import { createContext, useState } from 'react'
import { ReactNode } from 'react';

export const AppContext = createContext<{
    showAll: boolean;
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    showAll: false,
    setShowAll: () => {}
});


export function AppProvider({ children }: { children: ReactNode }) {
    const [showAll, setShowAll] = useState(false)
    
  return (
    <AppContext.Provider value={{
        showAll, setShowAll
    }}>
      {children}
    </AppContext.Provider>
  )
}