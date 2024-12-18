import { ReadStream } from "fs";

export abstract class SourceProvider {

  public constructor() { }

  public abstract fetch(target: string): ReadStream;

}

