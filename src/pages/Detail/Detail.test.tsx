import { screen, waitFor } from '@testing-library/react'

import { renderWithThemeAndRoute } from '../../utils/helpers'
import Detail from './'

const mockedUseParams = jest.fn().mockReturnValue({ id: '1' })

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => mockedUseParams,
}))

describe('<Detail />', () => {
  it('should load the component with default values', async () => {
    renderWithThemeAndRoute(<Detail />)

    await waitFor(() => {
      expect(screen.getAllByRole('heading')).toHaveLength(1)
    })
  })
})
