import { formatDate } from '../../utils'

test('Format date', () => {
  expect(formatDate('2022-08-14T11:15:28Z')).toBe('14/08/2022')
  expect(formatDate('2022-07-14T06:58:43Z')).toBe('14/07/2022')
  expect(formatDate('2022-08-08T14:08:03Z')).toBe('08/08/2022')
})