import React, { Component } from 'react'
import CSS from "csstype";

// Set default types
export interface propTypes {
  className?: string;
  edit?: boolean;
  half?: boolean;
  value?: number;
  count?: number;
  char?: string;
  size?: number;
  inactivecColor?: string;
  activeColor?: string;
  onChange?: (value: number)=>void;
  labels?: string[];
  labelIndex?: number;
}

interface config {
  count?: number;
    size?: number;
    char?: string;
    // default color of inactive star
    inactivecColor?: string;
    // color of an active star
    activeColor?: string;
    half?: boolean;
    edit?: boolean;
}

interface stateTypes {
  idForEachStar?: string;
  value?: number;
  stars?: {active: boolean}[];
  halfStar?: {
    currentPosition?: number;
    hidden?: boolean;
  };
  config: config;
  labelIndex?: number;
}

// Set default styles
const parentStyles: CSS.Properties = {
  overflow: 'hidden',
  // position: 'relative'
  lineHeight: '60px'
}

const defaultStyles: CSS.Properties = {
  position: 'relative',
  // overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left',

  transition: '200ms',
  alignItems: 'center'
}

// set HalfStarStyles
const getHalfStarStyles = (color: string, idForEachStar: string) => {
  return `
    .react-stars-${idForEachStar}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`
}

// Rating component
class Rating extends Component<propTypes, stateTypes> {

  static defaultProps = {
    edit: true,
    half: false,
    value: 0,
    count: 5,
    char: '★',
    size: 30,
    inactivecColor: 'gray',
    activeColor: 'orange',
  
    onChange: () => { },
    labels: [],
    labelIndex: 0
  };

  // constructor
  constructor(props:propTypes) {

    super(props)

    // set defaults

    props = Object.assign({}, props)

    this.state = {
      idForEachStar: (Math.random() + '').replace('.', ''),
      value: props.value || 0,
      stars: [],
      halfStar: {
        currentPosition: Math.floor(props.value!),
        hidden: props.half && props.value! % 1 < 0.5
      },
      config: {
        count: props.count!,
        size: props.size!,
        char: props.char,
        // default color of inactive star
        inactivecColor: props.inactivecColor,
        // color of an active star
        activeColor: props.activeColor,
        half: props.half,
        edit: props.edit,
      },
      labelIndex: props.labelIndex!
    }

  }

  // componentDidMount
  componentDidMount() {
    this.setState({
      stars: this.getStars(this.state.value)
    })
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props: propTypes) {
    this.setState({
      stars: this.getStars(props.value),
      value: props.value,
      halfStar: {
        currentPosition: Math.floor(props.value!),
        hidden: this.state.config.half && props.value! % 1 < 0.5
      },
      config: Object.assign({}, this.state.config, {
        count: props.count,
        size: props.size,
        char: props.char,
        inactivecColor: props.inactivecColor,
        activeColor: props.activeColor,
        half: props.half,
        edit: props.edit,
      })
    })
  }

  // isDecimal(value: number) {
  //   return value % 1 !== 0
  // }

  // functions used to set Stars
  getRate() {
    let stars
    if (this.state.config.half) {
      stars = Math.floor(this.state.value!)
    } else {
      stars = Math.round(this.state.value!)
    }
    return stars
  }

  getStars(activeCount: number | undefined) {
    if (typeof activeCount === 'undefined') {
      activeCount = this.getRate()
    }
    let stars = []
    for (let i = 0; i < this.state.config.count!; i++) {
      stars.push({
        active: i <= activeCount - 1
      })
    }
    return stars
  }

  // mouseOver event handler
  mouseOver(event: any) {
    let { config, halfStar } = this.state
    if (!config.edit) return;
    let index = Number(event.target.getAttribute('data-index'))
    let halfIndex = 0;
    if (config.half) {
      const isAtHalf = this.moreThanHalf(event, config.size)
      halfStar!.hidden = isAtHalf!
      if (isAtHalf) {
        index = index + 1;} else {
          halfIndex = 0.5;
        }
      halfStar!.currentPosition = index
    } else {
      index = index + 1
    }
    this.setState({
      stars: this.getStars(index),
      labelIndex: index + halfIndex
    })
  }

