import {parseArray} from '../parse-array'

const data =  [ 1.5, 6, 12.1, 13, 19.75, 12.1, 19.7, 6, 7.45, 1.5 ];
const parsedData = parseArray(data, 6, 12.0);

test('5 elements returned', () => {
    expect(5).toBe(parsedData.length);
  });

  test('Contains 1.5', () => {
    expect(parsedData).toContain(1.5);
  });

  test('Contains 12.1', () => {
    expect(parsedData).toContain(12.1);
  });

  test('Contains 13', () => {
    expect(parsedData).toContain(13);
  });

  test('Contains 19.75', () => {
    expect(parsedData).toContain(19.75);
  });

  test('Contains 19.7', () => {
    expect(parsedData).toContain(19.7);
  });