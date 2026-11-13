import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const flatten = (object, prefix = "") =>
  Object.fromEntries(
    Object.entries(object).flatMap(([key, value]) =>
      typeof value === "object"
        ? Object.entries(flatten(value, `${prefix}${key}.`))
        : [[`${prefix}${key}`, value]],
    ),
  );
const load = async (language) =>
  flatten(
    JSON.parse(
      await readFile(
        new URL(`../src/i18n/${language}.json`, import.meta.url),
        "utf8",
      ),
    ),
  );
const es = await load("es");
const en = await load("en");
assert.deepEqual(
  Object.keys(en).sort(),
  Object.keys(es).sort(),
  "Both languages must contain the same keys",
);
const placeholders = (value) =>
  [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();
for (const key of Object.keys(es)) {
  assert.equal(typeof es[key], "string", key);
  assert.equal(typeof en[key], "string", key);
  assert(es[key].trim() && en[key].trim(), `Empty translation: ${key}`);
  assert.deepEqual(
    placeholders(en[key]),
    placeholders(es[key]),
    `Placeholder mismatch: ${key}`,
  );
}
console.log(
  `PASS: ${Object.keys(es).length} bilingual keys, nonempty values, and matching interpolation placeholders.`,
);
