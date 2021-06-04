import { ListenOptions } from 'net';
import React, {
    FC,
    CSSProperties,
    ReactNode
} from 'react';

export interface IListOptionProps {
    children?: ReactNode;
    className?: string;
    cssStyle?: CSSProperties;
    value?: any;
    onHover?: boolean;

}

const ListOption: FC<IListOptionProps> = (props) => {
    const { className, children, cssStyle, value } = props;

    let classNames = 'list__option';
    if (className) {
        classNames = ['list__option', className].join(' ');
    }

    const handleClick = () => {

    }

    return (
        <div className={classNames} style={cssStyle} onClick={handleClick}>
            {children}
        </div>
    )
}

ListOption.defaultProps = {
    value: '',
}

export default ListOption;