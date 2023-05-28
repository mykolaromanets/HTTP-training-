import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './PokemonInfo';
import PokemonForm from './PokemonForm';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');

  // const handleSerchFormSubmit = pokemonName => {
  //   setPokemonName(pokemonName);
  // };
  return (
    <div style={{ maxWidth: 1178, margin: '0 auto', padding: 20 }}>
      <PokemonForm onSubmit={setPokemonName(pokemonName)} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
