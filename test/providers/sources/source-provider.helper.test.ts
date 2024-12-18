import { GithubSourceProvider } from "../../../src/providers/sources/providers/gh-source-provider.class";
import { LocalSourceProvider } from "../../../src/providers/sources/providers/local-source-provider.class";
import { SourceProviderEnum } from "../../../src/providers/sources/source-provider.enum";
import { getProvider } from "../../../src/providers/sources/source-provider.helper";

describe("getProvider", () => {

  it("should return a LocalSourceProvider when SourceProviderEnum.LOCAL is passed",
    () => {
      const provider = getProvider(SourceProviderEnum.LOCAL);
      expect(provider).toBeInstanceOf(LocalSourceProvider);
    });

  it("should return a GithubSourceProvider when SourceProviderEnum.GITHUB is passed",
    () => {
      const provider = getProvider(SourceProviderEnum.GITHUB);
      expect(provider).toBeInstanceOf(GithubSourceProvider);
    });

  it("should return a LocalSourceProvider by default when an invalid value is passed",
    () => {
      // @ts-ignore: Testing invalid case intentionally
      const provider = getProvider(-1);
      expect(provider).toBeInstanceOf(LocalSourceProvider);
    });

});