  // function used to handle half-star
  moreThanHalf(event: any, size: any) {
    let { target } = event
    var mouseAt = event.clientX - target.getBoundingClientRect().left
    mouseAt = Math.round(Math.abs(mouseAt))
    return mouseAt > size / 2
  }

  // mouseLeave event handler
  mouseLeave() {
    const { value, halfStar, config } = this.state
    if (!config.edit) return
    if (config.half) {
      halfStar!.hidden = Number.isInteger(value!)
      halfStar!.currentPosition = Math.floor(this.state.value!)
    }
    // let index: number | undefined;
    this.setState({
      stars: this.getStars(Math.floor(this.state.value!)),
      labelIndex: this.props.labelIndex!
    })
  }

  // clicked event handler
  clicked(event: any) {
    const { config, halfStar } = this.state
    if (!config.edit) return
    let index = Number(event.target.getAttribute('data-index'))
    let value
    if (config.half) {
      const isAtHalf = this.moreThanHalf(event, config.size)
      halfStar!.hidden = isAtHalf
      if (isAtHalf) index = index + 1
      value = isAtHalf ? index : index + .5
      halfStar!.currentPosition = index
    } else {
      value = index = index + 1
    }
    this.setState({
      value: value,
      stars: this.getStars(index)
    })
    this.props.onChange!(value)
  }

  // function used to render half-star
  renderHalfStarStyleElement() {
    const { config, idForEachStar } = this.state
    return (
      <style dangerouslySetInnerHTML={{
        __html: getHalfStarStyles(config.activeColor!, idForEachStar!)
      }}></style>
    )
  }

  // function used to render stars
  renderStars(label: string) {
    const { halfStar, stars, idForEachStar, config, labelIndex } = this.state
    const { inactivecColor, activeColor, size, char, half, edit } = config
    return stars!.map((star: { active: any; }, i: number) => {
      let starClass = ''
      let active = star.active;
      if (half && !halfStar!.hidden && halfStar!.currentPosition === i) {
        starClass = `react-stars-${idForEachStar}`
        active = true;
      }
      let style: React.CSSProperties | undefined;
      if(edit){
          style = Object.assign({}, defaultStyles, {
            color: star.active ? activeColor : inactivecColor,
            cursor: 'pointer',
            fontSize: `${size}px`
        })
      } else {
        style = Object.assign({}, defaultStyles, {
          color: star.active ? 'GoldenRod' : 'Dark',
          cursor: 'not-allowed',
          fontSize: `${size}px`
      })
    }

      if( i + 1 === labelIndex){
        style = Object.assign({}, defaultStyles, {
          color: star.active ? activeColor : inactivecColor,
          cursor: 'pointer',
          fontSize: `${size! + 5}px` 
      })
    }
    
      return (
        <span
          className={starClass}
          style={style}
          key={i}
          role='star'
          data-label = {label}
          data-active = {active}
          data-edit={edit}
          data-index={i}
          data-forhalf={char}
          data-halfIndex={labelIndex}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseMove={this.mouseOver.bind(this)}
          onMouseLeave={this.mouseLeave.bind(this)}
          onClick={this.clicked.bind(this)}>
          {char}
        </span>
      )
    })
  }

  // function used to get label
  getLabel() {
    const labels = this.props.labels;
    const count = this.props.count;
    const value = this.state.value;
    const half = this.props.half;
    let labelIndex = this.state.labelIndex;
    let label = '';

    if(half){
      if(labels!.length !== 0 && labels!.length === count! * 2){
        if(value !== 0){
          labelIndex = value! * 2;
          label = labels![labelIndex-1];
        } else {
          label = labels![labelIndex! * 2 - 1];
        }
        
      }
    }else{
      if(labels!.length !== 0 && labels!.length === count){
        if(value !== 0){
          labelIndex = value!;
        }
        label = labels![labelIndex!-1];
      }
    }

    return label;
  }

  render() {

    const {
      className
    } = this.props

    const label = this.getLabel();

    return (
      <div className={className} style={parentStyles}>
        {this.state.config.half ?
          this.renderHalfStarStyleElement() : ''}
        {this.renderStars(label)}
        {label}
      </div>
    )
  }

}

export default Rating;