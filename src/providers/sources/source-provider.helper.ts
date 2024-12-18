import { GithubSourceProvider } from "./providers/gh-source-provider.class";
import { LocalSourceProvider } from "./providers/local-source-provider.class";
import { SourceProvider } from "./source-provider.class";
import { SourceProviderEnum } from "./source-provider.enum";

/**
 * Factory Function: getProvider
 * 
 * This function returns an instance of a specific implementation 
 * of `SourceProvider` based on the given `SourceProviderEnum` 
 * value. It allows dynamic selection of the appropriate provider 
 * for fetching resources.
 * 
 * @param {SourceProviderEnum} provider - An enumeration value that 
 *    specifies the desired source provider.
 * 
 * @returns {SourceProvider} - An instance of a concrete `SourceProvider` 
 *    implementation.
 */
export function getProvider(provider: SourceProviderEnum): SourceProvider {
  switch (provider) {
    // from github api
    case SourceProviderEnum.GITHUB:
      return new GithubSourceProvider();

    // from local
    case SourceProviderEnum.LOCAL:
      return new LocalSourceProvider();
    default:
      return new LocalSourceProvider();
  }
}
