import { ReadStream } from "fs";
import { SourceProvider } from "./source-provider.class";
import fs from "fs";

export class GithubSourceProvider extends SourceProvider {

  public override fetch(endpoint: string): ReadStream {
    return fs.createReadStream(endpoint);
  }

}
