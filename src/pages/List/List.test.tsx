import { act, logRoles, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithThemeAndRoute } from '../../utils/helpers'
import List from './'

describe('<List />', () => {
  it('should display a message when there is no result in the search', async () => {
    const { container } = renderWithThemeAndRoute(<List />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    userEvent.type(screen.getByRole('textbox'), 'sdfgsdfgsdfgs')

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.getByText('There is nothing here')).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })

  it('should load the component with default values', async () => {
    const { container } = renderWithThemeAndRoute(<List />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })

  it('should display required field message', async () => {
    renderWithThemeAndRoute(<List />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.getByText('Este campo é obrigatório')).toBeInTheDocument()
    })
  })

  it('should search what was typed', async () => {
    renderWithThemeAndRoute(<List />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    userEvent.type(screen.getByRole('textbox'), 'rick')

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(screen.getAllByRole('listitem')).toHaveLength(25)
  })

  it('should page correctly according to the triggers', async () => {
    renderWithThemeAndRoute(<List />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    let pagination = screen.getByRole('list', {
      name: 'Pagination Navigation',
    })

    const [prev, , , , , , next] = Array.from(
      pagination.childNodes,
    ) as Element[]

    userEvent.click(prev)

    userEvent.click(next)

    await waitFor(() => {
      expect(
        Array.from(pagination.childNodes).map((el) => el.textContent),
      ).toEqual(['', '1', '2', '3', '4', '...', '42', ''])
    })

    const [, , , , , , clickFortyTwo] = Array.from(
      pagination.childNodes,
    ) as Element[]

    userEvent.click(clickFortyTwo)

    await waitFor(() => {
      expect(
        Array.from(pagination.childNodes).map((el) => el.textContent),
      ).toEqual(['', '1', '...', '40', '41', '42', ''])
    })

    const [, , points] = Array.from(pagination.childNodes) as Element[]

    userEvent.click(points)

    await waitFor(() => {
      expect(
        Array.from(pagination.childNodes).map((el) => el.textContent),
      ).toEqual(['', '1', '...', '40', '41', '42', ''])
    })

    const [, , , , , , clickNextAgain] = Array.from(
      pagination.childNodes,
    ) as Element[]

    userEvent.click(clickNextAgain)

    await waitFor(() => {
      expect(
        Array.from(pagination.childNodes).map((el) => el.textContent),
      ).toEqual(['', '1', '...', '40', '41', '42', ''])
    })

    const [clickPrevisionAgain] = Array.from(pagination.childNodes) as Element[]

    userEvent.click(clickPrevisionAgain)

    await waitFor(() => {
      expect(
        Array.from(pagination.childNodes).map((el) => el.textContent),
      ).toEqual(['', '1', '...', '39', '40', '41', '42', ''])
    })
  })
})
