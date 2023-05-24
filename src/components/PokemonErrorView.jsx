import errorImage from './oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif';

export default function PokemonErrorbackView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="300" alt="sad robot" />
      <p>{message}</p>
    </div>
  );
}
