import { interval } from "rxjs";
import { map, scan, take } from "rxjs/operators";

const observable = interval(1000).pipe(
  map((x) => x * 2),
  map((x) => x - 1),
  scan((acc, x) => acc + x, 0),
  take(4)
);
export default observable;
