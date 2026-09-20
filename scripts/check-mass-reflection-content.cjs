const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
function loadTs(path, dependencies = {}) {
  const source = fs.readFileSync(path, 'utf8');
  const code = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX}}).outputText;
  const module = {exports: {}};
  new Function('require', 'module', 'exports', code)(name => dependencies[name] ?? require(name), module, module.exports);
  return module.exports;
}
// Only date selection is under test; its unrelated liturgical-calendar dependency is isolated.
const {selectMassReflectionForIsoDate: select} = loadTs('src/lib/staticDailyContent.ts', {'@/data/liturgicalLiving': {defaultLiturgicalLivingSettings: {timeZone:'America/Chicago'}}});
const entry = (date, status='published') => ({title:date,reflectionDate:date,status,featured:false});
const today=entry('2026-09-11'), past=entry('2026-09-10'), future=entry('2026-09-12','scheduled');
assert.equal(select([future,past,today],'2026-09-11').mode,'today');
assert.equal(select([future,past],'2026-09-11').mode,'fallback');
assert.equal(select([future],'2026-09-11').mode,'upcoming');
assert.equal(select([entry('2026-09-11','draft')],'2026-09-11'),null);
assert.equal(select([],'2026-09-11'),null);
assert.equal(select([future],'2026-09-12').mode,'today');
const {MassReflectionRichBody} = loadTs('src/components/reflections/MassReflectionRichBody.tsx');
const paragraphs=['Introduction with **bold**, __underline__, *emphasis*, and _italic_.','1. A heading','Ordinary prose.', '> A quotation.', '- First item\n- Second item', 'Prayer', 'Complete prayer text.'];
const normal=renderToStaticMarkup(React.createElement(MassReflectionRichBody,{paragraphs}));
const explicit=renderToStaticMarkup(React.createElement(MassReflectionRichBody,{paragraphs,variant:'default'}));
const manuscript=renderToStaticMarkup(React.createElement(MassReflectionRichBody,{paragraphs,variant:'manuscript'}));
assert.equal(normal,explicit);
assert(!normal.includes('data-manuscript-heading'));
for(const html of [normal,manuscript]) {
  for(const phrase of ['Ordinary prose.','A quotation.','First item','Second item','Complete prayer text.']) assert(html.includes(phrase));
  for(const tag of ['<strong','<em','<blockquote','<ul','<li']) assert(html.includes(tag));
  assert(html.includes('underline'));
}
assert.equal((manuscript.match(/<h3/g)||[]).length,2);
assert(!manuscript.includes('<section'));
assert(fs.readFileSync('src/components/reflections/CurrentMassReflectionSection.tsx','utf8').includes('15 * 60 * 1000'));
console.log('PASS: six date/publication/empty-state cases, default renderer opt-in isolation, headings, quotations, lists, inline formatting, and 15-minute refresh preservation.');
