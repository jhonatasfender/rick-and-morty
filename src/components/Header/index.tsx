import { useLocation } from 'react-router-dom'
import * as S from './styled'

export default function Header(): JSX.Element {
  const { pathname } = useLocation()

  return (
    <S.Wrapper fixed={pathname === '/'}>
      <S.Menu>
        <S.ItemMeu active={pathname === '/'}>
          <S.LinkWrapper to="/">Home</S.LinkWrapper>
        </S.ItemMeu>
        <S.ItemMeu active={pathname.includes('/character')}>
          <S.LinkWrapper to="/character">Character</S.LinkWrapper>
        </S.ItemMeu>
      </S.Menu>
    </S.Wrapper>
  )
}
