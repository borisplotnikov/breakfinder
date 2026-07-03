const VALID_GROUP_NAME = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

export class ReverseSchemaError extends Error {
  constructor(message) {
    super(message);
    this.name = "ReverseSchemaError";
  }
}

export function compileSchema(schema) {
  validateSchemaArray(schema);

  const capturedNames = [];
  const seenNames = new Set();
  const fragments = schema.map((item, index) => {
    validateSchemaItem(item, index);

    if (item.capture === false) {
      return `(?:${item.pattern})`;
    }

    if (!VALID_GROUP_NAME.test(item.name)) {
      throw new ReverseSchemaError(
        `Schema item at index ${index} has invalid capture name "${item.name}". Names must be valid JavaScript RegExp group names.`,
      );
    }

    if (seenNames.has(item.name)) {
      throw new ReverseSchemaError(
        `Duplicate capture name "${item.name}" at schema index ${index}.`,
      );
    }

    seenNames.add(item.name);
    capturedNames.push(item.name);
    return `(?<${item.name}>${item.pattern})`;
  });

  const source = `^${fragments.join("")}$`;

  try {
    return {
      regex: new RegExp(source),
      source,
      capturedNames,
    };
  } catch (error) {
    throw new ReverseSchemaError(
      `Generated regex is invalid: ${error.message}`,
    );
  }
}

export function parseLine(schemaOrCompiled, line) {
  const compiled = isCompiledSchema(schemaOrCompiled)
    ? schemaOrCompiled
    : compileSchema(schemaOrCompiled);
  const match = compiled.regex.exec(String(line));

  if (!match) {
    return null;
  }

  const output = {};
  for (const name of compiled.capturedNames) {
    output[name] = match.groups?.[name] ?? "";
  }

  return output;
}

export function parseText(schema, text) {
  const compiled = compileSchema(schema);
  const lines = String(text).split(/\r\n|\n|\r/);
  const results = [];

  for (const line of lines) {
    const parsed = parseLine(compiled, line);
    if (parsed !== null) {
      results.push(parsed);
    }
  }

  return results;
}

function validateSchemaArray(schema) {
  if (!Array.isArray(schema)) {
    throw new ReverseSchemaError("Schema must be an array.");
  }
}

function validateSchemaItem(item, index) {
  if (item === null || typeof item !== "object" || Array.isArray(item)) {
    throw new ReverseSchemaError(
      `Schema item at index ${index} must be an object.`,
    );
  }

  if (typeof item.pattern !== "string") {
    throw new ReverseSchemaError(
      `Schema item at index ${index} must have a string pattern.`,
    );
  }

  if ("capture" in item && typeof item.capture !== "boolean") {
    throw new ReverseSchemaError(
      `Schema item at index ${index} must use a boolean capture value.`,
    );
  }

  if (item.capture !== false && typeof item.name !== "string") {
    throw new ReverseSchemaError(
      `Schema item at index ${index} must have a string name unless capture is false.`,
    );
  }
}

function isCompiledSchema(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    value.regex instanceof RegExp &&
    Array.isArray(value.capturedNames)
  );
}
