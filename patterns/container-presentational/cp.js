/*
    Ideally, we want to enforce separation of concerns by separating this process into two parts:

   * Presentational Components: Components that care about how data is shown to the user. In this example, that's the rendering the list of dog images.
   * Container Components: Components that care about what data is shown to the user. In this example, that's fetching the dog images.
   
    * In many cases the container component can be replaced wiith Hooks, for this example we wil be using hook as container. 
*/

import { useState } from "react";

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}

export function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog) => <img src={dog} key={i} alt="Dog" />);
}
