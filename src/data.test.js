import { getAirportByCode, getAirlineById } from './data'

describe('getAirportByCode', () => {
  test('a valid code returns expected obj', () => {
    const airport = { code:'YEG', name:'Edmonton International Airport',lat:53.309700012200004,long:-113.580001831 }
    const data = getAirportByCode('YEG')

    expect(data).toEqual(airport)
  })

  test('an invalid code returns undefined', () => {
    const airport = { code:'YEG',name:'Edmonton International Airport',lat:53.309700012200004,long:-113.580001831 }
    const badData = getAirportByCode('BAD_DATA')

    expect(badData).not.toEqual(airport)
    expect(badData).toBe(undefined)
  })
})

describe('getAirlineById', () => {
  test('a valid id returns expected obj', () => {
    const airline = { id:24,name:'American Airlines' }
    const data = getAirlineById(24)

    expect(data).toEqual(airline)
  })

  test('an invalid id returns undefined', () => {
    const airline = { id:24,name:'American Airlines' }
    const badData = getAirlineById(1000)

    expect(badData).not.toEqual(airline)
    expect(badData).toBe(undefined)
  })
})