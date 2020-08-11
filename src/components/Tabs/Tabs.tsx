import React, { Component, MouseEvent } from 'react';

export type tabType = 'basic';

interface IProps {
  headings: string[];
  tabType?: tabType;
  className?: string;
  content: string[];
}
interface IState {
  activeHeading: string;
  content: string;
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
      content: this.props.content[0],
    };
  }

  handleTabClick = (e: MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : '';
    this.setState({ activeHeading: heading });

    if (li.textContent === 'Tab1') {
      this.setState({ content: this.props.content[0] });
    } else this.setState({ content: this.props.content[1] });
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
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default Tabs;
