import React, {FC, useState} from 'react';
import { classNames } from '../../utils/classNames';

export type paginationType = | 'filled' | 'outlined';
export type paginationshape = | 'basic'  | 'rounded';
export type paginationSize = 'lg' | 'md' | 'sm';
export type paginationColor = 'primary' | 'secondary' | 'default'

export interface IPaginationProps {
    className?:string;
    /** set Pagination shape */
    pgnShape?: paginationshape;
    /** set Pagination type */
    pgnType?: paginationType;
    /** set Pagination color */
    pgnColor?: paginationColor;
    /** set Pagination type */
    pgnSize?: paginationSize;
    /** total number of pages*/  
    totalPages: number;
}


export const Pagination: FC<IPaginationProps> = (props) => {
  const {totalPages, pgnShape, pgnType, pgnColor, pgnSize, className} = props
    let styleClasses = classNames('pgn', {
      [`pgn-${pgnType}`]: true,
        [`pgn-${pgnShape}`]: true,
        [`pgn-${pgnColor}`]: true,
        [`pgn-${pgnSize}`]: !!pgnSize,
      });

      if (className) {
        styleClasses += ' ' + className;
      } 

      let buttonId = classNames('btn')
    
      const [currentPage, setCurrentPage] = useState(1)
      const [btnActive, setBtnActive] = useState(0)
      const handleChange = (page:number) =>{
        setBtnActive(btnActive === 0 ? 1 : 0)
        setCurrentPage(page)
        console.log('The selected page is:', page)
    }
    return (

          <div className={styleClasses}>

           {currentPage !== 1 && (//Previous button will only appear when current page is !== 1
              <button
                onClick={() => handleChange(currentPage -1)}
                type="button"
                  className={buttonId}
              >
                &lt;
              </button>
            )}

            <button //first page button this will always be visible
              onClick={() => handleChange(1)}
              type="button"
              className={buttonId}
              id={currentPage === 1 ? '1': '0'}
            >
              {1}
            </button>

            {currentPage > 3 && //if selected currentPage is > 3 . . . will
            <div className={'elip'}>. . .</div>}
            
            {currentPage === totalPages && totalPages > 3 && (//selected page = last page and there are more than 3 currentPages then it will show the previous 2 pages
              <button
                onClick={() => handleChange(currentPage - 2)}
                type="button"
                className={buttonId}
              >
                {currentPage - 2}
              </button>
            )}

            {currentPage > 2 && (
              <button //in any case if current page is > 2 the button before current page will be shown
                onClick={() => handleChange(currentPage - 1)}
                type="button"
                className={buttonId}
              >
                {currentPage - 1}
              </button>
            )}

            {currentPage !== 1 && currentPage !== totalPages && (
              <button //current page will always show
                onClick={() => handleChange(currentPage)}
                type="button"
                className={buttonId}
                id={currentPage+''}
              >
                {currentPage}
              </button>
            )}
            {currentPage < totalPages - 1 && (
              <button //if current page is just before the last page last page will show
                onClick={() => handleChange(currentPage + 1)}
                type="button"
                className={buttonId}
              >
                {currentPage + 1}
              </button>
            )}
            {currentPage === 1 && totalPages > 3 && (
              <button //when in the first page it will show two more pages
                onClick={() => handleChange(currentPage + 2)}
                type="button"
                className={'btn'}
                
              >
                {currentPage + 2}
              </button>
            )}
            {currentPage < totalPages - 2 && <div //if page is less than the second page from the last elipses will appear 
            className={'elip'}>. . .</div>}

            {totalPages !== 1 && <button 
              onClick={() => handleChange(totalPages)}//last page button
              type="button"
              className={buttonId}
              id={currentPage === totalPages ? totalPages+'': '0'}
            >
              {totalPages}
            </button>}
            {currentPage !== totalPages && (//next page button will always appear unless current page is last page
              <button
                onClick={() => handleChange(currentPage + 1)}
                type="button"
                className={buttonId}
              >
                &gt;
              </button>
            )}

          </div>

      );
    };
export default Pagination;