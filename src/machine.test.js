import { expect, test } from "vitest";
import { interpret } from "robot3";
import createMachine from "./machine.js";

const machine = createMachine(
  {
    stamp: () => Promise.resolve({ ok: true })
  },
  {
    connect: () => Promise.resolve(true)
  }
);

test("ok", async () => {
  const service = interpret(machine, (x) => null, {});
  expect(service.machine.current).toBe("loading");
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("context", service.context);
  expect(service.machine.current).toBe("leaderboard");
  /*
  await service.send({type: 'show', id: '1'})
  await new Promise((resolve) => setTimeout(resolve, 500))
  expect(service.machine.current).toBe('player')
  */
});
