import showHealth from '../basic';

test.each([
  ['above 50', {name: '', health: 75}, 'healthy'],
  ['equal to 50', {name: '', health: 50}, 'wounded'],
  ['below 50 and above 15', {name: '', health: 38}, 'wounded'],
  ['equal to 15', {name: '', health: 15}, 'wounded'],
  ['below 15', {name: '', health: 11}, 'critical'],
])(
  ('should show health status'),
  (level, amount, expected) => {
    const result = showHealth(amount);

    expect(result).toBe(expected);
  })
