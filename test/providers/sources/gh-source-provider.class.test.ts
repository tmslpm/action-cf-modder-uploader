import { createReadStream } from "fs";
import { ReadStream } from "fs";
import { GithubSourceProvider } from "../../../src/providers/sources/providers/gh-source-provider.class";

jest.mock("fs");

describe("getProvider", () => {

  let provider: GithubSourceProvider;

  beforeEach(() => {
    provider = new GithubSourceProvider();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be an instance of SourceProvider", () => {
    expect(provider).toBeInstanceOf(GithubSourceProvider);
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
