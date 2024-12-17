import { ReadStream } from "fs";
import { ActionExtType } from "src/extensions/action-extension.type";
import { SourceProvider } from "./source-provider.class";
import fs from "fs";

export class GithubSourceProvider extends SourceProvider {

  public override fetch(ext: ActionExtType): ReadStream {
    return fs.createReadStream(ext.pathOfSourceToUpload)
  }

}
