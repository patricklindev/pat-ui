import React, { AnchorHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';

export type UnderlineType = 'always' | 'hover' | 'none';
export type VariantType = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'inherit';
export type AnchorType = 'primary' | 'secondary' | 'default';

interface IAnchorProps {
  /** set anchor type */
  anchorType?: AnchorType;
  /** set underline type */
  underline?: UnderlineType;
  /** set variant size / type */
  variant?: VariantType;
  /** href property */
  href?: string;
}

type AnchorProps = IAnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatAnchorProps = AnchorProps;

/**
 * An Anchor performs very much like <a> tag but with several specified properties
 * for user's convenience.
 *
 * ```js
 * import {Anchor} from 'pat-ui'
 * ```
 */
const Anchor: FC<PatAnchorProps> = (props) => {
  const { anchorType, underline, variant, href, ...rest } = props;
  const styleClasses = classNames('anchor', {
    [`anchor-${anchorType}`]: true,
    [`anchor-${underline}`]: true,
    [`anchor-${variant}`]: true,
  });

  let anchor;
  anchor = (
    <a className={styleClasses} href={href} {...(rest as AnchorProps)}>
      {props.children}
    </a>
  );
  return anchor;
};

Anchor.defaultProps = {
  underline: 'always',
  anchorType: 'default',
  variant: 'inherit', //should be inherit
};

export default Anchor;
