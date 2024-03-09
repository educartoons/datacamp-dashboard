import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const UserContext = createContext(null);

type UserContextProviderProps = {
  children: React.ReactNode;
};

function UserContextProvider({ children }: UserContextProviderProps) {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await result.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <UserContext.Provider
      value={{
        pokemons: pokemons,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function usePokemons() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("usePokemons must be used within a UserContextProvider");
  }

  return context;
}

export { usePokemons, UserContextProvider };
