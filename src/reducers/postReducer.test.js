import postReducer from './postReducer';
import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

describe('post reducer', () => {
  it('have empty postsData as initial state', () => {
    const expectedInitialState = postReducer(undefined, { type: '@@REDUX/INIT'});
    const postsData = expectedInitialState.get('postsData');
    expect(postsData).to.be.empty;
  });
});