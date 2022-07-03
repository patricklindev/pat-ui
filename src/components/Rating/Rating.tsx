import React, { Component } from 'react';
import CSS from 'csstype';

interface propTypes {
  disable: boolean;
  ratingValue: number;
  totalNumber: number
  size: number;
}

interface stateTypes {
  ratingValue: number;
  stars: {active: boolean} [];
  config: {
    disable: boolean;
    totalNumber: number;
    size: number;
  }
}

const parentStyles: CSS.Properties = {
  position: 'relative',
  overflow: 'hidden'
}

const defaultStyles: CSS.Properties = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left',
}

class Rating extends Component<propTypes, stateTypes> {
  static defaultProps = {
    disable: false,
    ratingValue: 0,
    totalNumber: 5,
    size: 30
  };

  constructor(props: propTypes) {
    super(props);

    props = Object.assign({}, this.props);

    this.state = {
      ratingValue: props.ratingValue,
      stars: [],
      config: {
        disable: props.disable,
        totalNumber: props.totalNumber,
        size: props.size
      }
    }
  }

  componentDidMount() {
    this.setState({
      stars: this.getStars(this.state.ratingValue)
    })
  }

  componentWillReceiveProps(props: propTypes) {
    this.setState({
      ratingValue: props.ratingValue,
      stars: this.getStars(props.ratingValue),

      config: Object.assign({}, this.state.config, {
        disable: props.disable,
        totalNumber: props.totalNumber,
        size: props.size
      })
    })
  }

  getActiveStars() {
    let activeStars = Math.floor(this.state.ratingValue);
    return activeStars;
  }

  getStars(activeStars?: number) {
    if (typeof activeStars === 'undefined') {
      activeStars = this.getActiveStars();
    }

    let stars = [];
    for (let i = 0; i < this.state.config.totalNumber; i++) {
      stars.push({
        active: i <= activeStars - 1
      })
    }
    return stars;
  }

  mouseOver(event: any) {
    const config = this.state.config;

    if (config.disable) return;
    
    let index = Number(event.target.getAttribute('star-index'));
    index++;

    this.setState({
      stars: this.getStars(index)
    })
  }

  mouseLeave() {
    const config = this.state.config;

    if (config.disable) return;

    let index;

    this.setState({
      stars: this.getStars(index)
    })
  }

  clicked(event: any) {
    const config = this.state.config;
    
    if (config.disable) return;

    let index = Number(event.target.getAttribute('star-index'))
    let ratingValue = index + 1;

    this.setState({
      ratingValue: ratingValue,
      stars: this.getStars(index)
    })
  }

  renderStars() {
    const { stars, config } = this.state;
    const { disable, size } = config;

    return stars.map((star: {active: boolean}, i: number) => {
      const style = Object.assign({}, defaultStyles, {
        color: star.active ? '#ffd700' : 'gray',
        cursor: disable ? 'default' : 'pointer',
        fontSize: `${size}px`
      })
      
      return (
        <span 
        style={style}
        star-index={i}
        onMouseOver={this.mouseOver.bind(this)}
        onMouseMove={this.mouseOver.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
        onClick={this.clicked.bind(this)}>
          ★
        </span>
      )
    })
  }

  render() {
    return <div style={parentStyles}>{this.renderStars()}</div>
  }
}

export default Rating;