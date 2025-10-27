# @t8ngs/snapshot

> Plugin de testes de snapshot para a T8ngs

[![gh-workflow-image]][gh-workflow-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

Plugin de testes de snapshot para a T8ngs. Este plugin permite que você escreva testes de snapshot para sua aplicação.

#### [Documentação completa da API](https://t8ngs.dev/docs/plugins/snapshot)

## Instalação

Instale o pacote a partir do registro npm da seguinte forma:

```sh
npm i @t8ngs/snapshot

pnpm i @t8ngs/snapshot

yarn add @t8ngs/snapshot
```

## Uso

Você pode usar este pacote com o `@t8ngs/runner` da seguinte forma:

```ts
import { snapshot } from '@t8ngs/snapshot'
import { configure } from '@t8ngs/runner'

configure({
  plugins: [snapshot()],
})
```

Após isso, você poderá utilizar os 2 novos matchers adicionados, tanto no expect quanto no assert:

```ts
test('título do teste', ({ expect, assert }) => {
  // com @t8ngs/assert
  assert.snapshot('1').match()

  // com @t8ngs/expect
  expect('1').toMatchSnapshot()
})
```

[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/t8ngs/snapshot/checks.yml?branch=main&style=for-the-badge
[gh-workflow-url]: https://github.com/t8ngs/snapshot/actions/workflows/checks.yml 'Github action'

[npm-image]: https://img.shields.io/npm/v/@t8ngs/snapshot/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@t8ngs/snapshot/v/latest 'npm'

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/t8ngs/snapshot?style=for-the-badge
