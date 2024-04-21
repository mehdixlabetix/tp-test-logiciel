import { describe, expect, expectTypeOf, it } from "vitest";
import { assert } from "vitest";
import { fetchRandomUser } from "../src/fetchUser";

describe("fetchRandomUser", () => {
  it("should fetch a random user", async () => {
    const user = await fetchRandomUser();
    const expectedProperties = [
      "gender",
      "name",
      "location",
      "email",
      "login",
      "dob",
      "registered",
      "phone",
      "cell",
      "id",
      "picture",
      "nat",
    ];
    expect(user).toBeDefined();
    expectTypeOf(user).toBeObject();
    // expect(user).toEqual(
    //   expect.objectContaining({
    //     // Enumerate all expected properties with optional deep equality check
    //     ...expectedProperties.reduce(
    //       (acc, prop) => ({ ...acc, [prop]: expect.any() }),
    //       {} // Initial empty object
    //     ),
    //   })
    // );
    for (const property of expectedProperties) {
      assert(
        property in user,
        `User object should contain property: ${property}`
      );
    }
  });
});
