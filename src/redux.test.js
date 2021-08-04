import expect from 'expect';
import reducer from './_reducers';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});
