import './App.css';

import {simpsonsArray} from "./data/simpsons_data";
import Simpson from "./components/simpsons/Simpsons";
import Character from "./components/mult_characters/Character";
import {useEffect, useState} from "react";

const App = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
            .then(value => value.json())
            .then(value => {
                setCharacters(value);
            });
    },[])
  return (
      <div>
          {
              simpsonsArray.map((simpson, index) =>(
                  <Simpson props={simpson} key={index}/>
              ))
          },
          {
              characters.map(character => (
                  <Character props={character} key={character.id}/>
              ))
          }

      </div>
  );
};

export {App};
