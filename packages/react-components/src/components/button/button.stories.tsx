import * as React from 'react'
import { Button } from 'root/components/button/button.component'

// eslint-disable-next-line import/no-default-export
export default {
    component: Button,
    title: 'Components/Button',
}

export const Neutral: React.FunctionComponent = () => <Button variant="neutral">Neutral Button</Button>
export const Primary: React.FunctionComponent = () => <Button variant="primary">Primary Button</Button>
export const Danger: React.FunctionComponent = () => <Button variant="danger">Danger Button</Button>
