import * as React from 'react'
import { classnames } from 'root/utils/classnames'

interface IconProps {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const Icon: React.FunctionComponent<IconProps> = ({ size = 'm', icon: IconSvg }) => (
    <span
        className={classnames(
            'inline-block',
            size === 'xs' && 'text-xs',
            size === 's' && 'text-sm',
            size === 'm' && 'text-base',
            size === 'l' && 'text-lg',
            size === 'xl' && 'text-xl',
            size === '2xl' && 'text-2xl',
            size === '3xl' && 'text-3xl',
            size === '4xl' && 'text-4xl',
        )}
    >
        <IconSvg />
    </span>
)
