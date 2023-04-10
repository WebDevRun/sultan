import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { FilterProducts } from './FilterProducts'

describe('Filter Product tests', () => {
  const filters = ['Уход за телом', 'Уход за ногами', 'Уход за руками']

  it('should change style when click on filter', async () => {
    const user = userEvent.setup()

    render(<FilterProducts filters={filters} />, {
      wrapper: BrowserRouter,
    })

    const listitems = screen.getAllByRole('listitem')
    const firstCheckbox = listitems[0].firstElementChild

    expect(firstCheckbox).not.toBeChecked()

    if (firstCheckbox) await user.click(firstCheckbox)

    expect(firstCheckbox).toBeChecked()
    expect(firstCheckbox?.nextElementSibling).toHaveStyle({
      'font-weight': 600,
    })
  })

  it('should change style when prop isLeft = true', () => {
    render(<FilterProducts filters={filters} isLeft={true} />, {
      wrapper: BrowserRouter,
    })

    const ul = screen.getByRole('list')

    expect(ul).toMatchSnapshot()
  })

  it('should change style when prop isLeft = false', () => {
    render(<FilterProducts filters={filters} />, {
      wrapper: BrowserRouter,
    })

    const ul = screen.getByRole('list')

    expect(ul).toMatchSnapshot()
  })
})
