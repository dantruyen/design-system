import React from 'react'
import { Props, Stories, Title } from '@storybook/addon-docs/dist/blocks'
import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

import '@dantruyen/ds-core/lib/core.css'

const viewports = {
  ...INITIAL_VIEWPORTS,
  narrow: {
    name: 'Narrow full-height (320px)',
    styles: {
      width: '320px',
      height: '100%',
    },
  },
}

addParameters({
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  viewport: {
    viewports,
  },
  docs: {
    page: () => (
      <>
        <Title>Props</Title>
        <Props />
        <Stories title="Examples" includePrimary />
      </>
    ),
  },
  backgrounds: [
    { name: 'White', value: '#fff', default: true },
    { name: 'Black', value: '#222' },
  ],
})

addDecorator(withA11y)
