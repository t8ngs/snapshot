/*
 * @t8ngs/snapshot
 *
 * (c) T8ngs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Test } from '@t8ngs/runner/core'
import type { PluginFn } from '@t8ngs/runner/types'

import { isModuleInstalled } from './src/utils.js'
import { PluginContext } from './src/plugin_context.js'
import type { SnapshotPluginOptions } from './src/types.js'

/**
 * Extend the Assert interface to add the snapshot method
 */
declare module '@t8ngs/assert' {
  interface Assert {
    snapshot(value: any): {
      matchInline(inlineSnapshot?: string): void
      match(): void
    }
  }
}

/**
 * Extend the Expect interface to add the snapshot method
 */
declare module 'expect' {
  interface Matchers<R> {
    toMatchSnapshot(): R
    toMatchInlineSnapshot(inlineSnapshot?: string): R
  }
}

/**
 * Snapshot plugin for T8ngs
 */
export function snapshot(options: SnapshotPluginOptions = {}) {
  if (isModuleInstalled('@t8ngs/assert')) {
    import('./src/integrations/assert.js')
  }

  if (isModuleInstalled('@t8ngs/expect')) {
    import('./src/integrations/expect.js')
  }

  const snapshotPlugin: PluginFn = function ({ config, cliArgs }) {
    PluginContext.init(options, cliArgs)

    Test.executing((test) => {
      PluginContext.setCurrentTestContext(test.context)
    })

    /**
     * Save snapshots after all tests are done
     */
    config.teardown.push(async () => {
      await PluginContext.snapshotManager.saveSnapshots()
    })
  }

  return snapshotPlugin
}
