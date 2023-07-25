// AppState.js
import { createContext, useState, useContext } from 'react';

const AppStateContext = createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AppStateContext.Provider value={{ user, setUser }}>
      {children}
    </AppStateContext.Provider>
  );
}