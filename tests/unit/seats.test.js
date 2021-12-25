const { setSeatsBooked } = require('../../models/Seat')

describe('seats.setBooked', () => {
  it('Should update to 1 every seat coming with -1 to set them as booked', () => {
    const output = setSeatsBooked([
      { identifier: 'A', row: [0, 0, -1, -1, 0, 0, 0, 0] },
      { identifier: 'B', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'F', row: [-1, -1, 0, 0, 0, 0, 0, 0] }
    ])

    expect(output).toEqual([
      { identifier: 'A', row: [0, 0, 1, 1, 0, 0, 0, 0] },
      { identifier: 'B', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'F', row: [1, 1, 0, 0, 0, 0, 0, 0] }
    ])
  })
})
