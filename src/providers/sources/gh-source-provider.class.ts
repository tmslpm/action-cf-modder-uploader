import { SourceProvider } from "./source-provider.class";
import { ReadStream, createReadStream } from "fs";

export class GithubSourceProvider extends SourceProvider {
  public constructor() {
    super();
  }

  public override fetch(endpoint: string): ReadStream {
    return createReadStream(endpoint);
  }

}
