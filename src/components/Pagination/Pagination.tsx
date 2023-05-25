// import React, { FC } from 'react';

// import PaginationOption from './PaginationOption';
// import { usePagination } from '../../utils/hooks/usePagination';

// export type PaginationSize = 'lg' | 'sm';
// export type PaginationType =
//   | 'primary'
//   | 'secondary'
//   | 'danger'
//   | 'default'
//   | 'link';
// export type PaginationShape = 'round' | 'rounded';
// export type PaginationVariant = 'outlined';

// export interface PaginationProps {
//   /** set customized style */
//   className?: string;
//   /** set button size */
//   pagSize?: PaginationSize;
//   /** set button type */
//   pagType?: PaginationType;
//   /** set disabled button */
//   disabled?: boolean;
//   /** set pagination number */
//   // todo: total page number should be required
//   totalPageNumber?: number;
//   /** set current page number */
//   currentPage?: number;
//   /** set pagination shapes round or rounded */
//   shape?: PaginationShape;
//   /** set pagination button outlined */
//   variant?: PaginationVariant;
// }

// export type HandlerProps = {
//   onPageChange: Function;
// };

// export type PaginationPropsWithHandler = PaginationProps & HandlerProps;

// export const Pagination: FC<PaginationPropsWithHandler> = ({
//   className,
//   pagSize,
//   pagType,
//   disabled,
//   totalPageNumber = 10,
//   currentPage = 1,
//   // rowsPerPage,
//   onPageChange,
//   shape = 'rounded',
//   variant = '',
// }) => {
//   let renderItems = usePagination({ totalPageNumber, currentPage });

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   return (
//     <div data-testid="pagination" className="pagination">
//       <PaginationOption
//         key={0}
//         disabled={disabled || currentPage === 1}
//         onClick={onPrevious}
//         btnSize={pagSize}
//         btnType={pagType}
//         shape={shape}
//         variant={variant}
//       >
//         &#8249;
//       </PaginationOption>
//       {renderItems?.map((element, index) => {
//         if (element === true) {
//           return <span key={index}>&#8230;</span>;
//         }
//         return (
//           <PaginationOption
//             key={index}
//             selected={currentPage === element}
//             btnSize={pagSize}
//             btnType={pagType}
//             shape={shape}
//             disabled={disabled}
//             variant={variant}
//             onClick={() => {
//               onPageChange(element);
//             }}
//           >
//             {element}
//           </PaginationOption>
//         );
//       })}
//       <PaginationOption
//         key={totalPageNumber + 1}
//         disabled={disabled || currentPage === totalPageNumber}
//         btnSize={pagSize}
//         btnType={pagType}
//         shape={shape}
//         variant={variant}
//         onClick={onNext}
//       >
//         &#8250;
//       </PaginationOption>
//     </div>
//   );
// };

// //why this doesn't work
// // Pagination.defaultProps = {
// //   pagType: 'default',
// //   disabled: false,
// //   totalPageNumber: 10,
// //   currentPage: 1,
// // };

// export default Pagination;

// //this code is same as above
// // export const Pagination: FC = (props: PaginationProps) => {
// //   return <div>Pagination</div>;
// // };

import React, { FC } from 'react';

// import PaginationOption from './PaginationOption';
import { usePagination } from '../../utils/hooks/usePagination';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type PaginationSize = 'lg' | 'sm';
export type PaginationType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';
export type PaginationShape = 'round' | 'rounded';
export type PaginationVariant = 'outlined';

export interface PaginationProps {
  /** set customized style */
  className?: string;
  /** set button size */
  pagSize?: PaginationSize;
  /** set button type */
  pagType?: PaginationType;
  /** set disabled button */
  disabled?: boolean;
  /** set pagination number */
  // todo: total page number should be required
  totalPageNumber?: number;
  /** set current page number */
  currentPage?: number;
  /** set pagination shapes round or rounded */
  shape?: PaginationShape;
  /** set pagination button outlined */
  variant?: PaginationVariant;
}

export type HandlerProps = {
  onPageChange: Function;
};

export type PaginationPropsWithHandler = PaginationProps & HandlerProps;

export const Pagination: FC<PaginationPropsWithHandler> = ({
  className,
  pagSize,
  pagType = 'default',
  disabled,
  totalPageNumber = 10,
  currentPage = 1,
  // rowsPerPage,
  onPageChange,
  shape = 'rounded',
  variant = '',
}) => {
  let renderItems = usePagination({ totalPageNumber, currentPage });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // let newpagSize = !!pagSize ? `pagination--btn-${pagSize}` : '';
  let newpagType = !!pagType ? `pagination--btn-${pagType}` : '';
  let defaultBtn = 'pagination--btn';

  // console.log('newpagSize ' + newpagSize + ' newpagType ' + newpagType);

  // let myStyle = classNames(newpagSize, newpagType, defaultBtn, variant, shape);

  let myStyle = classNames(defaultBtn, variant, shape);

  return (
    <div data-testid="pagination" className="pagination">
      <Button
        key={0}
        className={myStyle}
        disabled={disabled || currentPage === 1}
        onClick={onPrevious}
        btnSize={pagSize}
        // btnType={pagType}
        // shape={shape}
        // variant={variant}
      >
        &#8249;
      </Button>
      {renderItems?.map((element, index) => {
        if (element === true) {
          return <span key={index}>&#8230;</span>;
        }
        let selected = '';
        let newMyStyle = myStyle;
        if (currentPage === element) {
          selected = 'selected';
          newMyStyle = classNames(newMyStyle, newpagType, selected);
        }

        return (
          <Button
            key={index}
            className={newMyStyle}
            disabled={disabled}
            btnSize={pagSize}
            onClick={() => {
              onPageChange(element);
            }}
            // selected={currentPage === element}
            // btnType={pagType}
            // {...obj}
            // shape={shape}
            // variant={variant}
          >
            {element}
          </Button>
        );
      })}
      <Button
        key={totalPageNumber + 1}
        className={myStyle}
        disabled={disabled || currentPage === totalPageNumber}
        btnSize={pagSize}
        onClick={onNext}
        // btnType={pagType}
        // shape={shape}
        // variant={variant}
      >
        &#8250;
      </Button>
    </div>
  );
};

//why this doesn't work
// Pagination.defaultProps = {
//   pagType: 'default',
//   disabled: false,
//   totalPageNumber: 10,
//   currentPage: 1,
// };

export default Pagination;

//this code is same as above
// export const Pagination: FC = (props: PaginationProps) => {
//   return <div>Pagination</div>;
// };
