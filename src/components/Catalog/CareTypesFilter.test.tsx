import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { CareTypesFilter } from './CareTypesFilter'

describe('Filter Product tests', () => {
  const filters = ['Уход за телом', 'Уход за ногами', 'Уход за руками']

  it('should change style when click on filter', async () => {
    const user = userEvent.setup()

    render(<CareTypesFilter filters={filters} />, {
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

  it('should change style when prop position = vertical', () => {
    render(<CareTypesFilter filters={filters} position="vertical" />, {
      wrapper: BrowserRouter,
    })

    const ul = screen.getByRole('list')

    expect(ul).toMatchSnapshot()
  })

  it('should change style when prop position = horizontal', () => {
    render(<CareTypesFilter filters={filters} />, {
      wrapper: BrowserRouter,
    })

    const ul = screen.getByRole('list')

    expect(ul).toMatchSnapshot()
  })
})
