import React, { Component, MouseEvent } from 'react';

export type tabType = 'basic';

interface IProps {
  headings: string[];
  tabType?: tabType;
  className?: string;
}
interface IState {
  activeHeading: string;
  description: string[];
  finalDescription: string;
}

class Tabs extends Component<IProps, IState> {
  static defaultProps = {
    tabType: 'basic',
  };
  public constructor(props: IProps) {
    super(props);

    this.state = {
      activeHeading:
        this.props.headings && this.props.headings.length > 0
          ? this.props.headings[0]
          : '',
      description: ['This is Tab1', 'This is Tab2'],
      finalDescription: 'This is Tab1',
    };
  }

  handleTabClick = (e: MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : '';
    this.setState({ activeHeading: heading });
    if (li.textContent === 'Tab1') {
      this.setState({ finalDescription: this.state.description[0] });
    } else this.setState({ finalDescription: this.state.description[1] });
  };

  public render() {
    return (
      <div>
        <ul className='tabs'>
          {this.props.headings.map((heading, index: number) => (
            <li
              key={index}
              onClick={this.handleTabClick}
              className={heading === this.state.activeHeading ? 'active' : ''}
            >
              {heading}
            </li>
          ))}
        </ul>
        <div>{this.state.finalDescription}</div>
      </div>
    );
  }
}

export default Tabs;
