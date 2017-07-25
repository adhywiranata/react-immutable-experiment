import postReducer from './postReducer';
import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

describe('post reducer', () => {
  it('posts data initial state is defined', () => {
    const expectedInitialState = postReducer(undefined, { type: '@@REDUX/INIT'});
    const postsData = expectedInitialState.get('postsData');
    expect(postsData).to.not.be.undefined;
  });

  it('isFetching initial state is defined', () => {
    const expectedInitialState = postReducer(undefined, { type: '@@REDUX/INIT'});
    const isFetching = expectedInitialState.get('isFetching');
    expect(isFetching).to.not.be.undefined;
  });

  it('have empty postsData as initial state', () => {
    const expectedInitialState = postReducer(undefined, { type: '@@REDUX/INIT'});
    const postsData = expectedInitialState.get('postsData');
    expect(postsData).to.be.empty;
  });

  it('have true isFetching as initial state', () => {
    const expectedInitialState = postReducer(undefined, { type: '@@REDUX/INIT'});
    const isFetching = expectedInitialState.get('isFetching');
    expect(isFetching).to.be.true;
  });
});