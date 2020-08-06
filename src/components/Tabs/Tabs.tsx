import React from "react";

interface IProps {
  headings: string[];
}
interface IState {
  activeHeading: string;
}
class Tabs extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      activeHeading:
        this.props.headings && this.props.headings.length > 0
          ? this.props.headings[0]
          : "",
    };
  }

  private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : "";
    this.setState({ activeHeading: heading });
  };
  public render() {
    return (
      <ul className="tabs">
        {this.props.headings.map((heading) => (
          <li
            onClick={this.handleTabClick}
            className={heading === this.state.activeHeading ? "active" : ""}
          >
            {heading}
          </li>
        ))}
      </ul>
    );
  }
}

export default Tabs;
