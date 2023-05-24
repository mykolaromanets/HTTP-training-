import { Component } from 'react';
import PokemonErrorbackView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`Нет такого ${this.props.pokemonName}`)
            );
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonErrorbackView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
