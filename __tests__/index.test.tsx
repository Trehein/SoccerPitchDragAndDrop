// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<div>Test</div>)

    const heading = screen.getByText('Test')

    expect(heading).toBeInTheDocument()
  })
})