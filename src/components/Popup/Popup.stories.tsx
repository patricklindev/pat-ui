import React from 'react';
import Popup from './Popup';

export default {
  title: 'Popup',
  component: Popup,
  toggle: false,
};

export const DefaultPopup = () => (
  <Popup
    className="basic-Popup"
    popupContent="Defualt popup content, put any text you want in the popupcontent prop"
  ></Popup>
);

export const DiffSizePopup = () => (
  <div>
    <Popup
      className="basic-Popup"
      popupContent="Large black popup, mulitple lines text, put any text you want in the popupcontent prop"
      popupSize="large"
      popupColor="black"
    ></Popup>
    <br />
    <br />
    <Popup
      className="basic-Popup"
      popupContent="small black popup messsage put any text you want in the popupcontent prop"
      popupSize="small"
      popupColor="black"
    ></Popup>
  </div>
);

export const DiffSizeAndColorPopup = () => (
  <div>
    <Popup
      className="basic-Popup"
      popupContent="Large black popup, mulitple lines text, put any text you want in the popupcontent prop"
      popupSize="large"
      popupColor="black"
    ></Popup>
    <br />
    <br />
    <Popup
      className="basic-Popup"
      popupContent="Small green popup put any text you want in the popupcontent prop"
      popupSize="small"
      popupColor="green"
    ></Popup>
  </div>
);
