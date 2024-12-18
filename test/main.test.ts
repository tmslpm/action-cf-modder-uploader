/**
 * Unit tests for the action"s main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from "@actions/core";
import * as main from "../src/main";
import axios from "axios";

// Mock the action"s main function
const runMock = jest.spyOn(main, "run");
jest.mock("axios");

// Mock the GitHub Actions core library
let debugMock: jest.SpiedFunction<typeof core.debug>;
let errorMock: jest.SpiedFunction<typeof core.error>;
let getInputMock: jest.SpiedFunction<typeof core.getInput>;
let setFailedMock: jest.SpiedFunction<typeof core.setFailed>;
let setOutputMock: jest.SpiedFunction<typeof core.setOutput>;

describe("action", () => {

  beforeEach(() => {
    jest.clearAllMocks();

    debugMock = jest.spyOn(core, "debug")
      .mockImplementation();

    errorMock = jest.spyOn(core, "error")
      .mockImplementation();

    getInputMock = jest.spyOn(core, "getInput")
      .mockImplementation();

    setFailedMock = jest.spyOn(core, "setFailed")
      .mockImplementation();

    setOutputMock = jest.spyOn(core, "setOutput")
      .mockImplementation();

    (axios.post as jest.Mock).mockResolvedValue({ data: "mocked post response" });
  })

  it("sets the time output", async () => {
    // Set the action"s inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => name === "" ? "500" : "")

    await main.run()
    expect(runMock).toHaveReturned()

    // Verify that all of the core library functions were called correctly
    // expect(debugMock).toHaveBeenNthCalledWith(1, "Waiting 500  ...");

    expect(errorMock)
      .not.toHaveBeenCalled();
  })

  it("sets a failed status", async () => {
    // Set the action"s inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => name === "" ? "this is not a number" : "")
    await main.run();

    expect(runMock)
      .toHaveReturned()

    // TODO: implement test
    // Verify that all of the core library functions were called correctly
    // expect(setFailedMock).toHaveBeenNthCalledWith(1, " not a number");

    expect(errorMock)
      .not.toHaveBeenCalled();
  })
})
