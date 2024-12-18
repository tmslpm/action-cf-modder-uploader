import * as fs from "fs";
import { createReadStream, existsSync } from "fs";
import { LocalSourceProvider } from "../../../src/providers/sources/providers/local-source-provider.class";

jest.mock("fs");

describe("LocalSourceProvider", () => {
  let provider: LocalSourceProvider;
  let mockReadStream: fs.ReadStream;

  beforeEach(() => {
    provider = new LocalSourceProvider();
    mockReadStream = {} as fs.ReadStream;

    // Mock avec `jest.spyOn`
    (createReadStream as jest.Mock).mockReturnValue(mockReadStream);
    (existsSync as jest.Mock).mockImplementation(path => path === "valid/path");
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Nettoyage des mocks après chaque test
  });

  it("should throw when source non-existent", () => {
    expect(() => {
      provider.fetch("invalid/path");
    }).toThrowError("File not found: invalid/path. Please check the path.");

    expect(fs.createReadStream).not.toHaveBeenCalled(); // Vérifie que createReadStream n'est pas appelé
  });

  it("should call createReadStream when source exists", () => {
    const result = provider.fetch("valid/path");

    expect(fs.createReadStream).toHaveBeenCalledWith("valid/path"); // Vérifie l'appel à createReadStream
    expect(result).toBe(mockReadStream); // Vérifie que le stream mocké est retourné
  });
});
