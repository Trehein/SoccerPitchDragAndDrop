import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FullPitchController from '../FullPitchController'

export class MockResizeObserver {
    observe() {
        // do nothing
    }
    unobserve() {
        // do nothing
    }
    disconnect() {
        // do nothing
    }
}


describe('FullPitchController', () => {

    window.ResizeObserver = MockResizeObserver;

    it('renders the FullPitchController', () => {
        render(<div><FullPitchController /></div>)

        const labelText = screen.getByLabelText('FullPitchController')

        expect(labelText).toBeInTheDocument()
    })
})