import { compileSchema, parseText } from 'reverse-schema'

export async function parseReverseSchemaFiles(schemaFile, dataFile) {
  const [schemaJson, dataText] = await Promise.all([
    readUploadText(schemaFile),
    readUploadText(dataFile),
  ])

  return parseReverseSchemaText(schemaJson, dataText)
}

export function parseReverseSchemaText(schemaJson, dataText) {
  const schema = parseSchemaJson(schemaJson)

  return parseText(schema, dataText)
}

export function parseSchemaJson(schemaJson) {
  const parsedSchema =
    typeof schemaJson === 'string' ? JSON.parse(schemaJson) : schemaJson

  const schema = Array.isArray(parsedSchema) ? parsedSchema : parsedSchema?.schema

  compileSchema(schema)

  return schema
}

async function readUploadText(file) {
  if (!file || typeof file.text !== 'function') {
    throw new TypeError('Expected an uploaded File object.')
  }

  return file.text()
}
