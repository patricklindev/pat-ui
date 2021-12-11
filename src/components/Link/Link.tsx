import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type UnderlineType = 'always' | 'hover' | 'none';
export type VariantType = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'inherit';
export type LinkType = 'primary' | 'secondary' | 'default';

interface ILinkProps {
  linkType?: LinkType;
  underline?: UnderlineType;
  variant?: VariantType;
  href?: string;
  component?: 'button' | 'Button';
}

type LinkAnchorProps = ILinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkButtonProps = ILinkProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type PatLinkProps = LinkAnchorProps | LinkButtonProps;

const Link: FC<PatLinkProps> = (props) => {
  const { linkType, underline, variant, href, component, ...rest } = props;
  const styleClasses = classNames('link', {
    [`link-${linkType}`]: true,
    [`link-${underline}`]: true,
    [`link-${variant}`]: true,
    [`link-${component}`]: !!component,
  });

  let link;
  if (component) {
    switch (component) {
      case 'button':
        link = (
          <a href={href}>
            <button
              className={styleClasses}
              {...(rest as LinkButtonProps)}
            ></button>
          </a>
        );
        return link;
      case 'Button':
        link = (
          <a href={href}>
            <Button
              className={styleClasses}
              {...(rest as LinkButtonProps)}
            ></Button>
          </a>
        );
        return link;

      default:
        link = null;
        return link;
    }
  }
  link = (
    <a className={styleClasses} href={href} {...(rest as LinkAnchorProps)}>
      {props.children}
    </a>
  );
  return link;
};

Link.defaultProps = {
  underline: 'always',
  linkType: 'default',
  variant: 'inherit', //should be inherit
};

export default Link;
