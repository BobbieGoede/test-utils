import { defineBuildConfig } from 'unbuild'

const isStub = process.argv.includes('--stub')

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/e2e',
    'src/experimental',
    'src/config',
    'src/module.ts',
    isStub ? { input: 'src/module-utils/', outDir: 'dist/module-utils', format: 'esm' } : 'src/module-utils/index.mjs',
    'src/vitest-environment',
    isStub ? { input: 'src/runtime-utils/', outDir: 'dist/runtime-utils', format: 'esm' } : 'src/runtime-utils/index.mjs',
    { input: 'src/runtime/', outDir: 'dist/runtime', format: 'esm' }
  ],
  externals: [
    "#app/entry",
    "#build/root-component.mjs",
    "#imports",
  ],
  failOnWarn: false,
})
