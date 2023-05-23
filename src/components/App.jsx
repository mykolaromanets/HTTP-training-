import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './PokemonInfo';
import PokemonForm from './PokemonForm';

export default class App extends Component {
  state = {
    pokemonName: '',
  };
  handleSerchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1178, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleSerchFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
