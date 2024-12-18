/**
 * Unit tests for the action"s entrypoint, src/index.ts
 */

import * as main from "../src/main"
import axios from "axios";

// Mock the action"s entrypoint
const runMock = jest.spyOn(main, "run")
  .mockImplementation();
jest.mock("axios");

describe("index", () => {
  it("calls run when imported", () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: "mocked post response" });

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("../src/index");

    expect(runMock)
      .toHaveBeenCalled();
  })
})
