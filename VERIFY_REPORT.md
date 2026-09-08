# verify 运行报告

- 运行时间: 2026-09-08T02:15:09Z
- 提交: 9ffd759

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

 [31m❯[39m src/features/shipping/settings.test.ts [2m([22m[2m40 tests[22m[2m | [22m[31m10 failed[39m[2m)[22m[32m 105[2mms[22m[39m
     [32m✓[39m reports an absent row[32m 5[2mms[22m[39m
     [32m✓[39m accepts a valid document[32m 1[2mms[22m[39m
     [32m✓[39m keeps the raw value for repair when the JSON is broken[32m 0[2mms[22m[39m
     [32m✓[39m rejects an unsupported schema version[32m 0[2mms[22m[39m
     [32m✓[39m rejects a document with no usable revision[32m 0[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with a non-boolean enabled[32m 0[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with malformed zones or rates[32m 1[2mms[22m[39m
     [32m✓[39m rejects a schema 2 document with an invalid packaging weight[32m 0[2mms[22m[39m
     [32m✓[39m normalizes a schema 1 flat rate in memory[32m 1[2mms[22m[39m
     [32m✓[39m inherits build-time zones and the legacy enabled override when absent[32m 2[2mms[22m[39m
     [32m✓[39m lets a valid document replace build-time configuration entirely[32m 0[2mms[22m[39m
     [32m✓[39m fails closed on an invalid document instead of restoring build-time rates[32m 0[2mms[22m[39m
     [32m✓[39m fails closed on an over-cap build-time configuration[32m 1[2mms[22m[39m
     [32m✓[39m accepts a legacy threshold-only zone with no rates[32m 1[2mms[22m[39m
[31m     [31m×[31m still rejects a build-time zone with neither rates nor a threshold[39m[32m 12[2mms[22m[39m
     [32m✓[39m accepts an ordinary build-time configuration[32m 0[2mms[22m[39m
     [32m✓[39m allows a disabled store with no zones[32m 0[2mms[22m[39m
     [32m✓[39m accepts a well-formed document[32m 0[2mms[22m[39m
[31m     [31m×[31m requires a zone and rate before enabling[39m[32m 2[2mms[22m[39m
     [32m✓[39m rejects a country appearing in two zones[32m 33[2mms[22m[39m
[31m     [31m×[31m rejects duplicate zone names case-insensitively[39m[32m 1[2mms[22m[39m
     [32m✓[39m rejects an unknown country code[32m 0[2mms[22m[39m
[31m     [31m×[31m keeps the catch-all alone and last[39m[32m 1[2mms[22m[39m
[31m     [31m×[31m rejects duplicate rate labels within a zone[39m[32m 3[2mms[22m[39m
     [32m✓[39m reserves the free-shipping label while a threshold is set[32m 0[2mms[22m[39m
     [32m✓[39m enforces the five-option ceiling with the synthesized free option[32m 0[2mms[22m[39m
[31m     [31m×[31m requires strictly increasing band maxima[39m[32m 1[2mms[22m[39m
[31m     [31m×[31m allows no maximum only on the final band[39m[32m 1[2mms[22m[39m
     [32m✓[39m accepts a pickup rate and validates its fee like a flat price[32m 0[2mms[22m[39m
[31m     [31m×[31m requires at least one band on a weight rate[39m[32m 0[2mms[22m[39m
[31m     [31m×[31m names zones deterministically[39m[32m 2[2mms[22m[39m
[31m     [31m×[31m builds an editable candidate from raw build-time values[39m[32m 5[2mms[22m[39m
     [32m✓[39m shows offending legacy values even when the storefront fails closed[32m 1[2mms[22m[39m
     [32m✓[39m round-trips amounts and weights into editable strings[32m 2[2mms[22m[39m
     [32m✓[39m parses a complete submission into a valid document[32m 6[2mms[22m[39m
     [32m✓[39m preserves order and ignores unreferenced rows[32m 1[2mms[22m[39m
     [32m✓[39m parses a pickup rate from the editor[32m 0[2mms[22m[39m
     [32m✓[39m scales amounts by the currency, not by a hardcoded 100[32m 1[2mms[22m[39m
     [32m✓[39m reports a band weight the merchant mistyped[32m 4[2mms[22m[39m
     [32m✓[39m is stable for the same bytes and differs for a repair[32m 11[2mms[22m[39m
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

 [32m✓[39m src/features/shipping/calculator.test.ts [2m([22m[2m34 tests[22m[2m)[22m[32m 261[2mms[22m[39m
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

 [32m✓[39m src/features/email/outbox.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 167[2mms[22m[39m
 [31m❯[39m src/features/shipping/labels.test.ts [2m([22m[2m30 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 85[2mms[22m[39m
     [32m✓[39m pins the wire shape: grams, uppercased countries, synchronous rating[32m 3[2mms[22m[39m
     [32m✓[39m measures in inches for imperial stores[32m 0[2mms[22m[39m
     [32m✓[39m omits empty street2 rather than sending a blank[32m 0[2mms[22m[39m
     [32m✓[39m parses dimensions and converts weight from the store unit[32m 0[2mms[22m[39m
[31m     [31m×[31m refuses missing or non-positive fields with a message[39m[32m 7[2mms[22m[39m
     [32m✓[39m bounds a single dimension at ten metres[32m 1[2mms[22m[39m
     [32m✓[39m extracts, prices in cents, and sorts cheapest first[32m 1[2mms[22m[39m
     [32m✓[39m returns empty for a shipment with no rates[32m 0[2mms[22m[39m
     [32m✓[39m maps Shippo providers onto tracking codes, with a linkless fallback[32m 1[2mms[22m[39m
     [32m✓[39m a 4xx refusal is definite[32m 49[2mms[22m[39m
     [32m✓[39m an ERROR transaction is definite[32m 2[2mms[22m[39m
     [32m✓[39m a 5xx is ambiguous — the charge may have landed[32m 1[2mms[22m[39m
     [32m✓[39m a network failure is ambiguous[32m 1[2mms[22m[39m
     [32m✓[39m a QUEUED answer without a label is ambiguous, not failed[32m 1[2mms[22m[39m
     [32m✓[39m a clean success carries the transaction id for the audit trail[32m 1[2mms[22m[39m
     [32m✓[39m binds the order id into transaction metadata[32m 1[2mms[22m[39m
     [32m✓[39m carries the order id so the dashboard can cross-reference[32m 0[2mms[22m[39m
     [32m✓[39m treats an empty page as pending — absence is not proof of no purchase[32m 1[2mms[22m[39m
     [32m✓[39m treats a missing results property as inconclusive, changing nothing[32m 3[2mms[22m[39m
     [32m✓[39m only an explicit terminal ERROR on OUR rate proves 'none'[32m 1[2mms[22m[39m
     [32m✓[39m a later SUCCESS is recoverable even beside an earlier ERROR[32m 3[2mms[22m[39m
     [32m✓[39m QUEUED, WAITING, and REFUNDPENDING stay pending — unresolved money[32m 2[2mms[22m[39m
     [32m✓[39m REFUNDREJECTED means the purchased label stands[32m 1[2mms[22m[39m
     [32m✓[39m REFUNDED is its own audited terminal state, carrying the original label[32m 1[2mms[22m[39m
     [32m✓[39m unresolved money outranks a refunded transaction for the same rate[32m 0[2mms[22m[39m
     [32m✓[39m a refunded transaction plus terminal errors is safely refunded[32m 1[2mms[22m[39m
     [32m✓[39m an incomplete SUCCESS is a reconciliation error, never a reopen[32m 1[2mms[22m[39m
     [32m✓[39m an unknown status is a reconciliation error, never a reopen[32m 0[2mms[22m[39m
     [32m✓[39m matches the rate EXACTLY — same-order metadata cannot substitute[32m 0[2mms[22m[39m
     [32m✓[39m accepts an expanded rate object as the exact match[32m 1[2mms[22m[39m
 [32m✓[39m src/features/pages/markdown.test.ts [2m([22m[2m39 tests[22m[2m)[22m[32m 52[2mms[22m[39m
 [32m✓[39m test/scripts/deploy-plan.test.mjs [2m([22m[2m26 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [32m✓[39m test/storefront/prose-source.test.mjs [2m([22m[2m37 tests[22m[2m)[22m[32m 25[2mms[22m[39m
 [32m✓[39m test/storefront/productDetail.test.ts [2m([22m[2m23 tests[22m[2m)[22m[32m 91[2mms[22m[39m
 [32m✓[39m test/storefront/shell.test.ts [2m([22m[2m19 tests[22m[2m)[22m[32m 90[2mms[22m[39m
 [31m❯[39m test/storefront/catalog.test.ts [2m([22m[2m18 tests[22m[2m | [22m[31m3 failed[39m[2m)[22m[32m 120[2mms[22m[39m
     [32m✓[39m names sort and direction explicitly, defaults included[32m 3[2mms[22m[39m
[31m     [31m×[31m flips direction on the field already sorting the list[39m[32m 10[2mms[22m[39m
[31m     [31m×[31m applies each inactive field its own natural direction[39m[32m 2[2mms[22m[39m
     [32m✓[39m drops the page when the ordering changes[32m 1[2mms[22m[39m
     [32m✓[39m stays on the path it was given[32m 1[2mms[22m[39m
     [32m✓[39m produces nothing to render for a single page[32m 1[2mms[22m[39m
     [32m✓[39m omits page=1 so the first page has one URL, not two[32m 0[2mms[22m[39m
     [32m✓[39m carries a non-default sort through every page link[32m 0[2mms[22m[39m
     [32m✓[39m elides the middle of a long series[32m 4[2mms[22m[39m
[31m     [31m×[31m renders headings, categories, and cards[39m[32m 65[2mms[22m[39m
     [32m✓[39m announces an empty catalog instead of rendering a blank grid[32m 5[2mms[22m[39m
     [32m✓[39m keeps pagination a labelled landmark with rel hints[32m 3[2mms[22m[39m
     [32m✓[39m hides pagination entirely on a single page[32m 2[2mms[22m[39m
     [32m✓[39m marks the sorted field for assistive technology[32m 5[2mms[22m[39m
     [32m✓[39m gives the first card image priority and no others[32m 3[2mms[22m[39m
     [32m✓[39m publishes no numeric row identifiers[32m 3[2mms[22m[39m
     [32m✓[39m satisfies the same model without using ProductCard at all[32m 2[2mms[22m[39m
     [32m✓[39m renders its own empty state from the same model[32m 4[2mms[22m[39m
 [32m✓[39m test/scripts/rollout-gates.test.mjs [2m([22m[2m21 tests[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m src/features/products/image.test.ts [2m([22m[2m15 tests[22m[2m)[22m[32m 39[2mms[22m[39m
 [32m✓[39m src/features/shipping/weight.test.ts [2m([22m[2m25 tests[22m[2m)[22m[33m 382[2mms[22m[39m
 [31m❯[39m test/storefront/productCard.test.ts [2m([22m[2m12 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 93[2mms[22m[39m
     [32m✓[39m exposes the public ID, never the row ID[32m 11[2mms[22m[39m
     [32m✓[39m refuses a row without a public ID rather than leaking the row ID[32m 1[2mms[22m[39m
     [32m✓[39m reports availability as a boolean, never a count[32m 2[2mms[22m[39m
     [32m✓[39m resolves original delivery to a plain URL with no ladder[32m 1[2mms[22m[39m
     [32m✓[39m resolves cloudflare delivery into a real srcset[32m 1[2mms[22m[39m
     [32m✓[39m falls back to the placeholder when a product has no image[32m 0[2mms[22m[39m
     [32m✓[39m gives the priority image the wider fallback candidate[32m 1[2mms[22m[39m
     [32m✓[39m renders from props alone[32m 50[2mms[22m[39m
     [32m✓[39m never publishes a stock count, in or out of stock[32m 5[2mms[22m[39m
     [32m✓[39m emits eager/high only for the LCP card[32m 4[2mms[22m[39m
     [32m✓[39m never fades the LCP image[32m 2[2mms[22m[39m
[31m     [31m×[31m satisfies the same contract with different anatomy[39m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/navigation/db.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/products/form.test.ts [2m([22m[2m16 tests[22m[2m)[22m[32m 85[2mms[22m[39m
 [32m✓[39m test/storefront/productDetailLoader.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 58[2mms[22m[39m
 [32m✓[39m test/storefront/theme-resolver.test.mjs [2m([22m[2m29 tests[22m[2m)[22m[32m 34[2mms[22m[39m
 [32m✓[39m src/features/payments/stripeCountries.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 16[2mms[22m[39m
 [32m✓[39m src/features/cache/public.test.ts [2m([22m[2m35 tests[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m src/features/media/dimensions.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m test/storefront/boundary.test.mjs [2m([22m[2m12 tests[22m[2m)[22m[33m 1065[2mms[22m[39m
 [32m✓[39m test/storefront/admin-isolation.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m src/features/ids/leakGate.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 36[2mms[22m[39m
 [32m✓[39m src/features/catalog/serialize.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 31[2mms[22m[39m
 [32m✓[39m src/features/auth/access.test.ts [2m([22m[2m8 tests[22m[2m)[22m[33m 659[2mms[22m[39m
 [32m✓[39m src/features/payments/opennode.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 86[2mms[22m[39m
 [31m❯[39m src/features/settings/availability.test.ts [2m([22m[2m5 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 18[2mms[22m[39m
     [32m✓[39m requires the vault and both Stripe secrets for Stripe-only features[32m 4[2mms[22m[39m
     [32m✓[39m requires a usable email provider for customer accounts[32m 1[2mms[22m[39m
     [32m✓[39m reports binding-backed features as unavailable when bindings are absent[32m 1[2mms[22m[39m
     [32m✓[39m requires both Turnstile keys and the vault[32m 0[2mms[22m[39m
[31m     [31m×[31m requires the selected Lightning backend URL and credential[39m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/pages/layouts.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/orders/filter.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/search/vector.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 48[2mms[22m[39m
 [32m✓[39m test/storefront/shell-source.test.mjs [2m([22m[2m7 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/cart/key.test.ts [2m([22m[2m14 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/products/filter.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [31m❯[39m src/features/pages/form.test.ts [2m([22m[2m13 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 82[2mms[22m[39m
     [32m✓[39m accepts a minimal page[32m 39[2mms[22m[39m
     [32m✓[39m accepts a known layout preset[32m 2[2mms[22m[39m
     [32m✓[39m falls back to the default layout for an unknown preset[32m 0[2mms[22m[39m
[31m     [31m×[31m requires a title[39m[32m 10[2mms[22m[39m
     [32m✓[39m rejects an over-long title[32m 0[2mms[22m[39m
     [32m✓[39m accepts a title at the limit[32m 0[2mms[22m[39m
     [32m✓[39m rejects a body over 100,000 characters[32m 24[2mms[22m[39m
     [32m✓[39m treats a present checkbox as published[32m 0[2mms[22m[39m
     [32m✓[39m treats an absent checkbox as draft[32m 1[2mms[22m[39m
     [32m✓[39m preserves body whitespace, which is meaningful in Markdown[32m 1[2mms[22m[39m
     [32m✓[39m slugifies a title[32m 1[2mms[22m[39m
     [32m✓[39m falls back to `page`, not the product helper default[32m 0[2mms[22m[39m
     [32m✓[39m still honours a title that genuinely says "product"[32m 0[2mms[22m[39m
 [32m✓[39m src/features/media/upload.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 34[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/rate.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 71[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/phoenixd.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 85[2mms[22m[39m
 [32m✓[39m src/features/auth/rateLimit.test.ts [2m([22m[2m12 tests[22m[2m)[22m[32m 53[2mms[22m[39m
 [31m❯[39m src/features/media/usage.test.ts [2m([22m[2m6 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 26[2mms[22m[39m
     [32m✓[39m links a product to its edit screen by public ID[32m 6[2mms[22m[39m
     [32m✓[39m links a page to its editor by public ID[32m 1[2mms[22m[39m
[31m     [31m×[31m links the logo to settings, where it is chosen[39m[32m 12[2mms[22m[39m
     [32m✓[39m lists every use of a file shared across features[32m 1[2mms[22m[39m
     [32m✓[39m returns nothing for unused media, which is what makes it deletable[32m 1[2mms[22m[39m
     [32m✓[39m agrees with the deletion message about what counts as a use[32m 1[2mms[22m[39m
 [32m✓[39m test/scripts/migrations-remote-safe.test.mjs [2m([22m[2m41 tests[22m[2m)[22m[32m 29[2mms[22m[39m
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

 [32m✓[39m src/features/cache/purge.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m test/storefront/contentPage.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 66[2mms[22m[39m
 [31m❯[39m src/features/email/orderRefunded.test.ts [2m([22m[2m4 tests[22m[2m | [22m[31m3 failed[39m[2m)[22m[32m 48[2mms[22m[39m
     [32m✓[39m prices every amount in the order currency, not the store default[32m 28[2mms[22m[39m
[31m     [31m×[31m shows the remaining paid amount for a partial refund[39m[32m 11[2mms[22m[39m
[31m     [31m×[31m omits the remaining amount once fully refunded[39m[32m 3[2mms[22m[39m
[31m     [31m×[31m reports a running total only when an earlier refund exists[39m[32m 4[2mms[22m[39m
 [32m✓[39m src/features/products/sort.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m src/features/auth/turnstile.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 53[2mms[22m[39m
 [32m✓[39m src/features/settings/home.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/ids/token.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 90[2mms[22m[39m
 [32m✓[39m src/features/auth/session.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 31[2mms[22m[39m
 [32m✓[39m src/pagination.test.ts [2m([22m[2m10 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/money.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 31[2mms[22m[39m
 [31m❯[39m src/features/email/orderNotification.test.ts [2m([22m[2m2 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[32m 39[2mms[22m[39m
[31m     [31m×[31m shows the sequential order number and public ID in the owner subject and message[39m[32m 36[2mms[22m[39m
[31m     [31m×[31m does not render null when a legacy order has no public ID[39m[32m 2[2mms[22m[39m
 [32m✓[39m src/features/auth/formOrigin.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 42[2mms[22m[39m
 [32m✓[39m src/features/orders/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/payments/lightning/lnbits.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 46[2mms[22m[39m
 [32m✓[39m src/features/cart/cart.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/cache/deployPurgeAuth.test.ts [2m([22m[2m9 tests[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m src/features/settings/db.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/cache/tags.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 34[2mms[22m[39m
 [32m✓[39m src/features/secrets/crypto.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 33[2mms[22m[39m
 [32m✓[39m src/features/auth/password.test.ts [2m([22m[2m5 tests[22m[2m)[22m[33m 303[2mms[22m[39m
 [32m✓[39m src/pages/sitemap.xml.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/features/customers/sort.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/ids/publicId.truncate.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m src/features/auth/token.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 13[2mms[22m[39m
 [32m✓[39m src/features/products/digitalFile.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m src/features/products/stock.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m src/features/auth/accessGate.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/orders/number.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m src/features/products/search.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/email/orderPolicy.test.ts [2m([22m[2m11 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/storage/r2.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/products/related.test.ts [2m([22m[2m5 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/catalog/query.test.ts [2m([22m[2m3 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/features/http/origin.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m test/storefront/smoke.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 51[2mms[22m[39m
 [32m✓[39m src/features/orders/reservations.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m src/features/search/query.test.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 6[2mms[22m[39m
 [32m✓[39m src/features/products/slug.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/features/settings/timeZone.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 17[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 23 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m test/storefront/catalog.test.ts[2m > [22mbuildSortModel[2m > [22mflips direction on the field already sorting the list
[31m[1mAssertionError[22m: expected '价格' to be 'Price' // Object.is equality[39m

Expected: [32m"Price"[39m
Received: [31m"价格"[39m

[36m [2m❯[22m test/storefront/catalog.test.ts:[2m62:27[22m[39m
    [90m 60|[39m     const active = buildSortModel('/products', 'price', 'asc').options…
    [90m 61|[39m
    [90m 62|[39m     [34mexpect[39m(active[33m?.[39mlabel)[33m.[39m[34mtoBe[39m([32m'Price'[39m)[33m;[39m
    [90m   |[39m                           [31m^[39m
    [90m 63|[39m     [34mexpect[39m(active[33m?.[39mdirection)[33m.[39m[34mtoBe[39m([32m'asc'[39m)[33m;[39m
    [90m 64|[39m     [34mexpect[39m(active[33m?.[39mhref)[33m.[39m[34mtoContain[39m([32m'dir=desc'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/23]⎯[22m[39m

[41m[1m FAIL [22m[49m test/storefront/catalog.test.ts[2m > [22mbuildSortModel[2m > [22mapplies each inactive field its own natural direction
[31m[1mAssertionError[22m: expected undefined to be false // Object.is equality[39m

[32m- Expected:[39m
false

[31m+ Received:[39m
undefined

[36m [2m❯[22m test/storefront/catalog.test.ts:[2m72:27[22m[39m
    [90m 70|[39m     )[33m;[39m
    [90m 71|[39m
    [90m 72|[39m     [34mexpect[39m(name[33m?.[39mcurrent)[33m.[39m[34mtoBe[39m([35mfalse[39m)[33m;[39m
    [90m   |[39m                           [31m^[39m
    [90m 73|[39m     [34mexpect[39m(name[33m?.[39mdirection)[33m.[39m[34mtoBeNull[39m()[33m;[39m
    [90m 74|[39m     [34mexpect[39m(name[33m?.[39mhref)[33m.[39m[34mtoContain[39m([32m'sort=name'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/23]⎯[22m[39m

[41m[1m FAIL [22m[49m test/storefront/catalog.test.ts[2m > [22mthe store-owned catalog[2m > [22mrenders headings, categories, and cards
[31m[1mAssertionError[22m: expected '<div class="mb-10"><p class="text-xs …' to contain '全部商品'[39m

Expected: [32m"全部商品"[39m
Received: [31m"<div class="mb-10"><p class="text-xs uppercase tracking-[0.25em] text-muted">Shop</p><h1 class="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">All products</h1></div><div class="mb-12 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted"><a href="/categories/apparel" class="border-b border-transparent pb-0.5 hover:border-brand hover:text-brand">Apparel</a></div><div class="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-xs uppercase tracking-widest text-muted"><span>排序</span><a href="/products?sort=newest&amp;dir=asc" aria-current="true" class="hover:text-brand text-brand">最新 ↓</a><a href="/products?sort=price&amp;dir=asc" class="hover:text-brand ">价格</a><a href="/products?sort=name&amp;dir=asc" class="hover:text-brand ">名称</a></div><ul class="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3"><li class="reveal group" style="animation-delay:0ms"><a href="/products/item-1" class="block"><div class="relative overflow-hidden rounded-md bg-surface"><img src="/placeholder.png" alt="Item 1" class="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" width="600" height="600" loading="eager" fetchpriority="high" decoding="async"></div><h2 class="mt-4 text-sm font-medium tracking-tight">Item 1</h2><p class="mt-1 text-sm tabular-nums text-muted">US$10.01</p></a></li><li class="reveal group" style="animation-delay:60ms"><a href="/products/item-2" class="block"><div class="relative overflow-hidden rounded-md bg-surface"><img src="/placeholder.png" alt="Item 2" class="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" width="600" height="600" loading="lazy" fetchpriority="auto" decoding="async" data-image-fade></div><h2 class="mt-4 text-sm font-medium tracking-tight">Item 2</h2><p class="mt-1 text-sm tabular-nums text-muted">US$10.02</p></a></li></ul><nav class="mt-14 flex items-center justify-center gap-1" aria-label="分页"><a href="/products" aria-current="page" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand font-medium text-brand">1</a><a href="/products?page=2" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand ">2</a><a href="/products?page=3" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand ">3</a><a href="/products?page=2" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand" rel="next">下一页</a></nav>"[39m

[36m [2m❯[22m test/storefront/catalog.test.ts:[2m129:18[22m[39m
    [90m127|[39m     [35mconst[39m html [33m=[39m [35mawait[39m [34mrender[39m([33mCatalog[39m[33m,[39m [34mmodel[39m())[33m;[39m
    [90m128|[39m
    [90m129|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'全部商品'[39m)[33m;[39m
    [90m   |[39m                  [31m^[39m
    [90m130|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'href="/categories/apparel"'[39m)[33m;[39m
    [90m131|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'href="/products/item-1"'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/23]⎯[22m[39m

[41m[1m FAIL [22m[49m test/storefront/productCard.test.ts[2m > [22man independently authored card[2m > [22msatisfies the same contract with different anatomy
[31m[1mAssertionError[22m: expected '<li class="alt-card"><figure><img src…' to contain '已售罄'[39m

Expected: [32m"已售罄"[39m
Received: [31m"<li class="alt-card"><figure><img src="/images/media/sample-tee.jpg" alt="Sample Tee" class="alt-card__image" width="600" height="600" loading="lazy" fetchpriority="auto" decoding="async"><figcaption><p class="alt-card__price">US$24.00</p><a href="/products/sample-tee">Sample Tee</a><p class="alt-card__availability">Sold out</p></figcaption></figure></li>"[39m

[36m [2m❯[22m test/storefront/productCard.test.ts:[2m156:18[22m[39m
    [90m154|[39m
    [90m155|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'<figure>'[39m)[33m;[39m
    [90m156|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'已售罄'[39m)[33m;[39m
    [90m   |[39m                  [31m^[39m
    [90m157|[39m     [34mexpect[39m(html)[33m.[39m[34mtoContain[39m([32m'href="/products/sample-tee"'[39m)[33m;[39m
    [90m158|[39m     [90m// Structurally different from the default, which is the point.[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderNotification.test.ts[2m > [22morderNotificationEmail[2m > [22mshows the sequential order number and public ID in the owner subject and message
[31m[1mAssertionError[22m: expected '【Minshop】新订单 105 - ord_zdpyy315je' to be 'New Minshop order #105 - ord_zdpyy315…' // Object.is equality[39m

Expected: [32m"[7mNew [27mMinshop[7m order #[27m105 - ord_zdpyy315je"[39m
Received: [31m"[7m【[27mMinshop[7m】新订单 [27m105 - ord_zdpyy315je"[39m

[36m [2m❯[22m src/features/email/orderNotification.test.ts:[2m49:29[22m[39m
    [90m 47|[39m
    [90m 48|[39m     // ASCII hyphen: keeps the header out of RFC 2047 encoded-words in…
    [90m 49|[39m     expect(message.subject).toBe('New Minshop order #105 - ord_zdpyy31…
    [90m   |[39m                             [31m^[39m
    [90m 50|[39m     [35mfor[39m ([35mconst[39m body [35mof[39m [message[33m.[39mtext[33m,[39m message[33m.[39mhtml]) {
    [90m 51|[39m       [34mexpect[39m(body[33m.[39m[34mtoLowerCase[39m())[33m.[39m[34mtoContain[39m([32m'order #105'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderNotification.test.ts[2m > [22morderNotificationEmail[2m > [22mdoes not render null when a legacy order has no public ID
[31m[1mAssertionError[22m: expected '【Minshop】新订单 105' to be 'New Minshop order #105' // Object.is equality[39m

Expected: [32m"[7mNew [27mMinshop[7m order #[27m105"[39m
Received: [31m"[7m【[27mMinshop[7m】新订单 [27m105"[39m

[36m [2m❯[22m src/features/email/orderNotification.test.ts:[2m66:29[22m[39m
    [90m 64|[39m     )[33m;[39m
    [90m 65|[39m
    [90m 66|[39m     [34mexpect[39m(message[33m.[39msubject)[33m.[39m[34mtoBe[39m([32m'New Minshop order #105'[39m)[33m;[39m
    [90m   |[39m                             [31m^[39m
    [90m 67|[39m     [34mexpect[39m(message[33m.[39mtext)[33m.[39m[34mtoContain[39m([32m'Public ID: —'[39m)[33m;[39m
    [90m 68|[39m     [34mexpect[39m(message[33m.[39mhtml)[33m.[39mnot[33m.[39m[34mtoContain[39m([32m'null'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderRefunded.test.ts[2m > [22morderRefundedEmail[2m > [22mshows the remaining paid amount for a partial refund
[31m[1mAssertionError[22m: expected '订单 1041 有一笔退款。\n\n本次退款：€25.00\n剩余已付：€…' to contain 'Still paid'[39m

[32m- Expected[39m
[31m+ Received[39m

[32m- Still paid[39m
[31m+ 订单 1041 有一笔退款。[39m
[31m+[39m
[31m+ 本次退款：€25.00[39m
[31m+ 剩余已付：€75.00[39m
[31m+[39m
[31m+ 银行卡退款一般 5-10 个工作日到账，具体取决于你的银行。[39m

[36m [2m❯[22m src/features/email/orderRefunded.test.ts:[2m49:22[22m[39m
    [90m 47|[39m   [34mit[39m([32m'shows the remaining paid amount for a partial refund'[39m[33m,[39m () [33m=>[39m {
    [90m 48|[39m     const msg = orderRefundedEmail(order({ refunded_cents: 2500 }), 25…
    [90m 49|[39m     [34mexpect[39m(msg[33m.[39mtext)[33m.[39m[34mtoContain[39m([32m'Still paid'[39m)[33m;[39m
    [90m   |[39m                      [31m^[39m
    [90m 50|[39m     [34mexpect[39m(msg[33m.[39msubject)[33m.[39mnot[33m.[39m[34mtoContain[39m([32m'has been refunded'[39m)[33m;[39m
    [90m 51|[39m   })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderRefunded.test.ts[2m > [22morderRefundedEmail[2m > [22momits the remaining amount once fully refunded
[31m[1mAssertionError[22m: expected '你的 S 订单 1041 已退款' to contain 'has been refunded'[39m

Expected: [32m"has been refunded"[39m
Received: [31m"你的 S 订单 1041 已退款"[39m

[36m [2m❯[22m src/features/email/orderRefunded.test.ts:[2m61:25[22m[39m
    [90m 59|[39m     )[33m;[39m
    [90m 60|[39m     [34mexpect[39m(msg[33m.[39mtext)[33m.[39mnot[33m.[39m[34mtoContain[39m([32m'Still paid'[39m)[33m;[39m
    [90m 61|[39m     [34mexpect[39m(msg[33m.[39msubject)[33m.[39m[34mtoContain[39m([32m'has been refunded'[39m)[33m;[39m
    [90m   |[39m                         [31m^[39m
    [90m 62|[39m   })[33m;[39m
    [90m 63|[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/email/orderRefunded.test.ts[2m > [22morderRefundedEmail[2m > [22mreports a running total only when an earlier refund exists
[31m[1mAssertionError[22m: expected '订单 1041 有一笔退款。\n\n本次退款：€20.00\n累计退款：€…' to contain 'Total refunded so far'[39m

[32m- Expected[39m
[31m+ Received[39m

[32m- Total refunded so far[39m
[31m+ 订单 1041 有一笔退款。[39m
[31m+[39m
[31m+ 本次退款：€20.00[39m
[31m+ 累计退款：€45.00[39m
[31m+ 剩余已付：€55.00[39m
[31m+[39m
[31m+ 银行卡退款一般 5-10 个工作日到账，具体取决于你的银行。[39m

[36m [2m❯[22m src/features/email/orderRefunded.test.ts:[2m67:25[22m[39m
    [90m 65|[39m     // Second partial: this refund is 2000, but 4500 has now gone back…
    [90m 66|[39m     const second = orderRefundedEmail(order({ refunded_cents: 4500 }),…
    [90m 67|[39m     [34mexpect[39m(second[33m.[39mtext)[33m.[39m[34mtoContain[39m([32m'Total refunded so far'[39m)[33m;[39m
    [90m   |[39m                         [31m^[39m
    [90m 68|[39m     const first = orderRefundedEmail(order({ refunded_cents: 2500 }), …
    [90m 69|[39m     [34mexpect[39m(first[33m.[39mtext)[33m.[39mnot[33m.[39m[34mtoContain[39m([32m'Total refunded so far'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/media/usage.test.ts[2m > [22musageLinks[2m > [22mlinks the logo to settings, where it is chosen
[31m[1mAssertionError[22m: expected [ { href: '/admin/settings', …(3) } ] to deeply equal [ { href: '/admin/settings', …(3) } ][39m

[32m- Expected[39m
[31m+ Received[39m

[2m  [[22m
[2m    {[22m
[2m      "href": "/admin/settings",[22m
[2m      "kind": "logo",[22m
[32m-     "label": "Store logo",[39m
[32m-     "title": "Change the logo in Settings",[39m
[31m+     "label": "店铺 Logo",[39m
[31m+     "title": "到设置里更换 Logo",[39m
[2m    },[22m
[2m  ][22m

[36m [2m❯[22m src/features/media/usage.test.ts:[2m33:47[22m[39m
    [90m 31|[39m   [34mit[39m([32m'links the logo to settings, where it is chosen'[39m[33m,[39m () [33m=>[39m {
    [90m 32|[39m     // The logo is a setting rather than a row, so there is no per-ite…
    [90m 33|[39m     [34mexpect[39m([34musageLinks[39m([34musage[39m({ logo[33m:[39m [35mtrue[39m })))[33m.[39m[34mtoEqual[39m([
    [90m   |[39m                                               [31m^[39m
    [90m 34|[39m       { href: '/admin/settings', label: 'Store logo', kind: 'logo', ti…
    [90m 35|[39m     ])[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/pages/form.test.ts[2m > [22mparsePageForm[2m > [22mrequires a title
[31m[1mAssertionError[22m: expected { error: '请填写标题。' } to deeply equal { error: 'Title is required.' }[39m

[32m- Expected[39m
[31m+ Received[39m

[2m  {[22m
[32m-   "error": "Title is required.",[39m
[31m+   "error": "请填写标题。",[39m
[2m  }[22m

[36m [2m❯[22m src/features/pages/form.test.ts:[2m40:51[22m[39m
    [90m 38|[39m
    [90m 39|[39m   [34mit[39m([32m'requires a title'[39m[33m,[39m () [33m=>[39m {
    [90m 40|[39m     expect(parsePageForm(form({ title: '   ' }))).toEqual({ error: 'Ti…
    [90m   |[39m                                                   [31m^[39m
    [90m 41|[39m   })[33m;[39m
    [90m 42|[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/settings/availability.test.ts[2m > [22msettings availability[2m > [22mrequires the selected Lightning backend URL and credential
[31m[1mAssertionError[22m: expected '请填写 phoenixd 密码。' to be 'Add the phoenixd password.' // Object.is equality[39m

Expected: [32m"[7mAdd the[27m phoenixd [7mpassword.[27m"[39m
Received: [31m"[7m请填写[27m phoenixd [7m密码。[27m"[39m

[36m [2m❯[22m src/features/settings/availability.test.ts:[2m91:84[22m[39m
    [90m 89|[39m       [32m'Add the LNbits invoice/read key.'[39m[33m,[39m
    [90m 90|[39m     )[33m;[39m
    [90m 91|[39m     expect(lightningConfigurationError('phoenixd', 'https://node.examp…
    [90m   |[39m                                                                                    [31m^[39m
    [90m 92|[39m       [32m'Add the phoenixd password.'[39m[33m,[39m
    [90m 93|[39m     )[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/labels.test.ts[2m > [22mparseParcelForm[2m > [22mrefuses missing or non-positive fields with a message
[31m[1mAssertionError[22m: expected '请以正数填写包裹打包后的重量。' to match /weight/[39m

[32m- Expected:[39m
/weight/

[31m+ Received:[39m
"请以正数填写包裹打包后的重量。"

[36m [2m❯[22m src/features/shipping/labels.test.ts:[2m74:96[22m[39m
    [90m 72|[39m   [34mit[39m([32m'refuses missing or non-positive fields with a message'[39m[33m,[39m () [33m=>[39m {
    [90m 73|[39m     expect(parseParcelForm({ length: '', width: '9', height: '3', weig…
    [90m 74|[39m     expect(parseParcelForm({ length: '12', width: '9', height: '3', we…
    [90m   |[39m                                                                                                [31m^[39m
    [90m 75|[39m     expect(parseParcelForm({ length: '12', width: '9', height: '3', we…
    [90m 76|[39m   })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22meffectiveShippingConfig[2m > [22mstill rejects a build-time zone with neither rates nor a threshold
[31m[1mAssertionError[22m: expected '请至少添加一个运费项。' to match /at least one shipping rate/i[39m

[32m- Expected:[39m
/at least one shipping rate/i

[31m+ Received:[39m
"请至少添加一个运费项。"

[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m187:46[22m[39m
    [90m185|[39m       zones[33m:[39m [{ countries[33m:[39m [[32m'US'[39m][33m,[39m rates[33m:[39m [][33m,[39m freeOverCents[33m:[39m [35mnull[39m }][33m,[39m
    [90m186|[39m     }[33m;[39m
    [90m187|[39m     expect(validateBuildTimeShipping(empty)).toMatch(/at least one shi…
    [90m   |[39m                                              [31m^[39m
    [90m188|[39m   })[33m;[39m
    [90m189|[39m   [34mit[39m([32m'accepts an ordinary build-time configuration'[39m[33m,[39m () [33m=>[39m {

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[14/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mrequires a zone and rate before enabling
[31m[1mAssertionError[22m: expected [ '开启配送前，请至少添加一个包含运费项的区域。' ] to include 'Add at least one zone with one rate b…'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m205:42[22m[39m
    [90m203|[39m   })[33m;[39m
    [90m204|[39m   [34mit[39m([32m'requires a zone and rate before enabling'[39m[33m,[39m () [33m=>[39m {
    [90m205|[39m     [34mexpect[39m([34mmessages[39m([34mdoc[39m({ zones[33m:[39m [] })))[33m.[39m[34mtoContain[39m(
    [90m   |[39m                                          [31m^[39m
    [90m206|[39m       'Add at least one zone with one rate before turning shipping on.…
    [90m207|[39m     )[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[15/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mrejects duplicate zone names case-insensitively
[31m[1mAssertionError[22m: expected [ '已有其他区域使用该名称。' ] to include 'Another zone already uses this name.'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m225:27[22m[39m
    [90m223|[39m       ][33m,[39m
    [90m224|[39m     })[33m;[39m
    [90m225|[39m     expect(messages(two)).toContain('Another zone already uses this na…
    [90m   |[39m                           [31m^[39m
    [90m226|[39m   })[33m;[39m
    [90m227|[39m   [34mit[39m([32m'rejects an unknown country code'[39m[33m,[39m () [33m=>[39m {

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[16/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mkeeps the catch-all alone and last
[31m[1mAssertionError[22m: expected [ '「世界其他地区」不能与具体国家同时使用。' ] to include 'Rest of world cannot be combined with…'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m234:29[22m[39m
    [90m232|[39m   [34mit[39m([32m'keeps the catch-all alone and last'[39m[33m,[39m () [33m=>[39m {
    [90m233|[39m     const mixed = doc({ zones: [{ ...doc().zones[0]!, countries: ['*',…
    [90m234|[39m     expect(messages(mixed)).toContain('Rest of world cannot be combine…
    [90m   |[39m                             [31m^[39m
    [90m235|[39m     [35mconst[39m notLast [33m=[39m [34mdoc[39m({
    [90m236|[39m       zones[33m:[39m [

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[17/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mrejects duplicate rate labels within a zone
[31m[1mAssertionError[22m: expected [ '该区域内已有同名运费项。' ] to include 'Another rate in this zone uses this l…'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m255:28[22m[39m
    [90m253|[39m       ][33m,[39m
    [90m254|[39m     })[33m;[39m
    [90m255|[39m     expect(messages(dupe)).toContain('Another rate in this zone uses t…
    [90m   |[39m                            [31m^[39m
    [90m256|[39m   })[33m;[39m
    [90m257|[39m   it('reserves the free-shipping label while a threshold is set', () =…

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[18/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mrequires strictly increasing band maxima
[31m[1mAssertionError[22m: expected [ '每个区间的重量必须大于上一个。' ] to include 'Each band must be heavier than the on…'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m298:29[22m[39m
    [90m296|[39m       ][33m,[39m
    [90m297|[39m     })[33m;[39m
    [90m298|[39m     expect(messages(bands)).toContain('Each band must be heavier than …
    [90m   |[39m                             [31m^[39m
    [90m299|[39m   })[33m;[39m
    [90m300|[39m   [34mit[39m([32m'allows no maximum only on the final band'[39m[33m,[39m () [33m=>[39m {

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[19/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mallows no maximum only on the final band
[31m[1mAssertionError[22m: expected [ '只有最后一个区间可以不设上限。' ] to include 'Only the last band can have no maximu…'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m320:29[22m[39m
    [90m318|[39m       ][33m,[39m
    [90m319|[39m     })[33m;[39m
    [90m320|[39m     expect(messages(bands)).toContain('Only the last band can have no …
    [90m   |[39m                             [31m^[39m
    [90m321|[39m   })[33m;[39m
    [90m322|[39m   it('accepts a pickup rate and validates its fee like a flat price', …

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[20/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mvalidateShippingDocument[2m > [22mrequires at least one band on a weight rate
[31m[1mAssertionError[22m: expected [ '请至少添加一个重量区间。' ] to include 'Add at least one weight band.'[39m
[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m351:29[22m[39m
    [90m349|[39m       ][33m,[39m
    [90m350|[39m     })[33m;[39m
    [90m351|[39m     [34mexpect[39m([34mmessages[39m(empty))[33m.[39m[34mtoContain[39m([32m'Add at least one weight band.'[39m)[33m;[39m
    [90m   |[39m                             [31m^[39m
    [90m352|[39m   })[33m;[39m
    [90m353|[39m })[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[21/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mlegacy migration[2m > [22mnames zones deterministically
[31m[1mAssertionError[22m: expected '美国' to be 'United States' // Object.is equality[39m

Expected: [32m"United States"[39m
Received: [31m"美国"[39m

[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m357:39[22m[39m
    [90m355|[39m [34mdescribe[39m([32m'legacy migration'[39m[33m,[39m () [33m=>[39m {
    [90m356|[39m   [34mit[39m([32m'names zones deterministically'[39m[33m,[39m () [33m=>[39m {
    [90m357|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'US'[39m][33m,[39m [34m0[39m))[33m.[39m[34mtoBe[39m([32m'United States'[39m)[33m;[39m
    [90m   |[39m                                       [31m^[39m
    [90m358|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'*'[39m][33m,[39m [34m1[39m))[33m.[39m[34mtoBe[39m([32m'Rest of world'[39m)[33m;[39m
    [90m359|[39m     [34mexpect[39m([34mlegacyZoneName[39m([[32m'US'[39m[33m,[39m [32m'CA'[39m][33m,[39m [34m2[39m))[33m.[39m[34mtoBe[39m([32m'Zone 3'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[22/23]⎯[22m[39m

[41m[1m FAIL [22m[49m src/features/shipping/settings.test.ts[2m > [22mlegacy migration[2m > [22mbuilds an editable candidate from raw build-time values
[31m[1mAssertionError[22m: expected '美国' to be 'United States' // Object.is equality[39m

Expected: [32m"United States"[39m
Received: [31m"美国"[39m

[36m [2m❯[22m src/features/shipping/settings.test.ts:[2m364:34[22m[39m
    [90m362|[39m     [35mconst[39m model [33m=[39m [34mmigrationCandidate[39m(buildTime[33m,[39m [35mnull[39m[33m,[39m [32m'usd'[39m)[33m;[39m
    [90m363|[39m     [34mexpect[39m(model[33m.[39mrevision)[33m.[39m[34mtoBe[39m([34m0[39m)[33m;[39m
    [90m364|[39m     [34mexpect[39m(model[33m.[39mzones[[34m0[39m][33m![39m[33m.[39mname)[33m.[39m[34mtoBe[39m([32m'United States'[39m)[33m;[39m
    [90m   |[39m                                  [31m^[39m
    [90m365|[39m     expect(model.zones[0]!.rates.map((r) => r.amountValue)).toEqual(['…
    [90m366|[39m     [34mexpect[39m(model[33m.[39mzones[[34m0[39m][33m![39m[33m.[39mfreeOverValue)[33m.[39m[34mtoBe[39m([32m'50'[39m)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[23/23]⎯[22m[39m


[2m Test Files [22m [1m[31m9 failed[39m[22m[2m | [22m[1m[32m72 passed[39m[22m[90m (81)[39m
[2m      Tests [22m [1m[31m23 failed[39m[22m[2m | [22m[1m[32m883 passed[39m[22m[90m (906)[39m
[2m   Start at [22m 02:15:11
[2m   Duration [22m 9.48s[2m (transform 3.33s, setup 0ms, import 7.46s, tests 5.33s, environment 13ms)[22m


::error file=/home/runner/work/minshop/minshop/test/storefront/catalog.test.ts,title=test/storefront/catalog.test.ts > buildSortModel > flips direction on the field already sorting the list,line=62,column=27::AssertionError: expected '价格' to be 'Price' // Object.is equality%0A%0AExpected: "Price"%0AReceived: "价格"%0A%0A ❯ test/storefront/catalog.test.ts:62:27%0A%0A

::error file=/home/runner/work/minshop/minshop/test/storefront/catalog.test.ts,title=test/storefront/catalog.test.ts > buildSortModel > applies each inactive field its own natural direction,line=72,column=27::AssertionError: expected undefined to be false // Object.is equality%0A%0A- Expected:%0Afalse%0A%0A+ Received:%0Aundefined%0A%0A ❯ test/storefront/catalog.test.ts:72:27%0A%0A

::error file=/home/runner/work/minshop/minshop/test/storefront/catalog.test.ts,title=test/storefront/catalog.test.ts > the store-owned catalog > renders headings%2C categories%2C and cards,line=129,column=18::AssertionError: expected '<div class="mb-10"><p class="text-xs …' to contain '全部商品'%0A%0AExpected: "全部商品"%0AReceived: "<div class="mb-10"><p class="text-xs uppercase tracking-[0.25em] text-muted">Shop</p><h1 class="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">All products</h1></div><div class="mb-12 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted"><a href="/categories/apparel" class="border-b border-transparent pb-0.5 hover:border-brand hover:text-brand">Apparel</a></div><div class="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-xs uppercase tracking-widest text-muted"><span>排序</span><a href="/products?sort=newest&amp;dir=asc" aria-current="true" class="hover:text-brand text-brand">最新 ↓</a><a href="/products?sort=price&amp;dir=asc" class="hover:text-brand ">价格</a><a href="/products?sort=name&amp;dir=asc" class="hover:text-brand ">名称</a></div><ul class="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3"><li class="reveal group" style="animation-delay:0ms"><a href="/products/item-1" class="block"><div class="relative overflow-hidden rounded-md bg-surface"><img src="/placeholder.png" alt="Item 1" class="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" width="600" height="600" loading="eager" fetchpriority="high" decoding="async"></div><h2 class="mt-4 text-sm font-medium tracking-tight">Item 1</h2><p class="mt-1 text-sm tabular-nums text-muted">US$10.01</p></a></li><li class="reveal group" style="animation-delay:60ms"><a href="/products/item-2" class="block"><div class="relative overflow-hidden rounded-md bg-surface"><img src="/placeholder.png" alt="Item 2" class="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" width="600" height="600" loading="lazy" fetchpriority="auto" decoding="async" data-image-fade></div><h2 class="mt-4 text-sm font-medium tracking-tight">Item 2</h2><p class="mt-1 text-sm tabular-nums text-muted">US$10.02</p></a></li></ul><nav class="mt-14 flex items-center justify-center gap-1" aria-label="分页"><a href="/products" aria-current="page" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand font-medium text-brand">1</a><a href="/products?page=2" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand ">2</a><a href="/products?page=3" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand ">3</a><a href="/products?page=2" class="px-3 py-1.5 text-xs uppercase tracking-widest text-muted hover:text-brand" rel="next">下一页</a></nav>"%0A%0A ❯ test/storefront/catalog.test.ts:129:18%0A%0A

::error file=/home/runner/work/minshop/minshop/test/storefront/productCard.test.ts,title=test/storefront/productCard.test.ts > an independently authored card > satisfies the same contract with different anatomy,line=156,column=18::AssertionError: expected '<li class="alt-card"><figure><img src…' to contain '已售罄'%0A%0AExpected: "已售罄"%0AReceived: "<li class="alt-card"><figure><img src="/images/media/sample-tee.jpg" alt="Sample Tee" class="alt-card__image" width="600" height="600" loading="lazy" fetchpriority="auto" decoding="async"><figcaption><p class="alt-card__price">US$24.00</p><a href="/products/sample-tee">Sample Tee</a><p class="alt-card__availability">Sold out</p></figcaption></figure></li>"%0A%0A ❯ test/storefront/productCard.test.ts:156:18%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderNotification.test.ts,title=src/features/email/orderNotification.test.ts > orderNotificationEmail > shows the sequential order number and public ID in the owner subject and message,line=49,column=29::AssertionError: expected '【Minshop】新订单 105 - ord_zdpyy315je' to be 'New Minshop order #105 - ord_zdpyy315…' // Object.is equality%0A%0AExpected: "New Minshop order #105 - ord_zdpyy315je"%0AReceived: "【Minshop】新订单 105 - ord_zdpyy315je"%0A%0A ❯ src/features/email/orderNotification.test.ts:49:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderNotification.test.ts,title=src/features/email/orderNotification.test.ts > orderNotificationEmail > does not render null when a legacy order has no public ID,line=66,column=29::AssertionError: expected '【Minshop】新订单 105' to be 'New Minshop order #105' // Object.is equality%0A%0AExpected: "New Minshop order #105"%0AReceived: "【Minshop】新订单 105"%0A%0A ❯ src/features/email/orderNotification.test.ts:66:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderRefunded.test.ts,title=src/features/email/orderRefunded.test.ts > orderRefundedEmail > shows the remaining paid amount for a partial refund,line=49,column=22::AssertionError: expected '订单 1041 有一笔退款。\n\n本次退款：€25.00\n剩余已付：€…' to contain 'Still paid'%0A%0A- Expected%0A+ Received%0A%0A- Still paid%0A+ 订单 1041 有一笔退款。%0A+%0A+ 本次退款：€25.00%0A+ 剩余已付：€75.00%0A+%0A+ 银行卡退款一般 5-10 个工作日到账，具体取决于你的银行。%0A%0A ❯ src/features/email/orderRefunded.test.ts:49:22%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderRefunded.test.ts,title=src/features/email/orderRefunded.test.ts > orderRefundedEmail > omits the remaining amount once fully refunded,line=61,column=25::AssertionError: expected '你的 S 订单 1041 已退款' to contain 'has been refunded'%0A%0AExpected: "has been refunded"%0AReceived: "你的 S 订单 1041 已退款"%0A%0A ❯ src/features/email/orderRefunded.test.ts:61:25%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/email/orderRefunded.test.ts,title=src/features/email/orderRefunded.test.ts > orderRefundedEmail > reports a running total only when an earlier refund exists,line=67,column=25::AssertionError: expected '订单 1041 有一笔退款。\n\n本次退款：€20.00\n累计退款：€…' to contain 'Total refunded so far'%0A%0A- Expected%0A+ Received%0A%0A- Total refunded so far%0A+ 订单 1041 有一笔退款。%0A+%0A+ 本次退款：€20.00%0A+ 累计退款：€45.00%0A+ 剩余已付：€55.00%0A+%0A+ 银行卡退款一般 5-10 个工作日到账，具体取决于你的银行。%0A%0A ❯ src/features/email/orderRefunded.test.ts:67:25%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/media/usage.test.ts,title=src/features/media/usage.test.ts > usageLinks > links the logo to settings%2C where it is chosen,line=33,column=47::AssertionError: expected [ { href: '/admin/settings', …(3) } ] to deeply equal [ { href: '/admin/settings', …(3) } ]%0A%0A- Expected%0A+ Received%0A%0A  [%0A    {%0A      "href": "/admin/settings",%0A      "kind": "logo",%0A-     "label": "Store logo",%0A-     "title": "Change the logo in Settings",%0A+     "label": "店铺 Logo",%0A+     "title": "到设置里更换 Logo",%0A    },%0A  ]%0A%0A ❯ src/features/media/usage.test.ts:33:47%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/pages/form.test.ts,title=src/features/pages/form.test.ts > parsePageForm > requires a title,line=40,column=51::AssertionError: expected { error: '请填写标题。' } to deeply equal { error: 'Title is required.' }%0A%0A- Expected%0A+ Received%0A%0A  {%0A-   "error": "Title is required.",%0A+   "error": "请填写标题。",%0A  }%0A%0A ❯ src/features/pages/form.test.ts:40:51%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/settings/availability.test.ts,title=src/features/settings/availability.test.ts > settings availability > requires the selected Lightning backend URL and credential,line=91,column=84::AssertionError: expected '请填写 phoenixd 密码。' to be 'Add the phoenixd password.' // Object.is equality%0A%0AExpected: "Add the phoenixd password."%0AReceived: "请填写 phoenixd 密码。"%0A%0A ❯ src/features/settings/availability.test.ts:91:84%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/labels.test.ts,title=src/features/shipping/labels.test.ts > parseParcelForm > refuses missing or non-positive fields with a message,line=74,column=96::AssertionError: expected '请以正数填写包裹打包后的重量。' to match /weight/%0A%0A- Expected:%0A/weight/%0A%0A+ Received:%0A"请以正数填写包裹打包后的重量。"%0A%0A ❯ src/features/shipping/labels.test.ts:74:96%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > effectiveShippingConfig > still rejects a build-time zone with neither rates nor a threshold,line=187,column=46::AssertionError: expected '请至少添加一个运费项。' to match /at least one shipping rate/i%0A%0A- Expected:%0A/at least one shipping rate/i%0A%0A+ Received:%0A"请至少添加一个运费项。"%0A%0A ❯ src/features/shipping/settings.test.ts:187:46%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > requires a zone and rate before enabling,line=205,column=42::AssertionError: expected [ '开启配送前，请至少添加一个包含运费项的区域。' ] to include 'Add at least one zone with one rate b…'%0A ❯ src/features/shipping/settings.test.ts:205:42%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > rejects duplicate zone names case-insensitively,line=225,column=27::AssertionError: expected [ '已有其他区域使用该名称。' ] to include 'Another zone already uses this name.'%0A ❯ src/features/shipping/settings.test.ts:225:27%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > keeps the catch-all alone and last,line=234,column=29::AssertionError: expected [ '「世界其他地区」不能与具体国家同时使用。' ] to include 'Rest of world cannot be combined with…'%0A ❯ src/features/shipping/settings.test.ts:234:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > rejects duplicate rate labels within a zone,line=255,column=28::AssertionError: expected [ '该区域内已有同名运费项。' ] to include 'Another rate in this zone uses this l…'%0A ❯ src/features/shipping/settings.test.ts:255:28%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > requires strictly increasing band maxima,line=298,column=29::AssertionError: expected [ '每个区间的重量必须大于上一个。' ] to include 'Each band must be heavier than the on…'%0A ❯ src/features/shipping/settings.test.ts:298:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > allows no maximum only on the final band,line=320,column=29::AssertionError: expected [ '只有最后一个区间可以不设上限。' ] to include 'Only the last band can have no maximu…'%0A ❯ src/features/shipping/settings.test.ts:320:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > validateShippingDocument > requires at least one band on a weight rate,line=351,column=29::AssertionError: expected [ '请至少添加一个重量区间。' ] to include 'Add at least one weight band.'%0A ❯ src/features/shipping/settings.test.ts:351:29%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > legacy migration > names zones deterministically,line=357,column=39::AssertionError: expected '美国' to be 'United States' // Object.is equality%0A%0AExpected: "United States"%0AReceived: "美国"%0A%0A ❯ src/features/shipping/settings.test.ts:357:39%0A%0A

::error file=/home/runner/work/minshop/minshop/src/features/shipping/settings.test.ts,title=src/features/shipping/settings.test.ts > legacy migration > builds an editable candidate from raw build-time values,line=364,column=34::AssertionError: expected '美国' to be 'United States' // Object.is equality%0A%0AExpected: "United States"%0AReceived: "美国"%0A%0A ❯ src/features/shipping/settings.test.ts:364:34%0A%0A
```
- 结果: ❌ 有失败项（见上方日志）
