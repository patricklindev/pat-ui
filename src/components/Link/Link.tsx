import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type UnderlineType = 'always' | 'hover' | 'none';
export type VariantType =  'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'inherit';
export type LinkType = 'primary' | 'secondary' | 'default';

interface ILinkProps {
  linkType?: LinkType;
  underline?: UnderlineType;
  variant?: VariantType;
  href: string;
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
            <button className={styleClasses} {...(rest as LinkButtonProps)}></button>
          </a>
        )
        return link;
      case 'Button':
        link = (
          <a href={href}>
            <Button className={styleClasses} {...(rest as LinkButtonProps)}></Button>
          </a>
        )
        return link;
      
      default:
        link = null;
        return link;
    }

  }
  link = (
      <a className={styleClasses} href={href}>
        {props.children}
      </a>
  );
  return link;
}

Link.defaultProps = {
  underline: 'always',
  linkType: 'default',
  variant: 'inherit', //should be inherit
};

export default Link;

// import './App.css';
// import { Link } from 'pat-ui';
// import 'pat-ui/index.css';

// function App() {
//   return (
//     <div className="App">
//       <Link variant='h1' href='#'>H1 Link</Link>
//       <Link variant='h2' href='#'>H2 Link</Link>
//       <Link variant='h3' href='#'>H3 Link</Link>
//       <Link variant='body1' href='#'>Body1 Link</Link>
//       <Link variant='body2' href='#' style={{color: 'red'}}>Body2 Link</Link>

//       <br />
//       <br />
//       <br />

//       <Link underline='always' href='#' linkType='primary'>Underline Always</Link>
//       <Link underline='hover' href='#' linkType='secondary'>Underline Hover</Link>
//       <Link underline='none' href='#' linkType='primary'>Underline None</Link>

//       <br />
//       <br />
//       <br />

//       <Link component='button' href='#' style={{height: '35px'}}>Button</Link>
//       <Link component='Button' href='#' underline='hover' linkType='primary'>Button</Link>

//       <br />
//       <br />
//       <br />
    
//       <Link variant='h1' component='Button' href='#' underline='none'>Button component with H1 variant</Link>

//       <br />
//       <br />
//       <br />

//       <div>this is testing inheritance <Link href='#'>link</Link></div>
//       <h3>this is testing inheritance <Link href='#' linkType='primary' underline='hover'>link</Link></h3>
//     </div>
//   );
// }

// export default App;
