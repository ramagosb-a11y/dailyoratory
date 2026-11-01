const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

function store(entries = [], denied = false) {
  const values = new Map(entries);
  const events = new EventTarget();
  let readClient, readServer, subscribe;
  const window = {
    localStorage: {
      getItem(key) { if (denied) throw new Error('Storage unavailable'); return values.get(key) ?? null; },
      setItem(key, value) { if (denied) throw new Error('Storage unavailable'); values.set(key, value); },
    },
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: events.removeEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
  };
  const exports = {};
  const source = ts.transpileModule(fs.readFileSync('src/lib/wayOfCrossStorage.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function('require', 'exports', 'window', source)(name => {
    assert.equal(name, 'react');
    return { useSyncExternalStore(listener, client, server) { subscribe = listener; readClient = client; readServer = server; return client(); } };
  }, exports, window);
  exports.useWayOfCrossProgress();
  return { exports, values, read: () => readClient(), server: () => readServer(), subscribe: callback => subscribe(callback),
    storage(key) { const event = new Event('storage'); Object.defineProperty(event, 'key', {value: key}); window.dispatchEvent(event); } };
}
const formKey = 'daily-oratory-way-of-cross-form';
const stationKey = 'daily-oratory-way-of-cross-station';

test('missing storage starts at opening; snapshots are stable and server default is deterministic', () => {
  const s = store();
  assert.deepEqual(s.read(), {form:'daily', index:-1});
  assert.equal(s.read(), s.read());
  assert.equal(s.server(), s.server());
  assert.deepEqual(s.server(), {form:'daily', index:-1});
  assert.equal(s.values.size, 0, 'Reading does not overwrite storage');
});
test('legacy progress restores form and station without changing server snapshot', () => {
  const s = store([[formKey,'alphonsus'],[stationKey,'5']]);
  assert.deepEqual(s.read(), {form:'alphonsus',index:5});
  assert.deepEqual(s.server(), {form:'daily',index:-1});
  assert.equal(s.read(), s.read());
});
test('corrupt, empty, fractional and out-of-range indices return to opening', () => {
  for (const value of ['', ' ', 'garbage', 'NaN', 'Infinity', '-2', '15', '1.5']) {
    const s=store([[formKey,'garbage'],[stationKey,value]]);
    assert.deepEqual(s.read(), {form:'daily',index:-1}, value);
  }
  for (const index of [-1,0,13,14]) assert.equal(store([[stationKey,String(index)]]).read().index,index);
});
test('navigation notifies listeners, persists legacy keys and survives remount', () => {
  const s=store(); let calls=0; const unsubscribe=s.subscribe(()=>calls++);
  s.exports.saveWayOfCrossProgress('alphonsus',4);
  assert.equal(calls,1);assert.equal(s.values.get(stationKey),'4');assert.equal(s.values.get(formKey),'alphonsus');
  assert.deepEqual(store([...s.values]).read(),{form:'alphonsus',index:4});
  s.exports.saveWayOfCrossProgress('daily',-1);assert.deepEqual(s.read(),{form:'daily',index:-1});
  s.exports.saveWayOfCrossProgress('daily',99);assert.equal(s.read().index,14);
  s.exports.saveWayOfCrossProgress('daily',NaN);assert.equal(s.read().index,-1);
  unsubscribe();s.exports.saveWayOfCrossProgress('daily',0);assert.equal(calls,4);
});
test('denied storage keeps navigation usable in memory with stable snapshots', () => {
  const s=store([],true);assert.deepEqual(s.read(),{form:'daily',index:-1});
  s.exports.saveWayOfCrossProgress('alphonsus',8);assert.deepEqual(s.read(),{form:'alphonsus',index:8});assert.equal(s.read(),s.read());
  s.exports.saveWayOfCrossProgress('daily',-1);assert.deepEqual(s.read(),{form:'daily',index:-1});assert.equal(s.values.size,0);
});
test('other-tab changes and clearing refresh snapshots; unrelated storage is ignored', () => {
  const s=store([[formKey,'alphonsus'],[stationKey,'3']]);let calls=0;const stop=s.subscribe(()=>calls++);
  s.values.set(stationKey,'8');s.storage(stationKey);assert.equal(calls,1);assert.equal(s.read().index,8);
  s.storage('unrelated');assert.equal(calls,1);
  s.values.clear();s.storage(null);assert.equal(calls,2);assert.deepEqual(s.read(),{form:'daily',index:-1});stop();
});
