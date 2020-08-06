import React from 'react';
import Rating from './components/Rating/Rating';
import Button from './components/Button/Button';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faMoon, faStar, faHeart, faSmileWink } from '@fortawesome/free-regular-svg-icons'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// library.add( fas, faMoon, faStar, faHeart, faSmileWink )
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, " Welcome To Pat-UI"),
        React.createElement(Rating, null, "Star"),
        React.createElement(Rating, { rtShape: 'moon' }),
        React.createElement(Rating, { rtShape: 'heart' }),
        React.createElement(Rating, { rtShape: 'smile-wink' }),
        React.createElement("h2", null, "Default"),
        React.createElement(Button, { className: "test" }, "Default Button"),
        React.createElement(Button, { disabled: true, onClick: function () {
                alert('Default Button Clicked');
            } }, "Default Button"),
        React.createElement("h2", null, "Type"),
        React.createElement(Button, { btnType: 'primary' }, "Primary Button"),
        React.createElement(Button, { btnType: 'secondary' }, "Secondary Button"),
        React.createElement(Button, { btnType: 'danger' }, "Danger Button"),
        React.createElement(Button, { btnType: 'link' }, "Link Button"),
        React.createElement(Button, { disabled: true, 
            // onClick={() => {
            //   alert('Default Button Clicked');
            // }}
            btnType: 'link', href: "www.google.com" }, "Link Button"),
        React.createElement("h2", null, "Size"),
        React.createElement(Button, { btnSize: 'lg' }, "Large Button"),
        React.createElement(Button, null, "Default Button"),
        React.createElement(Button, { btnSize: 'sm' }, "Small Button")));
}
export default App;
