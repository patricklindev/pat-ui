import { fireEvent, render, screen } from "@testing-library/react";
import faker from "faker";
import Accordion from "./Accordion";

describe("<Accordion />", () => {
  it("should render items", () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={"basic"} />);

    items.forEach(({ title, content }) => {
      const titleEl = screen.queryByText(title);
      const contentEl = screen.queryByText(content);

      expect(titleEl).toBeInTheDocument();
      expect(contentEl).toBeInTheDocument();
    });
  });

  it("should render multiple expansions", () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={"controlled"} />);

    items.forEach(({ title, content }) => {
      const titleEl = screen.queryByText(title);
      const contentEl = screen.queryByText(content);

      expect(titleEl).toBeInTheDocument();
      expect(contentEl).toBeInTheDocument();
    });
  });

  it("should open one at a time", () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={"basic"} />);

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      fireEvent.click(titleEl);

      const currentListEl = titleEl.closest("li");
      const activeListEls = document.querySelectorAll("li.active");
      const activeListEl = activeListEls[0];

      expect(activeListEls.length).toBe(1);
      expect(activeListEl).toEqual(currentListEl);
    });
  });

  it("should close if already opened", () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={"basic"} />);

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      fireEvent.click(titleEl);
      fireEvent.click(titleEl);

      const currentListEl = titleEl.closest("li");

      expect(currentListEl).not.toHaveClass("active");
    });
  });
});
