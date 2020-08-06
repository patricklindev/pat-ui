import React from 'react';
import { RenderCard } from './components/Card/RenderCard';
import { CardType, CardSize } from './components/Card/Card';
function App() {
  return (
    <div className='App'>
      {/* <h1> Welcome To Pat-UI</h1>
      <h2>Default</h2>
      <Button className="test">Default Button</Button>
      <Button
        disabled
        onClick={() => {
          alert("Default Button Clicked");
        }}
      >
        Default Button
      </Button>

      <h2>Type</h2>
      <Button btnType={ButtonType.Primary}>Primary Button</Button>
      <Button btnType={ButtonType.Secondary}>Secondary Button</Button>
      <Button btnType={ButtonType.Danger}>Danger Button</Button>
      <Button btnType={ButtonType.Link}>Link Button</Button>
      <Button
        disabled
        // onClick={() => {
        //   alert('Default Button Clicked');
        // }}
        btnType={ButtonType.Link}
        href="www.google.com"
      >
        Link Button
      </Button>
      <h2>Size</h2>
      <Button btnSize={ButtonSize.Large}>Large Button</Button>
      <Button>Default Button</Button>
      <Button btnSize={ButtonSize.Small}>Small Button</Button> */}

      <RenderCard></RenderCard>
    </div>
  );
}

export default App;
