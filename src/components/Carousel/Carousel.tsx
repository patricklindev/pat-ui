import React, { useState } from 'react'
import { JsxElement } from 'typescript'

export interface ICarousel {
	children: JSX.Element | JSX.Element[]
	style?: object
}

const Carousel: React.FunctionComponent<ICarousel> = (props: ICarousel) => {
	const [counter, setCounter] = useState(0)

	const { children } = props
	const [length, setLength] = useState(Array.isArray(children) ? children.length : 1)
	const [prevOrNextIsClicked, setPrevOrNextIsClicked] = useState('')

	let classNameList: string[] = []
	console.log('c', children)

	const classNames = classNameList.join('')

	const handleClick = (event: React.MouseEvent) => {
		//console.log(event.currentTarget.id)
		setCounter(parseInt(event.currentTarget.id))
		setPrevOrNextIsClicked('')
	}
	const handleClickPrev = () => {
		setPrevOrNextIsClicked('prevIsClicked')
		if (counter > 0) {
			setCounter(counter - 1)
		} else {
			setCounter(length - 1)
		}
	}
	const handleClickNext = () => {
		setPrevOrNextIsClicked('nextIsClicked')
		if (counter < length - 1) {
			setCounter(counter + 1)
		} else {
			setCounter(0)
		}
	}

	//deal with children

	return children && Array.isArray(children) ? (
		<div
			className='Carousel'
			style={{
				...props.style,
			}}
		>
			<div className='Carousel__img-wrapper'>
				{children.map((item, index) => {
					if (index === counter - 1 || index === counter - 1 + length) {
						return React.cloneElement(item, {
							style: { display: 'block' },
							id: (function () {
								if (prevOrNextIsClicked === '') return 'Carousel__img__left'
								//trigger when next is clicked
								else if (prevOrNextIsClicked === 'nextIsClicked') return 'Carousel__img__center-to-left'
								//when prev is clicked
								else if (prevOrNextIsClicked === 'prevIsClicked') return 'Carousel__img__mostleft-to-left'
							})(),
						})
					}
					if (index === counter) {
						return React.cloneElement(item, {
							style: { display: 'block' },
							id: (function () {
								if (prevOrNextIsClicked === '') return 'Carousel__img__center'
								//trigger when prev is clicked
								else if (prevOrNextIsClicked === 'prevIsClicked') return 'Carousel__img__left-to-center'
								//trigger when next is clicked
								else if (prevOrNextIsClicked === 'nextIsClicked') return 'Carousel__img__right-to-center'
							})(),
						})
					}
					if (index === counter + 1 || index === counter + 1 - length) {
						return React.cloneElement(item, {
							style: { display: 'block' },
							id: (function () {
								if (prevOrNextIsClicked === '') return 'Carousel__img__right'
								//trigger when prev is click
								else if (prevOrNextIsClicked === 'prevIsClicked') return 'Carousel__img__center-to-right'
								//trigger when next is click
								else if (prevOrNextIsClicked === 'nextIsClicked') return 'Carousel__img__mostright-to-right'
							})(),
						})
					}
				})}
			</div>

			<span className='Carousel__prev' onClick={handleClickPrev}>
				&#10094;
			</span>
			<span className='Carousel__next' onClick={handleClickNext}>
				&#10095;
			</span>
			<div className='Carousel__center Carousel__dots'>
				{children.map((src, index) => (
					<span id={index.toString()} className={index === counter ? 'Carousel__dot Carousel__dot-active' : 'Carousel__dot'} onClick={handleClick}></span>
				))}
			</div>
		</div>
	) : null
}
export default Carousel
