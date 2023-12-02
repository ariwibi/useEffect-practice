import React from 'react';
import Row from './_base/Row';
import { useState, useEffect } from 'react';
import { getRandomAnimalFact } from '../utils/api';

function AnimalFactCard({ animal }) {
  const [image, setImage] = useState(null);
  const [fact, setFact] = useState(null);
  useEffect(() => {
    if (fact !== null) {
      document.title = fact;
    }
  }, [fact]);

  useEffect(() => {
    // getRandomAnimalFact(animal).then(({ fact, image }) => {
    //   setFact(fact);
    //   setImage(image);
    // });
    async function fetchAnimalData() {
      const { fact, image } = await getRandomAnimalFact(animal);
      setFact(fact);
      setImage(image);
    }
    fetchAnimalData();

    return () => {
      setFact(null);
      setImage(null);
    };
  }, [animal]);

  return (
    <section>
      <Row label="Image">
        {image === null ? (
          <img src="https://via.placeholder.com/600x400" alt="placeholder" />
        ) : (
          <img src={image} alt={fact} />
        )}
      </Row>
      <Row label="Fact">
        {fact === null ? (
          <p>Loading fact ...</p>
        ) : (
          <textarea value={fact} onChange={(event) => setFact(event.target.value)}></textarea>
        )}
      </Row>
    </section>
  );
}

export default AnimalFactCard;
