import classNames from "./classNames";


describe('helpers.classNames', () => {

  // 'foo', 'bar', 'baz' => 'foo bar baz'
  test('multiple params', () => {
    const result = classNames(' foo ', 0, 1, false, true, ' bar', 'baz ');
    expect(result).toBe('foo 1 true bar baz');
  });

  // { foo:true, bar:false, baz: true } => 'foo baz'
  test('object as param', () => {
    expect(classNames({ foo: true, bar: false, baz: true }))
      .toBe('foo baz');
  });

  // { foo:true }, { bar:false }, null, { '--foobar':'hello' } => 'foo --foobar'
  test('multi object as param', () => {
    const result = classNames({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
    expect(result).toBe('foo --foobar');
  });

  test('array as param', () => {
    expect(classNames(['foo', 0, false, 'bar']))
      .toBe('foo bar');
  });

  test('multi array as param', () => {
    expect(classNames(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]))
      .toBe('foo bar baz hello there');
  });

  test('random param', () => {
    expect(classNames('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya'))
      .toBe('foo bar hello world cya');
  });

});