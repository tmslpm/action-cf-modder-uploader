import { createReadStream } from "fs";
import { ReadStream } from "fs";
import { LocalSourceProvider } from "../../../src/providers/sources/providers/local-source-provider.class";

jest.mock("fs", () => ({
  createReadStream: jest.fn()
}));

describe("getProvider", () => {

  let provider: LocalSourceProvider;

  beforeEach(() => {
    provider = new LocalSourceProvider();
  });

  it("should be an instance of SourceProvider", () => {
    expect(provider).toBeInstanceOf(LocalSourceProvider);
  });

  it("should call createReadStream when fetch is called", () => {
    const mockReadStream = {} as ReadStream;
    (createReadStream as jest.Mock).mockReturnValue(mockReadStream);

    const endpoint = "mockEndpoint";
    const result = provider.fetch(endpoint);

    expect(createReadStream)
      .toHaveBeenCalledWith(endpoint);

    expect(result)
      .toBe(mockReadStream);
  });

});
