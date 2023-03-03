import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialogue from './Dialogue';
import Button from '../Button';
import Input from '../Input';
describe('Dialogue', () => {
  it('should match snapshot when not open', () => {
    // https://github.com/jsdom/jsdom/issues/3294
    HTMLDialogElement.prototype.close = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = false;
    });

    const { asFragment } = render(
      <Dialogue
        open={false}
        onClose={() => {}}
        className="jest-test-not-open"
        dialogueTitle="Jest Testing Not Open"
      >
        <p>Snapshot Dialogue</p>
      </Dialogue>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when open', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    const { asFragment } = render(
      <Dialogue
        open={true}
        onClose={() => {}}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </p>
        <Input fluid placeholder="Email Address" />
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            btnType="link"
            disabled={false}
            onClick={function noRefCheck() {}}
          >
            Cancel
          </Button>
          <Button
            btnType="link"
            disabled={false}
            onClick={function noRefCheck() {}}
          >
            Subscribe
          </Button>
        </div>
      </Dialogue>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render dialogue', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    render(
      <Dialogue
        open={true}
        onClose={() => {}}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
      </Dialogue>
    );
    expect(screen.getByText('Snapshot Dialogue')).toBeInTheDocument();
  });

  it('should render dialogue with correct title', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    render(
      <Dialogue
        open={true}
        onClose={() => {}}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
      </Dialogue>
    );
    const dialogueTitleElement = screen.getByTestId('dialogue-title-element');
    expect(dialogueTitleElement).toHaveTextContent('Jest Testing Open');
  });

  it('should render dialogue with correct cancel button', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    render(
      <Dialogue
        open={true}
        onClose={() => {}}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            btnType="link"
            disabled={false}
            onClick={function noRefCheck() {}}
            data-testid="dialogue-cancel-button-element"
          >
            Cancel
          </Button>
          <Button
            btnType="link"
            disabled={false}
            onClick={function noRefCheck() {}}
          >
            Subscribe
          </Button>
        </div>
      </Dialogue>
    );
    const dialogueCancelButtonElement = screen.getByTestId(
      'dialogue-cancel-button-element'
    );
    expect(dialogueCancelButtonElement).toBeInTheDocument();
  });

  it('should render dialogue with correct children', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    render(
      <Dialogue
        open={true}
        onClose={() => {}}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
      </Dialogue>
    );
    const dialogueChildrenElement = screen.getByText('Snapshot Dialogue');
    expect(dialogueChildrenElement).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    const onClose = jest.fn();
    render(
      <Dialogue
        open={true}
        onClose={onClose}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
        <Button
          btnType="link"
          disabled={false}
          onClick={onClose}
          data-testid="dialogue-close-button-element"
        >
          Close
        </Button>
      </Dialogue>
    );
    const dialogueCloseButtonElement = screen.getByTestId(
      'dialogue-close-button-element'
    );
    fireEvent.click(dialogueCloseButtonElement);
    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose when escape key is pressed', () => {
    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    const onClose = jest.fn();
    render(
      <Dialogue
        open={true}
        onClose={onClose}
        className="jest-test-open"
        dialogueTitle="Jest Testing Open"
      >
        <p>Snapshot Dialogue</p>
      </Dialogue>
    );
    fireEvent.keyDown(document, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });
    expect(onClose).toHaveBeenCalled();
  });

});
