import React from 'react';

interface IProps {
  headings: string[];
}
interface IState {
  activeHeading: string;
  description: string[];
  finalDescription: string;
}

class Tabs extends React.Component<IProps, IState> {
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

  handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : '';

    if (li.textContent === 'Tab1') {
      this.setState({ finalDescription: this.state.description[0] });
    } else this.setState({ finalDescription: this.state.description[1] });
    this.setState({ activeHeading: heading });
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
