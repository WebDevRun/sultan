import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'

import { Address } from './Address'

describe('Address test', () => {
  it('should has address correction text', () => {
    render(<Address />)
    const textElement = screen.getByText('(Рынок Восточный)')
    expect(textElement).toBeDefined()
  })
})
