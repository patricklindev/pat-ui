import React from 'react';
import Rating from './components/Rating/Rating'
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1> Welcome To Pat-UI</h1>      
      <Rating rtKey='1'>Star</Rating>
      <Rating rtShape='moon' rtAnimation='bounce' rtKey='2'/>
      <Rating rtShape='heart' rtAnimation= 'fade' rtKey='3'/>
      <Rating rtShape='smile-wink' rtAnimation= 'swing' rtKey='4'/>

    </div>
  );
}

export default App;
