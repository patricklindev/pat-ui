import React, {
  Children,
  createRef,
  FC,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type PanelType = 'primary' | 'default';

export interface ITabsPanelProps {
  /** children must be React Element */
  children?: ReactElement[];
  /** set tabsPanel type */
  type?: PanelType;
  /** set centered tabsPanel */
  centered?: boolean;
  /** set scrollable tabsPanel */
  scrollable?: boolean;
  /** set vertical tabsPanel */
  vertical?: boolean;
  /** set customized css class */
  className?: string;
  /** default tab state provided by tabs */
  tabValue?: string | number;
  /** a callback to provide current value */
  onClick?: (val: any) => void;
  /** set tab value state provided by tabs */
  setTabValue?: (val: any) => {};
}

export const TabsPanel: FC<ITabsPanelProps> = (props) => {
  const {
    children,
    className,
    tabValue,
    type,
    centered,
    scrollable,
    vertical,
    onClick,
    setTabValue,
    ...rest
  } = props;

  let styleClasses = classNames('tabs__panel', {
    [`panel-type-${type}`]: true,
    centered: !!centered,
    [`scrollable-row`]: !!scrollable && !vertical,
    [`scrollable-col`]: !!scrollable && !!vertical,
    vertical: !!vertical,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  const arrLength = children?.length;
  const [elRefs, setElRefs] = useState([] as any);
  useEffect(() => {
    scrollable &&
      setElRefs((elRefs: any) =>
        Array(arrLength)
          .fill(null)
          .map((_, i) => elRefs[i] || createRef())
      );
  }, [arrLength]);
  //console.log(elRefs);

  const handleTabClick = (e: any, i: number) => {
    if (onClick) {
      onClick(e.target.value);
      setTabValue && setTabValue(e.target.value);
    }
    if (scrollable && elRefs[i].current !== null) {
      elRefs[i].current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div className={styleClasses}>
      {children
        ? Children.map(children, (child: ReactElement, i) => {
            const {
              className,
              value,
              label,
              wrapped,
              disabled,
              ...rest
            } = child.props;

            let btnStyleClasses = classNames('tabs__panel__tab-button', {
              [`tab-type-${type}`]: true,
              wrapped: !!wrapped,
              disabled: !!disabled,
            });
            if (className) {
              btnStyleClasses += ' ' + className;
            }
            if (tabValue === value) {
              if (!disabled) {
                btnStyleClasses +=
                  ' ' + `${vertical ? 'actived-vertical' : 'actived'}`;
              } else {
                setTabValue && setTabValue(null);
              }
            }
            return (
              <div className={`tabs__panel__tab`} ref={elRefs[i]}>
                <Button
                  disabled={disabled}
                  className={btnStyleClasses}
                  value={value}
                  onClick={(e: any) => handleTabClick(e, i)}
                >
                  {label}
                </Button>
              </div>
            );
          })
        : children}
    </div>
  );
};

TabsPanel.defaultProps = {
  type: 'default',
};

export default TabsPanel;
