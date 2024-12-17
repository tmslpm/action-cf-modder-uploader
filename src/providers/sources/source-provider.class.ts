import { ReadStream } from "fs";
import { LocalSourceProvider } from "./local-source-provider.class";
import { SourceProviderEnum } from "./source-provider.enum";
import { GithubSourceProvider } from "./gh-source-provider.class";

export abstract class SourceProvider {

  public abstract fetch(target: string): ReadStream;

  public static getProvider(provider: SourceProviderEnum): SourceProvider {
    switch (provider) {
      // from github api
      case SourceProviderEnum.GITHUB:
        return new GithubSourceProvider();

      // from local
      case SourceProviderEnum.LOCAL:
      default:
        return new LocalSourceProvider();
    }
  }

}

