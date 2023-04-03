import { renderWithThemeAndRoute } from '../../utils/helpers'
import Pagination from '.'

describe('<Pagination />', () => {
  it('should load the component with default values', () => {
    const { container } = renderWithThemeAndRoute(
      <Pagination
        page={1}
        setPage={jest.fn()}
        renge={['1', '2', '3', '4', '5']}
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
