import { useState } from 'react';
import './styles/style.css';
import AnimalFactCard from './components/AnimalFactCard';

function App() {
  const [animal, setAnimal] = useState('cat');

  const genderChangeHandler = (event) => setAnimal(event.target.value);

  return (
    <>
      <select onChange={genderChangeHandler}>
        <option value="cat">Cat Fact</option>
        <option value="dog">Dog Fact</option>
      </select>
      <AnimalFactCard animal={animal} />
    </>
  );
}

export default App;
