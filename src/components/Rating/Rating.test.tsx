import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import Rating, {IRatingProps} from './Rating'



describe('Rating', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Rating rtKey = '1'/>);
        expect(asFragment()).toMatchSnapshot();
      });
    it('should render default stars', () => {
        const wrapper = render(<Rating rtKey = '1' />)
        const el = wrapper.container.firstChild
        expect(el).toHaveClass('rt rt-star');
    })

    it('should render correct shape and size based on different props', ()=> {
        const rtHeartSmallProps: IRatingProps = {
            rtKey: '1',
            rtShape: 'heart',
            rtSize: 'sm'
        }

        const rtHeartSmallWrapper = render(<Rating {...rtHeartSmallProps}/>)
        const heartSmallel = rtHeartSmallWrapper.container.firstChild
        expect(heartSmallel).toHaveClass('rt rt-sm rt-heart');

        const rtWinkLargeProps: IRatingProps = {
            rtKey: '2',
            rtShape: 'smile-wink',
            rtSize: 'lg'
        }

        const rtWinkLargeWrapper = render(<Rating {...rtWinkLargeProps}/>)
        const winkLargeel = rtWinkLargeWrapper.container.firstChild
        expect(winkLargeel).toHaveClass('rt rt-lg rt-smile-wink');
    })

    it('should change correct number of icons color when clicked', ()=>{
        const wrapper = render(<Rating rtKey = '1'/>)
        const iconcontainer = wrapper.container.firstChild
        const firstIcon = iconcontainer?.firstChild
        const secondIcon = iconcontainer?.childNodes[1]
        const thirdIcon = iconcontainer?.childNodes[2]
        const fourthIcon = iconcontainer?.childNodes[3]
        const lastIcon = iconcontainer?.lastChild
        fireEvent.click(firstIcon as Element)
        iconcontainer?.childNodes.forEach(node => {
            expect(node).toHaveClass('rt-active')
        })
        fireEvent.click(thirdIcon as Element)
        expect(fourthIcon).toHaveClass('rt-active')
        expect(thirdIcon).toHaveClass('rt-active')
        expect(lastIcon).toHaveClass('rt-active')
        expect(firstIcon).not.toHaveClass('rt-active')
        expect(secondIcon).not.toHaveClass('rt-active')


    })

    it('should fire correct effect when clicked', ()=>{
        const rtBounceProps: IRatingProps = {
            rtKey: '1',
            rtAnimation: 'bounce',
        }  
        const rtBounceWrapper = render(<Rating {...rtBounceProps}/>)      
        const iconcontainer = rtBounceWrapper.container.firstChild
        const firstIcon = iconcontainer?.firstChild

        fireEvent.click(firstIcon as Element)

        expect(firstIcon).toHaveClass('rt-bounce')



    })
})