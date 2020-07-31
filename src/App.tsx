import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/Button';
function App() {
  return (
    <div className="App">
      <h1> Welcome To Pat-UI</h1>
      <h2>Default</h2>
      <Button>Default Button</Button>
      <h2>Type</h2>
      <Button btnType={ButtonType.Primary}>Primary Button</Button>
      <Button btnType={ButtonType.Secondary}>Secondary Button</Button>
      <Button btnType={ButtonType.Danger}>Danger Button</Button>
      <Button btnType={ButtonType.Link}>Link Button</Button>
      <h2>Size</h2>
      <Button btnSize={ButtonSize.Large}>Large Button</Button>
      <Button>Default Button</Button>
      <Button btnSize={ButtonSize.Small}>Small Button</Button>
      <h2>Disabled</h2>
      <Button disabled>Default Button</Button>
      <Button disabled btnType={ButtonType.Link} href="#">
        Link Button
      </Button>
    </div>
  );
}

export default App;
