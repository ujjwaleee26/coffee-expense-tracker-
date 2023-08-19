import React from 'react';
//import keyConceptsImage from './assets/images/key-concepts.png';


const concepts = [
  {
    orderId: '#123',
    amount : 12,
    date : new Date(2023,8,18)
  }
  {
    orderId: '#124',
    amount : 10,
    date : new Date(2023,7,18)
  },
  {
    orderId: '#125',
    amount : 14,
    date : new Date(2023,6,18)
  },
];

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE" />
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
