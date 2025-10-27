import { assert } from '@t8ngs/assert'
import { expect } from '@t8ngs/expect'
import { configure, processCLIArgs, run } from '@t8ngs/runner'
import { fileSystem } from '@t8ngs/fs'
import { snapshot } from '../index.js'
import { BASE_URL } from '../tests/helpers.js'

/*
|--------------------------------------------------------------------------
| Configure tests
|--------------------------------------------------------------------------
|
| The configure method accepts the configuration to configure the T8ngs
| tests runner.
|
| The first method call "processCliArgs" process the command line arguments
| and turns them into a config object. Using this method is not mandatory.
|
| Please consult t8ngs.com/runner-config for the config docs.
*/
processCLIArgs(process.argv.slice(2))
configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [
    snapshot(),
    assert(),
    expect(),
    fileSystem({
      basePath: BASE_URL,
      autoClean: true,
    }),
  ],
})

/*
|--------------------------------------------------------------------------
| Run tests
|--------------------------------------------------------------------------
|
| The following "run" method is required to execute all the tests.
|
*/
run()
