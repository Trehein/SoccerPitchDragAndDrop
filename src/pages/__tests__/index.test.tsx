import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Root from '..';
import { MockResizeObserver } from '../../components/FullPitch/__tests__/FullPitchController.test';

describe('Root', () => {
    window.ResizeObserver = MockResizeObserver;
    it('renders index home', () => {
    render(<Root />)

    const versusLinkText = screen.getByText('Versus')
    const aboutLinkTest = screen.getByText('About')

    expect(versusLinkText).toBeInTheDocument()
    expect(aboutLinkTest).toBeInTheDocument()
  })
})