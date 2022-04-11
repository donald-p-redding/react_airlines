import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Flight from './Flight'

const route = { airline:24,src:'DFW',dest:'XNA' }
render (<Flight route={route} />)
const row = screen.getByRole('row')

test('Content renders', () => {
  const element = screen.getByText('Dallas Fort Worth International Airport')
  expect(element).toBeDefined()
})

describe('Correct data is parsed', () => {
  test('airline info parsed' ,() => {
    const airline = row.querySelector('.airline')
    expect(airline).toHaveTextContent('American Airlines')
  })

  test('airport info parsed', () => {
    const airports = row.querySelectorAll('.airport')

    expect(airports).toHaveLength(2)
    expect(airports[0]).toHaveTextContent('Dallas Fort Worth International')
    expect(airports[1]).toHaveTextContent('Northwest Arkansas Regional Airport')
  })

})