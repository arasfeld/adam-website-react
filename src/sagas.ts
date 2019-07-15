import { all } from 'redux-saga/effects';
import musicSaga from './containers/MusicPage/saga';

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    musicSaga(),
  ]);
}
