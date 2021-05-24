import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useState,
  useEffect,
} from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabsProps {
  /** children must be React Element */
  children?: ReactElement[];
  /** set customized css class */
  className?: string;
  /** set default tab and tab content */
  defaultTab?: string | number;
  /** set vertial tabs */
  vertical?: boolean;
}
/**
 * A tabs container allows user to set multiple tabs and related tab content.
 *
 * ```js
 * import { Tabs, TabsPanel, Tab, TabsContent } from 'pat-ui'
 * ```
 */
export const Tabs: FC<ITabsProps> = (props) => {
  const { children, defaultTab, className, vertical, ...rest } = props;
  //console.log(children);
  const [tabValue, setTabValue] = useState<any>();

  // useEffect(() => {
  //   if (defaultTab) {
  //     setTabValue(defaultTab);
  //   }
  // }, []);

  let styleClasses = classNames('tabs', {
    vertical: !!vertical,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  return (
    <div className={styleClasses}>
      {children
        ? Children.map(children, (child: ReactElement) =>
            cloneElement(child, { tabValue, vertical, setTabValue })
          )
        : children}
    </div>
  );
};

export default Tabs;
