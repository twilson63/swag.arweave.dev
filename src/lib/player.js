import crocks from "crocks";
import { compose, head, path, pluck, prop } from "ramda";

const { Async, ReaderT } = crocks;
const { of, ask, lift } = ReaderT(Async);

export function player(id) {
  return of(id)
    .map(buildQuery)
    .chain((id) =>
      ask(({ query, get }) =>
        Async.fromPromise(query)({ query })
          .map(compose(
            pluck("node"),
            path(["data", "transactions", "edges"]),
          ))
          .map(head)
          .map(prop("id"))
          .chain((tx) => Async.fromPromise(get)(tx))
      )
    ).chain(lift);
}

function buildQuery(id) {
  return `query {
transactions(tags: [
  {name: "SWAG_CODE", values: ["${id}"]},
  {name: "Protocol-Name", values: ["Account-0.3"]}
]) {
  edges {
    node {
      id
    }
  }
}
  }`;
}
