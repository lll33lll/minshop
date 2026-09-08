# verify 运行报告

- 运行时间: 2026-09-08T02:32:38Z
- 提交: 77b5644

```

> minshop@0.1.0 verify
> npm run theme:sync && vitest run && astro check && npm run theme:check && astro build && node scripts/check-built-css.mjs && npm run test:integration && node --experimental-strip-types scripts/check-stripe-countries.mjs && npm run mcp:check && npm run scaffold:check


> minshop@0.1.0 theme:sync
> node scripts/theme-sync.mjs

themes: default, market, studio — active for this process: default (from theme.config.json)

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.10 [39m[90m/home/runner/work/minshop/minshop[39m

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2msends both kinds and marks them sent, keyed on the globally-unique public id
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:165:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mfalls back to the numeric id only for legacy orders without a public id
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:178:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

 [32m✓[39m src/features/shipping/settings.test.ts [2m([22m[2m40 tests[22m[2m)[22m[32m 64[2mms[22m[39m
[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mis a no-op on a second pass (claim exclusivity)
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:188:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mis a no-op on a second pass (claim exclusivity)
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:189:11
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mskips the customer receipt for demo orders, still notifies the owner
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:196:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mskips both when email is disabled, without consuming retries as failures
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:204:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mreleases a failed send back to pending with the error recorded
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:212:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mreleases a failed send back to pending with the error recorded
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: smtp down
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:210:32
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:221:39
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification owner-notification/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:221:39
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification owner-notification/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:221:39
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification owner-notification/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:221:39
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification owner-notification/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:221:39
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification customer-receipt/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mOrder notification owner-notification/a3d54f80-9c1e-4b7d-8f2a-6c0d9e1b2a34 failed: Error: hard bounce
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:218:28
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2305:20
    at new Promise (<anonymous>)
    at runWithTimeout [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2272:10[90m)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2955:64

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks a row as dead once attempts are exhausted
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:223:11
[90m    at processTicksAndRejections (node:internal/process/task_queues:103:5)[39m
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mparks an abandoned claim as dead once its attempts are spent
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:235:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mfences a stale claim: attempt 1 completing late cannot overwrite attempt 2's live claim
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:250:15
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mfences a stale claim: attempt 1 completing late cannot overwrite attempt 2's live claim
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:258:15
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

 [32m✓[39m src/features/shipping/calculator.test.ts [2m([22m[2m34 tests[22m[2m)[22m[32m 271[2mms[22m[39m
[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mdelivers a guest-link reissue whose generation matches the registry
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:284:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mskips (never sends) a stale reissue event superseded by a newer generation
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:306:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mrefuses to deliver a reissue for an order without a customer email
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:320:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

[90mstderr[2m | src/features/email/outbox.test.ts[2m > [22m[2mdeliverOrderNotifications[2m > [22m[2mreclaims an expired lease from a dead deliverer
[22m[39mRecording store_url failed: Error: [vitest] No "getSetting" export is defined on the "../settings/db" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:

    at VitestMocker.createError [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:62:17[90m)[39m
    at Object.get [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4mvitest[24m/dist/chunks/startVitestModuleRunner.DB-7oCpn.js:327:16[90m)[39m
    at rememberStoreUrl [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:59:16[90m)[39m
    at Module.deliverOrderNotifications [90m(/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.ts:83:9[90m)[39m
    at [90m/home/runner/work/minshop/minshop/[39msrc/features/email/outbox.test.ts:330:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:302:11
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:26
    at [90mfile:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2326:20
    at new Promise (<anonymous>)
    at runWithCancel [90m(file:///home/runner/work/minshop/minshop/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:2323:10[90m)[39m {
  codeFrame: [32m'vi.mock(import("../settings/db"), async (importOriginal) => {\n'[39m +
    [32m'  const actual = await importOriginal()\n'[39m +
    [32m'  return {\n'[39m +
    [32m'    ...actual,\n'[39m +
    [32m'    // your mocked methods\n'[39m +
    [32m'  }\n'[39m +
    [32m'})'[39m
}

 [32m✓[39m src/features/email/outbox.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 161[2mms[22m[39m
 [32m✓[39m src/features/shipping/labels.test.ts [2m([22m[2m30 tests[22m[2m)[22m[32m 56[2mms[22m[39m
 [32m✓[39m src/features/pages/markdown.test.ts [2m([22m[2m39 tests[22m[2m)[22m[32m 59[2mms[22m[39m
 [32m✓[39m test/scripts/deploy-plan.test.mjs [2m([22m[2m26 tests[22m[2m)[22m[32m 43[2mms[22m[39m
 [32m✓[39m test/storefront/prose-source.test.mjs [2m([22m[2m37 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m test/storefront/productDetail.test.ts [2m([22m[2m23 tests[22m[2m)[22m[32m 93[2mms[22m[39m
 [32m✓[39m test/storefront/shell.test.ts [2m([22m[2m19 tests[22m[2m)[22m[32m 78[2mms[22m[39m
 [32m✓[39m test/storefront/catalog.test.ts [2m([22m[2m18 tests[22m[2m)[22m[32m 78[2mms[22m[39m
 [32m✓[39m test/scripts/rollout-gates.test.mjs [2m([22m[2m21 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m src/features/products/image.test.ts [2m([22m[2m15 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m src/features/shipping/weight.test.ts [2m([22m[2m25 tests[22m[2m)[22m[32m 278[2mms[22m[39m
 [32m✓[39m src/features/navigation/db.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m test/storefront/productCard.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 71[2mms[22m[39m
 [32m✓[39m test/storefront/productDetailLoader.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 49[2mms[22m[39m
 [32m✓[39m src/features/products/form.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 63[2mms[22m[39m
 [32m✓[39m test/storefront/theme-resolver.test.mjs [2m([22m[2m29 tests[22m[2m)[22m[32m 25[2mms[22m[39m
 [32m✓[39m src/features/payments/stripeCountries.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/cache/public.test.ts [2m([22m[2m35 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m src/features/media/dimensions.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m test/storefront/boundary.test.mjs [2m([22m[2m12 tests[22m[2m)[22m[33m 1028[2mms[22m[39m
 [32m✓[39m test/storefront/admin-isolation.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/ids/leakGate.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 38[2mms[22m[39m
 [32m✓[39m src/features/auth/access.test.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 503[2mms[22m[39m
 [32m✓[39m src/features/catalog/serialize.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 35[2mms[22m[39m
 [32m✓[39m src/features/payments/opennode.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 59[2mms[22m[39m
 [32m✓[39m src/features/settings/availability.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/pages/layouts.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/orders/filter.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/search/vector.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 21[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m test/storefront/shell-source.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/cart/key.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/products/filter.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/pages/form.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 63[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/rate.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 53[2mms[22m[39m
 [32m✓[39m src/features/media/upload.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/phoenixd.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 65[2mms[22m[39m
 [32m✓[39m src/features/auth/rateLimit.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m src/features/media/usage.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m test/scripts/migrations-remote-safe.test.mjs [2m([22m[2m41 tests[22m[2m)[22m[32m 16[2mms[22m[39m
[90mstderr[2m | src/features/cache/purge.test.ts[2m > [22m[2mWorkers cache purge[2m > [22m[2mfalls back to purge-everything after a rejected tag purge
[22m[39m{"event":"workers_cache_purge_failed","mode":"tags","errors":[{"code":429,"message":"rate limited"}]}

[90mstderr[2m | src/features/cache/purge.test.ts[2m > [22m[2mWorkers cache purge[2m > [22m[2mthrows when both purge attempts fail
[22m[39m{"event":"workers_cache_purge_failed","mode":"tags","errors":[{"code":429,"message":"rate limited"}]}

[90mstderr[2m | src/features/cache/purge.test.ts[2m > [22m[2mWorkers cache purge[2m > [22m[2mthrows when both purge attempts fail
[22m[39m{"event":"workers_cache_purge_failed","mode":"everything","errors":[{"code":429,"message":"rate limited"}]}

[90mstderr[2m | src/features/cache/purge.test.ts[2m > [22m[2mWorkers cache purge[2m > [22m[2mfails a deployment purge when Cloudflare rejects it
[22m[39m{"event":"workers_cache_purge_failed","mode":"everything","errors":[{"code":429,"message":"rate limited"}]}

[90mstderr[2m | src/features/cache/purge.test.ts[2m > [22m[2mWorkers cache purge[2m > [22m[2mdoes not turn a rate-limited stock transition into purge-everything
[22m[39m{"event":"workers_cache_purge_failed","mode":"stock-tags","errors":[{"code":429,"message":"rate limited"}]}

 [32m✓[39m src/features/cache/purge.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 21[2mms[22m[39m
 [32m✓[39m test/storefront/contentPage.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m src/features/auth/turnstile.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 46[2mms[22m[39m
 [32m✓[39m src/features/products/sort.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/email/orderRefunded.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 37[2mms[22m[39m
 [32m✓[39m src/features/settings/home.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/ids/token.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 67[2mms[22m[39m
 [32m✓[39m src/features/auth/session.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m src/pagination.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/email/orderNotification.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m src/money.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 28[2mms[22m[39m
 [32m✓[39m src/features/auth/formOrigin.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 41[2mms[22m[39m
 [32m✓[39m src/features/orders/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/cart/cart.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/lnbits.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 46[2mms[22m[39m
 [32m✓[39m src/features/cache/deployPurgeAuth.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m src/features/settings/db.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m src/features/cache/tags.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 34[2mms[22m[39m
 [32m✓[39m src/features/auth/password.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 232[2mms[22m[39m
 [32m✓[39m src/features/secrets/crypto.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m src/pages/sitemap.xml.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/customers/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.truncate.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/products/stock.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/auth/token.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/products/digitalFile.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/products/search.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/orders/number.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m src/features/auth/accessGate.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/email/orderPolicy.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/products/related.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/storage/r2.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/catalog/query.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m test/storefront/smoke.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 49[2mms[22m[39m
 [32m✓[39m src/features/http/origin.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/search/query.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m src/features/orders/reservations.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/products/slug.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/settings/timeZone.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 18[2mms[22m[39m

[2m Test Files [22m [1m[32m81 passed[39m[22m[90m (81)[39m
[2m      Tests [22m [1m[32m906 passed[39m[22m[90m (906)[39m
[2m   Start at [22m 02:32:39
[2m   Duration [22m 8.85s[2m (transform 3.64s, setup 0ms, import 7.59s, tests 4.51s, environment 12ms)[22m

[2m02:32:52[22m [34m[@astrojs/cloudflare][39m Enabling sessions with Cloudflare KV with the "SESSION" KV binding.
[2m02:32:52[22m [34m[types][39m Generated [2m360ms[22m
[2m02:32:52[22m [34m[check][39m Getting diagnostics for Astro files in /home/runner/work/minshop/minshop...
[96mcreate-minshop/src/scaffold.js[0m:[93m1[0m:[93m30[0m - [93mwarning[0m[90m ts(6133): [0m'readdirSync' is declared but its value is never read.

[7m1[0m import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
[7m [0m [93m                             ~~~~~~~~~~~[0m

[96msrc/pages/checkout.astro[0m:[93m293[0m:[93m23[0m - [93mwarning[0m[90m ts(6133): [0m'result' is declared but its value is never read.

[7m293[0m                 const result = await provider.createCheckout({
[7m   [0m [93m                      ~~~~~~[0m

Result (366 files): 
- 0 errors
- 0 warnings
- 2 hints


> minshop@0.1.0 theme:check
> node scripts/check-themes.mjs

storefront boundary: ok
[2m02:33:12[22m [34m[@astrojs/cloudflare][39m Enabling sessions with Cloudflare KV with the "SESSION" KV binding.
[2m02:33:12[22m [34m[types][39m Generated [2m75ms[22m
[2m02:33:12[22m [34m[build][39m output: [34m"server"[39m
[2m02:33:12[22m [34m[build][39m mode: [34m"server"[39m
[2m02:33:12[22m [34m[build][39m directory: [34m/home/runner/work/minshop/minshop/dist/[39m
[2m02:33:12[22m [34m[build][39m adapter: [32m@astrojs/cloudflare[39m
[2m02:33:12[22m [34m[build][39m Collecting build info...
[2m02:33:12[22m [34m[build][39m [32m✓ Completed in 158ms.[39m
[2m02:33:12[22m [34m[build][39m Building server entrypoints...
[2m02:33:13[22m [34m[vite][39m [32m✓ built in 198ms[39m
[31m[1m02:33:13[22m [ERROR] [vite][39m [31m✗[39m Build failed in 637ms
[31m[CompilerError][39m Expected corresponding JSX closing tag for 'button'.
  [1mLocation:[22m
    [4m[plugin astro:build] /home/runner/work/minshop/minshop/src/features/media/MediaPicker.astro:108:8[24m
  [1mStack trace:[22m
[2m    at handleCompileResultErrors (file:///home/runner/work/minshop/minshop/node_modules/astro/dist/core/compile/compile.js:67:11)
    at async compileAstro (file:///home/runner/work/minshop/minshop/node_modules/astro/dist/vite-plugin-astro/compile.js:7:27)
    at async plugin (file:///home/runner/work/minshop/minshop/node_modules/rolldown/dist/shared/bindingify-input-options-XPJLJOD0.mjs:1511:16)
    at aggregateBindingErrorsIntoJsError (file:///home/runner/work/minshop/minshop/node_modules/rolldown/dist/shared/error-BHRSI0R7.mjs:48:18)
    at #build (file:///home/runner/work/minshop/minshop/node_modules/rolldown/dist/shared/rolldown-build-CtPvmZgJ.mjs:3276:34)
    at async Object.build (file:///home/runner/work/minshop/minshop/node_modules/vite/dist/node/chunks/node.js:33483:19)
    at async Object.buildApp (file:///home/runner/work/minshop/minshop/node_modules/vite/dist/node/chunks/node.js:33475:6)
    at async viteBuild (file:///home/runner/work/minshop/minshop/node_modules/astro/dist/core/build/static-build.js:68:3)[22m
```
- 结果: ❌ 有失败项（见上方日志）
