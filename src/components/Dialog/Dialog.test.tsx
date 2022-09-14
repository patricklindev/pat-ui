import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

/**
 * Developers can provide title, content, actions of the dialog component from children props of the component

should have a dimed backdrop by default, users can close the dialog by clicking on the backdrop
shouldn’t be able to scroll the page when the dialog is open
should be able to listen to the close of the dialog by providing the onClose callback function.
should be able to control the open/Developers can provide title, content, actions of the dialog component from children props of the component
should close the dialog by clicking on the backdrop.
shouldn’t be able to scroll the page when the dialog is open
should be able to listen to the close of the dialog by providing the onClose callback function.
should be able to control the open/close of the dialog from props.close of the dialog from props.
 */

describe('dialog', () => {
    it('should have a dimmed background ', () => {

    });
    
    it('should prevent scrolling when dialog open ', () => {
        //  check if “overflow” property of the body element set to “hidden”
    });

});