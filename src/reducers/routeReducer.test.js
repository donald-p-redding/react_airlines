import { getCoordinates } from './routeReducer'

describe('getCoordinates', () => {
  const matches = [
    { airline: 24, src: 'DFW', dest:'XNA' },
    { airline: 130, src: 'ROV', dest:'TAS' },
    { airline: 218, src: 'CCJ', dest:'COK' },
  ]
  test('proper matches yield expected data', () => {
    const coordinates = [
      { src: { code:'DFW',name:'Dallas Fort Worth International Airport',lat:32.89680099487305,long:-97.03800201416016 },
        dest: { code:'XNA',name:'Northwest Arkansas Regional Airport',lat:36.281898,long:-94.306801 },
      },
      { src: { code:'ROV',name:'Rostov-on-Don Airport',lat:47.2582015991,long:39.8180999756 },
        dest: { code:'TAS',name:'Tashkent International Airport',lat:41.257900238,long:69.2811965942 },
      },
      { src: { code:'CCJ',name:'Calicut International Airport',lat:11.1367998123,long:75.95529937740001 },
        dest: { code:'COK',name:'Cochin International Airport',lat:10.1520004272,long:76.40190124510002 },
      }
    ]

    const data = getCoordinates(matches)

    expect(data).toEqual(coordinates)
  })
})