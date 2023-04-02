const theme = {
  colors: {
    backgroundLoadingFirst: '#766df4',
    backgroundLoadingSecond: '#6f6d91',
    backgroundLoadingThird: '#e4e4ed',
    black: '#0000',
    background: '#380E33',
    backgroundHeader: 'rgb(40 37 63 / 75%)',
    backgroundImage: 'rgb(255 0 0 / 37%)',
    white: '#ffffff',
    redOrange: '#F6313C',
    button: 'rgb(157 23 30)',
    hacienda: '#947F18',
  } as const,
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  } as const,
}

export default theme

export type ThemeColors = keyof typeof theme.colors
