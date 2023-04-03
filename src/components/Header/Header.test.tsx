import { renderWithThemeAndRoute } from '../../utils/helpers'
import Header from './'

describe('<Header />', () => {
  it('should load the component with default values', () => {
    const { container } = renderWithThemeAndRoute(<Header />)

    expect(container).toMatchSnapshot()
  })
})
