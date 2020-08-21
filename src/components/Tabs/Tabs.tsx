import React, { Component } from 'react';

type TabContentType = {
  heading: string;
  content: React.ReactNode;
  active?: Boolean;
};
interface IProps {
  tabs: TabContentType[];
  className?: string;
}
interface IState {
  activeIndex: number;
}

class Tabs extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    const { tabs } = props;

    let activeIndex = 0;
    tabs.forEach((tab, index) => {
      const { active } = tab;
      if (active) {
        activeIndex = index;
      }
    });
    this.state = {
      activeIndex,
    };
  }

  public render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <ul className="tabs">
          {tabs.map((tab, index: number) => (
            <li
              key={index}
              onClick={() => {
                this.setState({ activeIndex: index });
              }}
              className={index === activeIndex ? 'active' : undefined}
            >
              {tab.heading}
            </li>
          ))}
        </ul>
        <div>{tabs[activeIndex].content}</div>
      </div>
    );
  }
}

export default Tabs;
