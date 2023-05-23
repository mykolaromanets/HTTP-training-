import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });
      //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
      //     .then(res => res.json())
      //     .then(pokenom => this.setState({ pokemon: pokenom }))
      //         .finally(() => this.setState({ loading: false }));
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
          .then(pokenom => this.setState({ pokemon: pokenom }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'rejected') {
      return <div>{error.message} </div>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="300"
            alt=""
          />
        </div>
      );
    }
  }
}
