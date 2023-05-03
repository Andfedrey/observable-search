import { ofType } from 'redux-observable';
import { catchError, debounceTime, exhaustMap, filter, map, switchMap } from 'rxjs/operators';
import { from, interval, of, timer } from 'rxjs';
import { skillsUpdate } from './asyncAction';

const skillsUpdateEpic = (action$) =>
  action$.pipe(
    ofType(skillsUpdate.pending.type),
    map(o => o.payload?.value.trim()),
    filter(o => o !== ''),
    debounceTime(1000),
    switchMap(o =>
      from(fetch(`http://localhost:7070/api/search?q=${o}`)
      .then(res => res.json()))
      .pipe(
        map(el => skillsUpdate.fulfilled(el)),
        catchError((error) => of(skillsUpdate.rejected(error)))
      )
    )
  )

export default skillsUpdateEpic;