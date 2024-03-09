const fetchPokemons = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await result.json();
  return data.results || [];
};

export { fetchPokemons };
