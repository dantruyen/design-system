import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from 'root/icons/icon.component'
import * as Icons from '@dantruyen/react-icons'

const Wrapper: React.FunctionComponent = ({ children }) => <div>{children}</div>

Object.entries(Icons).forEach(([iconName, IconComponent]) => {
    const story = storiesOf(`Components/Icons`, module)

    story.add(
        iconName.replace(/^Icon(.+)$/, '$1'),
        () => (
            <Wrapper>
                {(['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl'] as const).map((size) => (
                    <Icon key={`icon-black-${size}`} size={size} icon={IconComponent as any} />
                ))}
            </Wrapper>
        ),
        {
            component: IconComponent,
        },
    )
})
