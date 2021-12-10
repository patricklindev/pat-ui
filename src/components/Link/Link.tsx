import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type UnderlineType = 'always' | 'hover' | 'none';
export type VariantType = 'button' | 'h1' | 'h2' | 'h3' | 'div' | 'span';
export type LinkType = 'primary' | 'secondary' | 'default';
export type LinkSize = 'smaller' | 'small' | 'large' | 'larger' | 'big';

interface ILinkProps {
  linkType?: LinkType;
  underline?: UnderlineType;
  variant?: VariantType;
  href: string;
  size?: LinkSize;
  component?: 'button';
}

type LinkAnchorProps = ILinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkButtonProps = ILinkProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type PatLinkProps = LinkAnchorProps | LinkButtonProps;

const Link: FC<PatLinkProps> = (props) => {
  const { linkType, underline, variant, href, size, component, ...rest } = props;
  const styleClasses = classNames('link', {
    [`link-${linkType}`]: true,
    [`link-${underline}`]: true,
    [`link-${size}`]: !!size,
    [`link-${variant}`]: true,
    [`link-${component}`]: !!component,
  });

  let link;
  if (component) {
    switch (component) {
      case 'button':
        link = (
          <a href={href}>
            <button className={styleClasses} {...(rest as LinkButtonProps)}></button>
          </a>
        )
        return link;
      default:
        link = null;
        return link;
    }

  }
  link = (
    <a className={styleClasses} {...(rest as LinkAnchorProps)}>
      {props.children}
    </a>
  );
  return link;
}

Link.defaultProps = {
  underline: 'always',
  linkType: 'default',
  variant: 'button',
};

export default Link;
