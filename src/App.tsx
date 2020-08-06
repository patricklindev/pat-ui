import React from 'react';
import Rating from './components/Rating/Rating'
import Button from './components/Button/Button';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faMoon, faStar, faHeart, faSmileWink } from '@fortawesome/free-regular-svg-icons'

// import {fas} from '@fortawesome/free-solid-svg-icons'


// library.add( fas, faMoon, faStar, faHeart, faSmileWink )

function App() {
  return (
    <div className="App">
      <h1> Welcome To Pat-UI</h1>      
      <Rating>Star</Rating>
      <Rating rtShape='moon' rtAnimation='bounce'/>
      <Rating rtShape='heart' rtAnimation= 'fade'/>
      <Rating rtShape='smile-wink' rtAnimation= 'swing'/>
      <h2>Default</h2>


      <Button className="test">Default Button</Button>
      <Button
        disabled
        onClick={() => {
          alert('Default Button Clicked');
        }}
      >
        Default Button
      </Button>

      <h2>Type</h2>
      <Button btnType='primary'>Primary Button</Button>
      <Button btnType='secondary'>Secondary Button</Button>
      <Button btnType='danger'>Danger Button</Button>
      <Button btnType='link'>Link Button</Button>
      <Button
        disabled
        // onClick={() => {
        //   alert('Default Button Clicked');
        // }}
        btnType='link'
        href="www.google.com"
      >
        Link Button
      </Button>
      <h2>Size</h2>
      <Button btnSize='lg'>Large Button</Button>
      <Button>Default Button</Button>
      <Button btnSize='sm'>Small Button</Button>
    </div>
  );
}

export default App;
