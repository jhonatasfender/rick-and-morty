import { renderWithThemeAndRoute } from '../../utils/helpers'
import Home from './'

describe('<Home />', () => {
  it('should load the component with default values', async () => {
    const { container } = renderWithThemeAndRoute(<Home />)

    expect(container).toMatchSnapshot()
  })
})
