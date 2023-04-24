import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '../NavBar'

describe('NavBar', () => {

    it('renders the NavBar', () => {
        render(<NavBar />)

        const labelText = screen.getByText('Versus')

        expect(labelText).toBeInTheDocument()
    })
})