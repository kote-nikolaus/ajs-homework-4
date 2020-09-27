import sortByHealth from '../user';

test('should sort characters by health status 1', () => {
  const input = [
    { name: '', health: 16 },
    { name: '', health: 100 },
    { name: '', health: 83 },
    { name: '', health: 51 },
    { name: '', health: 82 },
  ];

  const expected = [
    { name: '', health: 100 },
    { name: '', health: 83 },
    { name: '', health: 82 },
    { name: '', health: 51 },
    { name: '', health: 16 },
  ];

  sortByHealth(input);

  const received = input;

  expect(received).toEqual(expected);
});

test('should sort characters by health status 2', () => {
  const input = [
    { name: '', health: 89 },
    { name: '', health: 65 },
    { name: '', health: 30 },
  ];

  const expected = [
    { name: '', health: 89 },
    { name: '', health: 65 },
    { name: '', health: 30 },
  ];

  sortByHealth(input);

  const received = input;

  expect(received).toEqual(expected);
});

test('should sort characters by health status 3', () => {
  const input = [
    { name: '', health: 17 },
  ];

  const expected = [
    { name: '', health: 17 },
  ];

  sortByHealth(input);

  const received = input;

  expect(received).toEqual(expected);
});

test('should sort characters by health status 4', () => {
  const input = [];

  const expected = [];

  sortByHealth(input);

  const received = input;

  expect(received).toEqual(expected);
});
