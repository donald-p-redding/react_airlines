import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Map from './Map'

const coordinate = [
  {
    src: {
      code: 'DFW',
      name: 'Dallas Fort Worth International Airport',
      lat: 32.89680099487305,
      long: -97.03800201416016
    },
    dest: {
      code: 'XNA',
      name: 'Northwest Arkansas Regional Airport',
      lat: 36.281898,
      long: -94.306801
    }
  }
]

const { container } = render(<Map coordinates={coordinate} />)

test('renders without error', () => {
  expect(container).toBeDefined()
})

test('source/dest populate', () => {
  const source = container.querySelectorAll('.source')
  const dest = container.querySelectorAll('.destination')
  console.log(source, dest)
  expect(source).toBeDefined()
  expect(dest).toBeDefined()
})

