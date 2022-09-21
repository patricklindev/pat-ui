import Slider from "./Slider";
import {render} from "@testing-library/react";
import React from "react";

describe('Slider', () => {
    it("should match snapshot", () => {
        const { asFragment } = render(<Slider />)
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render default slider", () => {
        const wrapper = render(<Slider data-testid='test'/>)
        const element = wrapper.getByTestId('test')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('slider_range range_default-track range_default-thumb')
    });

    it("should render correct slider based on size props", () => {
            // large slider
            const largeSlider = render(<Slider data-testid='large-slider' sliderSize='lg'/>).queryByTestId('large-slider')
            expect(largeSlider).toBeInTheDocument();
            expect(largeSlider).toHaveClass('range_lg-track range_lg-thumb')
            // small slider
            const smallSlider = render(<Slider data-testid='small-slider' sliderSize='sm'/>).queryByTestId('small-slider')
            expect(smallSlider).toBeInTheDocument();
            expect(smallSlider).toHaveClass('range_sm-track range_sm-thumb')
    });

    it("should render correct slider based on color props", () => {
        // primary color slider
        const primaryColorSlider = render(<Slider data-testid='primary-color'/>).queryByTestId('primary-color');
        expect(primaryColorSlider).toBeInTheDocument();
        expect(primaryColorSlider).toHaveClass('primary-color_track')

        // secondary color slider
        const secondaryColorSlider = render(<Slider data-testid='secondary-color' color='secondary' />).queryByTestId('secondary-color');
        expect(secondaryColorSlider).toBeInTheDocument();
        expect(secondaryColorSlider).toHaveClass('secondary-color_track')
    });

    it("should render disabled slider with disabled color by passing disable props", () => {
        // disabled color + disable
        const disabledColorSlider = render(<Slider data-testid='disabled-color' disable={true} />).queryByTestId('disabled-color');
        expect(disabledColorSlider).toBeInTheDocument();
        expect(disabledColorSlider).toHaveClass('not-allowed')
        expect(disabledColorSlider).toBeDisabled()
    })
})
