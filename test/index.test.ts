import * as main from "../src/main";
import axios from "axios";

const runMock = jest.spyOn(main, "run").mockImplementation();
jest.mock("axios");
describe("index", () => {
  it("calls run when imported", () => {

    (axios.post as jest.Mock)
      .mockResolvedValue({ data: "mocked post response" });

    require("../src/index");

    expect(runMock)
      .toHaveBeenCalled();
  })
})
