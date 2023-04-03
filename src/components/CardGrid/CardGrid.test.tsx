import { renderWithThemeAndRoute } from '../../utils/helpers'
import CardGrid from './'

describe('<CardGrid />', () => {
  it('should load the component with default values', () => {
    const { container } = renderWithThemeAndRoute(<CardGrid>test</CardGrid>)

    expect(container).toMatchSnapshot()
  })
})
