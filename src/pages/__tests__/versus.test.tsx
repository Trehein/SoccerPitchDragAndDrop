import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import VersusPage from '../versus';
import { MockResizeObserver } from '../../components/FullPitch/__tests__/FullPitchController.test';

describe('VersusPage', () => {
    window.ResizeObserver = MockResizeObserver;

    it('renders index VersusPage', () => {
        render(<VersusPage />)
        const versusLinkText = screen.getByTestId('VersusPage')
        expect(versusLinkText).toBeInTheDocument()
    }) 
})