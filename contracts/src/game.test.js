/* global Deno, globalThis */

import { assert } from "asserts";
import { handle } from "./game.js";

const { test } = Deno;

// global contract functions
globalThis.ContractError = Error;
globalThis.ContractAssert = (expr, msg) => expr || new Error(msg);
globalThis.SmartWeave = {
  contracts: {
    readContractState(id) {
      if (id === "zIT-ic0CKaGNg-ZblqhW4G5rru0I3jSknOvLdmz-x-Y") {
        return Promise.resolve({
          balances: {
            lxZ38bR9ABqIDINHuHlJI7o5aYQeJeSlYOz3UWBoMao: 1
          }
        });
      }
      return Promise.reject("Not Found!");
    }
  }
};
test("register should be successful", async () => {
  const result = await handle(getState(), {
    caller: "lxZ38bR9ABqIDINHuHlJI7o5aYQeJeSlYOz3UWBoMao",
    input: {
      function: "register",
      code: "3",
      token: "zIT-ic0CKaGNg-ZblqhW4G5rru0I3jSknOvLdmz-x-Y"
    }
  });
  assert(result.state.players["3"].code === "3");
});

test("register should be unsuccessful", async () => {
  const result = await handle(getState(), {
    caller: "0gf7KpDmLMfCq8oqVeQqqJChzRnx0ZOtWsvHfVYKACo",
    input: {
      function: "register",
      code: "4",
      token: "zIT-ic0CKaGNg-ZblqhW4G5rru0I3jSknOvLdmz-x-Y"
    }
  });
  assert(!result.state.players["4"]);
});

test("evolve", async () => {
  const result = await handle(getState(), {
    caller: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    input: {
      function: "evolve",
      value: "0gf7KpDmLMfCq8oqVeQqqJChzRnx0ZOtWsvHfVYKACo"
    }
  });
  assert(result.state.evolve === "0gf7KpDmLMfCq8oqVeQqqJChzRnx0ZOtWsvHfVYKACo");
});

test("slash", async () => {
  const result = await handle(getState(), {
    caller: "K92n-x2kHiRIBmS0yRGz5ii3OEXFw58__742Qu0DTgA",
    input: {
      function: "slash",
      code: "1"
    }
  });

  assert(!result.state.players["1"]);
});

test("slash is unsuccessful", async () => {
  const result = await handle(getState(), {
    caller: "0gf7KpDmLMfCq8oqVeQqqJChzRnx0ZOtWsvHfVYKACo",
    input: {
      function: "slash",
      code: "1"
    }
  });

  assert(result.state.players["1"]);
});

test("setAdmin", async () => {
  const result = await handle(getState(), {
    caller: "K92n-x2kHiRIBmS0yRGz5ii3OEXFw58__742Qu0DTgA",
    input: {
      function: "setAdmin",
      address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
      token: "XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc"
    }
  });

  assert(result.state.players["1"]);
});

test("reset", async () => {
  const result = await handle(getState(), {
    caller: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    input: {
      function: "reset",
      name: "SwagFest",
      description: "Lets get started!"
    }
  });

  assert(Object.keys(result.state.players).length === 0);
});

function getState() {
  return {
    players: {
      1: {
        address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
        token: "XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc",
        code: "1",
        admin: false
      },
      2: {
        address: "K92n-x2kHiRIBmS0yRGz5ii3OEXFw58__742Qu0DTgA",
        token: "TQApWCL4xuNS1Gl8Nvi06DC5jOEWTgqnZPkBOTMHB2w",
        code: "2",
        admin: true
      }
    },
    name: "testConf",
    description: "test swag game",
    creator: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    canEvolve: true
  };
}
