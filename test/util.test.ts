import { formatTime } from '../src/utils/util';

test('formatTime', () => {
  expect(formatTime(new Date('2021-01-27T01:48:00.000Z'))).toBe(
    '2021/01/27 09:48:00'
  );
});
