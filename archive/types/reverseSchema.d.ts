export interface ReverseSchemaItem {
  name?: string;
  pattern: string;
  capture?: boolean;
}

export interface CompiledReverseSchema {
  regex: RegExp;
  source: string;
  capturedNames: string[];
}

export class ReverseSchemaError extends Error {}

export function compileSchema(
  schema: ReverseSchemaItem[],
): CompiledReverseSchema;

export function parseLine(
  schemaOrCompiled: ReverseSchemaItem[] | CompiledReverseSchema,
  line: string,
): Record<string, string> | null;

export function parseText(
  schema: ReverseSchemaItem[],
  text: string,
): Array<Record<string, string>>;
