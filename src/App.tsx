import React from 'react';
import Rating from './components/Rating/Rating'
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1> Welcome To Pat-UI</h1>      
      <Rating>Star</Rating>
      <Rating rtShape='moon' rtAnimation='bounce'/>
      <Rating rtShape='heart' rtAnimation= 'fade' />
      <Rating rtShape='smile wink' rtAnimation= 'swing' />

    </div>
  );
}
export default App;
