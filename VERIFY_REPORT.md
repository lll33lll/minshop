# verify 运行报告

- 运行时间: 2026-09-08T02:24:38Z
- 提交: 3fff782

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

 [31m❯[39m src/features/shipping/settings.test.ts [2m([22m[2m40 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[32m 102[2mms[22m[39m
     [32m✓[39m reports an absent row[32m 4[2mms[22m[39m
     [32m✓[39m accepts a valid document[32m 1[2mms[22m[39m
     [32m✓[39m keeps the raw value for repair when the JSON is broken[32m 0[2mms[22m[39m
     [32m✓[39m rejects an unsupported schema version[32m 0[2mms[22m[39m
     [32m✓[39m rejects a document with no usable revision[32m 0[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with a non-boolean enabled[32m 0[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with malformed zones or rates[32m 1[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with an invalid packaging weight[32m 0[2mms[22m[39m
     [32m✓[39m normalizes a schema 1 flat rate in memory[32m 1[2mms[22m[39m
     [32m✓[39m inherits build-time zones and the legacy enabled override when absent[32m 2[2mms[22m[39m
     [32m✓[39m lets a valid document replace build-time configuration entirely[32m 1[2mms[22m[39m
     [32m✓[39m fails closed on an invalid document instead of restoring build-time rates[32m 0[2mms[22m[39m
     [32m✓[39m fails closed on an over-cap build-time configuration[32m 1[2mms[22m[39m
     [32m✓[39m accepts a legacy threshold-only zone with no rates[32m 1[2mms[22m[39m
     [32m✓[39m still rejects a build-time zone with neither rates nor a threshold[32m 0[2mms[22m[39m
     [32m✓[39m accepts an ordinary build-time configuration[32m 0[2mms[22m[39m
     [32m✓[39m allows a disabled store with no zones[32m 0[2mms[22m[39m
     [32m✓[39m accepts a well-formed document[32m 0[2mms[22m[39m
     [32m✓[39m requires a zone and rate before enabling[32m 1[2mms[22m[39m
     [32m✓[39m rejects a country appearing in two zones[32m 23[2mms[22m[39m
     [32m✓[39m rejects duplicate zone names case-insensitively[32m 0[2mms[22m[39m
     [32m✓[39m rejects an unknown country code[32m 0[2mms[22m[39m
[31m     [31m×[31m keeps the catch-all alone and last[39m[32m 14[2mms[22m[39m
     [32m✓[39m rejects duplicate rate labels within a zone[32m 0[2mms[22m[39m
     [32m✓[39m reserves the free-shipping label while a threshold is set[32m 0[2mms[22m[39m
     [32m✓[39m enforces the five-option ceiling with the synthesized free option[32m 0[2mms[22m[39m
     [32m✓[39m requires strictly increasing band maxima[32m 1[2mms[22m[39m
     [32m✓[39m allows no maximum only on the final band[32m 0[2mms[22m[39m
     [32m✓[39m accepts a pickup rate and validates its fee like a flat price[32m 0[2mms[22m[39m
     [32m✓[39m requires at least one band on a weight rate[32m 0[2mms[22m[39m
[31m     [31m×[31m names zones deterministically[39m[32m 4[2mms[22m[39m
     [32m✓[39m builds an editable candidate from raw build-time values[32m 7[2mms[22m[39m
     [32m✓[39m shows offending legacy values even when the storefront fails closed[32m 0[2mms[22m[39m
     [32m✓[39m round-trips amounts and weights into editable strings[32m 2[2mms[22m[39m
     [32m✓[39m parses a complete submission into a valid document[32m 2[2mms[22m[39m
     [32m✓[39m preserves order and ignores unreferenced rows[32m 1[2mms[22m[39m
     [32m✓[39m parses a pickup rate from the editor[32m 0[2mms[22m[39m
     [32m✓[39m scales amounts by the currency, not by a hardcoded 100[32m 1[2mms[22m[39m
     [32m✓[39m reports a band weight the merchant mistyped[32m 0[2mms[22m[39m
     [32m✓[39m is stable for the same bytes and differs for a repair[32m 25[2mms[22m[39m
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

 [32m✓[39m src/features/email/outbox.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 169[2mms[22m[39m
 [32m✓[39m src/features/shipping/calculator.test.ts [2m([22m[2m34 tests[22m[2m)[22m[32m 276[2mms[22m[39m
 [32m✓[39m src/features/shipping/labels.test.ts [2m([22m[2m30 tests[22m[2m)[22m[32m 63[2mms[22m[39m
 [32m✓[39m src/features/pages/markdown.test.ts [2m([22m[2m39 tests[22m[2m)[22m[32m 46[2mms[22m[39m
 [32m✓[39m test/scripts/deploy-plan.test.mjs [2m([22m[2m26 tests[22m[2m)[22m[32m 23[2mms[22m[39m
 [32m✓[39m test/storefront/prose-source.test.mjs [2m([22m[2m37 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m test/storefront/productDetail.test.ts [2m([22m[2m23 tests[22m[2m)[22m[32m 82[2mms[22m[39m
 [32m✓[39m test/storefront/shell.test.ts [2m([22m[2m19 tests[22m[2m)[22m[32m 79[2mms[22m[39m
 [32m✓[39m test/storefront/catalog.test.ts [2m([22m[2m18 tests[22m[2m)[22m[32m 98[2mms[22m[39m
 [32m✓[39m test/scripts/rollout-gates.test.mjs [2m([22m[2m21 tests[22m[2m)[22m[32m 21[2mms[22m[39m
 [32m✓[39m src/features/shipping/weight.test.ts [2m([22m[2m25 tests[22m[2m)[22m[32m 267[2mms[22m[39m
 [32m✓[39m src/features/products/image.test.ts [2m([22m[2m15 tests[22m[2m)[22m[32m 27[2mms[22m[39m
 [32m✓[39m src/features/navigation/db.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m test/storefront/productCard.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 72[2mms[22m[39m
 [32m✓[39m test/storefront/productDetailLoader.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 46[2mms[22m[39m
 [32m✓[39m src/features/products/form.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 50[2mms[22m[39m
 [32m✓[39m test/storefront/theme-resolver.test.mjs [2m([22m[2m29 tests[22m[2m)[22m[32m 25[2mms[22m[39m
 [32m✓[39m src/features/payments/stripeCountries.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m src/features/cache/public.test.ts [2m([22m[2m35 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m test/storefront/boundary.test.mjs [2m([22m[2m12 tests[22m[2m)[22m[33m 953[2mms[22m[39m
 [32m✓[39m src/features/media/dimensions.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/ids/leakGate.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 40[2mms[22m[39m
 [32m✓[39m test/storefront/admin-isolation.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/catalog/serialize.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m src/features/payments/opennode.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 58[2mms[22m[39m
 [32m✓[39m src/features/auth/access.test.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 621[2mms[22m[39m
 [32m✓[39m src/features/settings/availability.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/orders/filter.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/pages/layouts.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/search/vector.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 14[2mms[22m[39m
 [32m✓[39m test/storefront/shell-source.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 31[2mms[22m[39m
 [32m✓[39m src/features/cart/key.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/products/filter.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/pages/form.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 64[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/rate.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 68[2mms[22m[39m
 [32m✓[39m src/features/media/upload.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/phoenixd.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 61[2mms[22m[39m
 [31m❯[39m src/features/auth/rateLimit.test.ts [2m([22m[2m12 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 56[2mms[22m[39m
     [32m✓[39m limits auth POST /admin/login[32m 3[2mms[22m[39m
     [32m✓[39m limits auth POST /account/login[32m 0[2mms[22m[39m
     [32m✓[39m limits checkout POST /api/checkout[32m 0[2mms[22m[39m
     [32m✓[39m limits checkout POST /checkout[32m 0[2mms[22m[39m
     [32m✓[39m limits checkout POST /pay/order-token[32m 0[2mms[22m[39m
     [32m✓[39m limits search GET /search only when q is present[32m 0[2mms[22m[39m
     [32m✓[39m limits search GET /api/products only when q is present[32m 0[2mms[22m[39m
     [32m✓[39m does not limit unrelated reads, webhooks, or authenticated admin APIs[32m 0[2mms[22m[39m
   [32m✓[39m scopes anonymous counters to host, route, and connecting client[32m 31[2mms[22m[39m
   [32m✓[39m passes the scoped key to the Cloudflare binding and honors its decision[32m 4[2mms[22m[39m
[31m   [31m×[31m returns a non-cacheable 429 with retry guidance[39m[32m 13[2mms[22m[39m
   [32m✓[39m keeps catalog search 429s readable cross-origin[32m 0[2mms[22m[39m
 [32m✓[39m src/features/media/usage.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m test/scripts/migrations-remote-safe.test.mjs [2m([22m[2m41 tests[22m[2m)[22m[32m 17[2mms[22m[39m
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

 [31m❯[39m src/features/cache/purge.test.ts [2m([22m[2m7 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[32m 24[2mms[22m[39m
     [32m✓[39m purges normalized tags once on success[32m 6[2mms[22m[39m
     [32m✓[39m falls back to purge-everything after a rejected tag purge[32m 2[2mms[22m[39m
[31m     [31m×[31m throws when both purge attempts fail[39m[32m 10[2mms[22m[39m
     [32m✓[39m purges only the affected product tags[32m 1[2mms[22m[39m
     [32m✓[39m purges the complete entrypoint cache for a deployment[32m 1[2mms[22m[39m
[31m     [31m×[31m fails a deployment purge when Cloudflare rejects it[39m[32m 2[2mms[22m[39m
     [32m✓[39m does not turn a rate-limited stock transition into purge-everything[32m 2[2mms[22m[39m
 [32m✓[39m test/storefront/contentPage.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 55[2mms[22m[39m
 [32m✓[39m src/features/auth/turnstile.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 45[2mms[22m[39m
 [32m✓[39m src/features/products/sort.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/email/orderRefunded.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 31[2mms[22m[39m
 [32m✓[39m src/features/settings/home.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/ids/token.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 54[2mms[22m[39m
 [32m✓[39m src/features/auth/session.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 23[2mms[22m[39m
 [32m✓[39m src/pagination.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [31m❯[39m src/features/email/orderNotification.test.ts [2m([22m[2m2 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[32m 40[2mms[22m[39m
[31m     [31m×[31m shows the sequential order number and public ID in the owner subject and message[39m[32m 36[2mms[22m[39m
[31m     [31m×[31m does not render null when a legacy order has no public ID[39m[32m 2[2mms[22m[39m
 [32m✓[39m src/money.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 32[2mms[22m[39m
 [32m✓[39m src/features/auth/formOrigin.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 39[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/lnbits.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 37[2mms[22m[39m
 [32m✓[39m src/features/orders/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/cart/cart.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/cache/deployPurgeAuth.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m src/features/settings/db.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/secrets/crypto.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m src/features/cache/tags.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 37[2mms[22m[39m
 [32m✓[39m src/features/auth/password.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 253[2mms[22m[39m
 [32m✓[39m src/pages/sitemap.xml.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/customers/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.truncate.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [31m❯[39m src/features/products/digitalFile.test.ts [2m([22m[2m2 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 14[2mms[22m[39m
[31m     [31m×[31m requires an allowed MIME and matching extension[39m[32m 8[2mms[22m[39m
     [32m✓[39m uploads under an immutable unique key with private metadata[32m 5[2mms[22m[39m
 [32m✓[39m src/features/auth/token.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m src/features/products/stock.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/orders/number.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m src/features/auth/accessGate.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/products/search.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/email/orderPolicy.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/products/related.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/storage/r2.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m src/features/catalog/query.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m test/storefront/smoke.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 55[2mms[22m[39m
 [32m✓[39m src/features/http/origin.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/search/query.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m src/features/orders/reservations.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/products/slug.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/settings/timeZone.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 8 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m src/features/auth/rateLimit.test.ts[2m > [22mreturns a non-cacheable 429 with retry guidance
[31m[1mAssertionError[22m: expected { error: '请求过于频繁，请稍后再试。' } to deeply equal { Object (error) }[39m

[32m- Expected[39m
[31m+ Received[39m

[2m  {[22m
[32m-   "error": "Too many requests. Try again shortly.",[39m
[31m+   "error": "请求过于频繁，请稍后再试。",[39m
[2m  }[22m

[36m [2m❯[22m src/features/auth/rateLimit.test.ts:[2m59:32[22m[39m
    [90m 57|[39m   [34mexpect[39m(response[33m.[39mheaders[33m.[39m[35mget[39m([32m'cache-control'[39m))[33m.[39m[34mtoBe[39m([32m'no-store'[39m)[33m;[39m
    [90m 58|[39m   expect(response.headers.get('access-control-allow-origin')).toBe('*'…
    [90m 59|[39m   await expect(response.json()).resolves.toEqual({ error: 'Too many re…
    [90m   |[39m                                [31m^[39m
    [90m 60|[39m })[33m;[39m
    [90m 61|[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/cache/purge.test.ts[2m > [22mWorkers cache purge[2m > [22mthrows when both purge attempts fail
[31m[1mAssertionError[22m: expected [Function] to throw error including 'could not be invalidated' but got '数据已保存，但 Workers 缓存未能失效。'[39m

Expected: [32m"could not be invalidated"[39m
Received: [31m"数据已保存，但 Workers 缓存未能失效。"[39m

[36m [2m❯[22m src/features/cache/purge.test.ts:[2m37:57[22m[39m
    [90m 35|[39m   [34mit[39m([32m'throws when both purge attempts fail'[39m[33m,[39m [35masync[39m () [33m=>[39m {
    [90m 36|[39m     [35mconst[39m purge [33m=[39m vi[33m.[39m[34mfn[39m([35masync[39m () [33m=>[39m [34mresult[39m([35mfalse[39m))[33m;[39m
    [90m 37|[39m     await expect(purgeCacheTags(['catalog'], { purge })).rejects.toThr…
    [90m   |[39m                                                         [31m^[39m
    [90m 38|[39m       [32m'could not be invalidated'[39m[33m,[39m
    [90m 39|[39m     )[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/cache/purge.test.ts[2m > [22mWorkers cache purge[2m > [22mfails a deployment purge when Cloudflare rejects it
[31m[1mAssertionError[22m: expected [Function] to throw error including 'could not be purged' but got 'Workers 缓存清除失败。'[39m

Expected: [32m"could not be purged"[39m
Received: [31m"Workers 缓存清除失败。"[39m

[36m [2m❯[22m src/features/cache/purge.test.ts:[2m58:46[22m[39m
    [90m 56|[39m   it('fails a deployment purge when Cloudflare rejects it', async () =…
    [90m 57|[39m     [35mconst[39m purge [33m=[39m vi[33m.[39m[34mfn[39m([35masync[39m () [33m=>[39m [34mresult[39m([35mfalse[39m))[33m;[39m
    [90m 58|[39m     await expect(purgeEntireCache({ purge })).rejects.toThrow('could n…
    [90m   |[39m                                              [31m^[39m
    [90m 59|[39m     [34mexpect[39m(purge)[33m.[39m[34mtoHaveBeenCalledOnce[39m()[33m;[39m
    [90m 60|[39m   })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderNotification.test.ts[2m > [22morderNotificationEmail[2m > [22mshows the sequential order number and public ID in the owner subject and message
[31m[1mAssertionError[22m: expected '新订单 105\n公开 id: ord_zdpyy315je\n\ncus…' to contain 'order #105'[39m

[32m- Expected[39m
[31m+ Received[39m

[32m- order #105[39m
[31m+ 新订单 105[39m
[31m+ 公开 id: ord_zdpyy315je[39m
[31m+[39m
[31m+ customer: buyer@example.com[39m
[31m+[39m
[31m+ 收货信息：[39m
[31m+ -[39m
[31m+[39m
[31m+ 合计：us$1.00[39m
[31m+[39m
[31m+ 后台查看：https://demo.minshop.dev/admin/orders/ord_zdpyy315je[39m

[36m [2m❯[22m src/features/email/orderNotification.test.ts:[2m51:34[22m[39m
    [90m 49|[39m     [34mexpect[39m(message[33m.[39msubject)[33m.[39m[34mtoBe[39m([32m'【Minshop】新订单 105 - ord_zdpyy315je'[39m)[33m;[39m
    [90m 50|[39m     [35mfor[39m ([35mconst[39m body [35mof[39m [message[33m.[39mtext[33m,[39m message[33m.[39mhtml]) {
    [90m 51|[39m       [34mexpect[39m(body[33m.[39m[34mtoLowerCase[39m())[33m.[39m[34mtoContain[39m([32m'order #105'[39m)[33m;[39m
    [90m   |[39m                                  [31m^[39m
    [90m 52|[39m       [34mexpect[39m(body)[33m.[39m[34mtoContain[39m([32m'ord_zdpyy315je'[39m)[33m;[39m
    [90m 53|[39m     }

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderNotification.test.ts[2m > [22morderNotificationEmail[2m > [22mdoes not render null when a legacy order has no public ID
[31m[1mAssertionError[22m: expected '新订单 105\n公开 ID: —\n\nCustomer: buyer@…' to contain 'Public ID: —'[39m

[32m- Expected[39m
[31m+ Received[39m

[32m- Public ID: —[39m
[31m+ 新订单 105[39m
[31m+ 公开 ID: —[39m
[31m+[39m
[31m+ Customer: buyer@example.com[39m
[31m+[39m
[31m+ 收货信息：[39m
[31m+ -[39m
[31m+[39m
[31m+ 合计：US$1.00[39m
[31m+[39m
[31m+ 后台查看：https://demo.minshop.dev/admin/orders/105[39m

[36m [2m❯[22m src/features/email/orderNotification.test.ts:[2m67:26[22m[39m
    [90m 65|[39m
    [90m 66|[39m     [34mexpect[39m(message[33m.[39msubject)[33m.[39m[34mtoBe[39m([32m'【Minshop】新订单 105'[39m)[33m;[39m
    [90m 67|[39m     [34mexpect[39m(message[33m.[39mtext)[33m.[39m[34mtoContain[39m([32m'Public ID: —'[39m)[33m;[39m
    [90m   |[39m                          [31m^[39m
    [90m 68|[39m     [34mexpect[39m(message[33m.[39mhtml)[33m.[39mnot[33m.[39m[34mtoContain[39m([32m'null'[39m)[33m;[39m
    [90m 69|[39m   })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/products/digitalFile.test.ts[2m > [22mdigital deliverables[2m > [22mrequires an allowed MIME and matching extension
[31m[1mAssertionError[22m: expected '请选择非空的交付文件。' to match /non-empty/[39m

[32m- Expected:[39m
/non-empty/

[31m+ Received:[39m
"请选择非空的交付文件。"

[36m [2m❯[22m src/features/products/digitalFile.test.ts:[2m9:89[22m[39m
    [90m  7|[39m     expect(validateDigitalFile(new File(['pdf'], 'guide.pdf', { type: …
    [90m  8|[39m     expect(validateDigitalFile(new File(['pdf'], 'guide.zip', { type: …
    [90m  9|[39m     expect(validateDigitalFile(new File([], 'empty.pdf', { type: 'appl…
    [90m   |[39m                                                                                         [31m^[39m
    [90m 10|[39m   })[33m;[39m
    [90m 11|[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mkeeps the catch-all alone and last
[31m[1mAssertionError[22m: expected [ '「世界其他地区」必须是最后一个区域。' ] to include 'Rest of world must be the last zone.'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m241:31[22m[39m
    [90m239|[39m       ][33m,[39m
    [90m240|[39m     })[33m;[39m
    [90m241|[39m     expect(messages(notLast)).toContain('Rest of world must be the las…
    [90m   |[39m                               [31m^[39m
    [90m242|[39m   })[33m;[39m
    [90m243|[39m   [34mit[39m([32m'rejects duplicate rate labels within a zone'[39m[33m,[39m () [33m=>[39m {

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/8]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mlegacy migration[2m > [22mnames zones deterministically
[31m[1mAssertionError[22m: expected '世界其他地区' to be 'Rest of world' // Object.is equality[39m

Expected: [32m"Rest of world"[39m
Received: [31m"世界其他地区"[39m

[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m358:38[22m[39m
    [90m356|[39m   [34mit[39m([32m'names zones deterministically'[39m[33m,[39m () [33m=>[39m {
    [90m357|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'US'[39m][33m,[39m [34m0[39m))[33m.[39m[34mtoBe[39m([32m'美国'[39m)[33m;[39m
    [90m358|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'*'[39m][33m,[39m [34m1[39m))[33m.[39m[34mtoBe[39m([32m'Rest of world'[39m)[33m;[39m
    [90m   |[39m                                      [31m^[39m
    [90m359|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'US'[39m[33m,[39m [32m'CA'[39m][33m,[39m [34m2[39m))[33m.[39m[34mtoBe[39m([32m'Zone 3'[39m)[33m;[39m
    [90m360|[39m   })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/8]⎯[22m[39m


[2m Test Files [22m [1m[31m5 failed[39m[22m[2m | [22m[1m[32m76 passed[39m[22m[90m (81)[39m
[2m      Tests [22m [1m[31m8 failed[39m[22m[2m | [22m[1m[32m898 passed[39m[22m[90m (906)[39m
[2m   Start at [22m 02:24:39
[2m   Duration [22m 8.61s[2m (transform 3.19s, setup 0ms, import 6.96s, tests 4.62s, environment 13ms)[22m


::error file=/home/runner/work/minshop/minshop/src/features/auth/rateLimit.test.ts,title=src/features/auth/rateLimit.test.ts > returns a non-cacheable 429 with retry guidance,line=59,column=32::AssertionError: expected { error: '请求过于频繁，请稍后再试。' } to deeply equal { Object (error) }%0A%0A- Expected%0A+ Received%0A%0A  {%0A-   "error": "Too many requests. Try again shortly.",%0A+   "error": "请求过于频繁，请稍后再试。",%0A  }%0A%0A ❯ src/features/auth/rateLimit.test.ts:59:32%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/cache/purge.test.ts,title=src/features/cache/purge.test.ts > Workers cache purge > throws when both purge attempts fail,line=37,column=57::AssertionError: expected [Function] to throw error including 'could not be invalidated' but got '数据已保存，但 Workers 缓存未能失效。'%0A%0AExpected: "could not be invalidated"%0AReceived: "数据已保存，但 Workers 缓存未能失效。"%0A%0A ❯ src/features/cache/purge.test.ts:37:57%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/cache/purge.test.ts,title=src/features/cache/purge.test.ts > Workers cache purge > fails a deployment purge when Cloudflare rejects it,line=58,column=46::AssertionError: expected [Function] to throw error including 'could not be purged' but got 'Workers 缓存清除失败。'%0A%0AExpected: "could not be purged"%0AReceived: "Workers 缓存清除失败。"%0A%0A ❯ src/features/cache/purge.test.ts:58:46%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderNotification.test.ts,title=src/features/email/orderNotification.test.ts > orderNotificationEmail > shows the sequential order number and public ID in the owner subject and message,line=51,column=34::AssertionError: expected '新订单 105\n公开 id: ord_zdpyy315je\n\ncus…' to contain 'order #105'%0A%0A- Expected%0A+ Received%0A%0A- order #105%0A+ 新订单 105%0A+ 公开 id: ord_zdpyy315je%0A+%0A+ customer: buyer@example.com%0A+%0A+ 收货信息：%0A+ -%0A+%0A+ 合计：us$1.00%0A+%0A+ 后台查看：https://demo.minshop.dev/admin/orders/ord_zdpyy315je%0A%0A ❯ src/features/email/orderNotification.test.ts:51:34%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderNotification.test.ts,title=src/features/email/orderNotification.test.ts > orderNotificationEmail > does not render null when a legacy order has no public ID,line=67,column=26::AssertionError: expected '新订单 105\n公开 ID: —\n\nCustomer: buyer@…' to contain 'Public ID: —'%0A%0A- Expected%0A+ Received%0A%0A- Public ID: —%0A+ 新订单 105%0A+ 公开 ID: —%0A+%0A+ Customer: buyer@example.com%0A+%0A+ 收货信息：%0A+ -%0A+%0A+ 合计：US$1.00%0A+%0A+ 后台查看：https://demo.minshop.dev/admin/orders/105%0A%0A ❯ src/features/email/orderNotification.test.ts:67:26%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/products/digitalFile.test.ts,title=src/features/products/digitalFile.test.ts > digital deliverables > requires an allowed MIME and matching extension,line=9,column=89::AssertionError: expected '请选择非空的交付文件。' to match /non-empty/%0A%0A- Expected:%0A/non-empty/%0A%0A+ Received:%0A"请选择非空的交付文件。"%0A%0A ❯ src/features/products/digitalFile.test.ts:9:89%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > keeps the catch-all alone and last,line=241,column=31::AssertionError: expected [ '「世界其他地区」必须是最后一个区域。' ] to include 'Rest of world must be the last zone.'%0A ❯ src/features/shipping/settings.test.ts:241:31%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > legacy migration > names zones deterministically,line=358,column=38::AssertionError: expected '世界其他地区' to be 'Rest of world' // Object.is equality%0A%0AExpected: "Rest of world"%0AReceived: "世界其他地区"%0A%0A ❯ src/features/shipping/settings.test.ts:358:38%0A%0A
```
- 结果: ❌ 有失败项（见上方日志）
