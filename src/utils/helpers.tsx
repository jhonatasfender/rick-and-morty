import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { render, RenderResult } from '@testing-library/react'

import theme from '../styles/theme'

const queryClient = new QueryClient()

export const renderWithThemeAndRoute = (children: ReactNode): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>,
  )
