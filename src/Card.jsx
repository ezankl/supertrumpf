import * as React from 'react';

import './Card.css';
import Animal from './Animal';

export default function Card() {
  const elephant = new Animal('Elephant', 'placeholder.png', 3.3, 6000, 70, 1, 40);
  return (
    <div className="card">
      <h1>{elephant.name}</h1>
      <img
        alt="Elefant"
        height="200"
        width="200"
        src={`${process.env.PUBLIC_URL}/${elephant.image}`}
      />
      <table>
        <tbody>
          <tr>
            <td>Größe</td>
            <td>{elephant.size} m</td>
          </tr>
          <tr>
            <td>Gewicht</td>
            <td>{elephant.weight} kg</td>
          </tr>
          <tr>
            <td>Alter</td>
            <td>{elephant.age} Jahre</td>
          </tr>
          <tr></tr>
          <tr>
            <td>Nachkommen</td>
            <td>{elephant.offspring}</td>
          </tr>
          <tr>
            <td>Geschwindigkeit</td>
            <td>{elephant.speed} km/h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
