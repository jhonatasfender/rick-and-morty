import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Detail from './pages/Detail'

import Home from './pages/Home'
import List from './pages/List'
import Layout from './pages/Layout'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/character"
              element={
                <Layout>
                  <List />
                </Layout>
              }
            />
            <Route
              path="/character/:id"
              element={
                <Layout>
                  <Detail />
                </Layout>
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
