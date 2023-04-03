import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithThemeAndRoute } from '../../utils/helpers'
import Card from './'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

const mock = {
  id: 14,
  name: 'Alien Morty',
  status: 'unknown',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: { name: 'unknown', url: '' },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/10'],
  url: 'https://rickandmortyapi.com/api/character/14',
  created: '2017-11-04T20:51:31.373Z',
}

describe('<Card />', () => {
  it('should load the component with default values', () => {
    const { container } = renderWithThemeAndRoute(<Card result={mock} />)

    expect(container).toMatchSnapshot()
  })

  it('should load the type attribute', () => {
    renderWithThemeAndRoute(<Card result={{ ...mock, type: 'unique-type' }} />)

    expect(screen.getByText('unique-type')).toBeInTheDocument()
  })

  it('should redirect when click on card', () => {
    renderWithThemeAndRoute(<Card result={mock} />)

    userEvent.click(screen.getByRole('listitem'))

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/character/14')
  })
})
