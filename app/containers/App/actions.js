import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loading: ['enable'],
});

export default Creators;
