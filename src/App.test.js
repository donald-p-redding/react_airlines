import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'


const { container } =
render(
  <Provider store={store}>
    <App />
  </Provider>
)

describe('table', () => {
  const table = screen.getByRole('table')

  test('table rendered', () => {
    expect(table).toBeDefined()
  })


  test('table only has only 25 init entries', () => {
    const routes = table.querySelectorAll('.route')
    expect(routes).toHaveLength(25)
  })
})

describe('pagination', () => {
  const pagination = container.querySelector('.pagination')

  test('pagination was rendered', () => {
    expect(pagination).toBeDefined()
  })

  test('pagination status correct on init render', () => {
    expect(pagination).toHaveTextContent('Showing 1 - 25 out of 850 routes.')
  })

  test('previous button is disabled', () => {
    const prevButton = pagination.querySelector('.prev')
    expect(prevButton).toBeDefined()
    expect(prevButton).toBeDisabled()
  })

  test('next button is enabled', () => {
    const nextButton = pagination.querySelector('.next')
    expect(nextButton).toBeEnabled()
  })
})



