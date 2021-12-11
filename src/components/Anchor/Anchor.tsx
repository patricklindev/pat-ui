import React, { AnchorHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';

export type UnderlineType = 'always' | 'hover' | 'none';
export type VariantType = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'inherit';
export type AnchorType = 'primary' | 'secondary' | 'default';

interface IAnchorProps {
  anchorType?: AnchorType;
  underline?: UnderlineType;
  variant?: VariantType;
  href?: string;
}

type AnchorProps = IAnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatAnchorProps = AnchorProps;

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
