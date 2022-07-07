/*
*   Author: Lihui Zhang
*/

import React, { FC, useState, HTMLAttributes, MouseEvent } from "react"
import { classNames } from '../../utils/classNames';
import Icon from "../Icon/Icon";
import Dropdown from "../Dropdown/index";

export type PaginationSize = 'large' | 'small' | "medium";
export type PaginationType = 
    | "outlined"
    | "filled"
export type PagiantionColor = 
    | "primary"
    | "secondary"
    | "standard"

export interface IPaginationProps {
    className?: string;
    type?: PaginationType;
    size?: PaginationSize;
    color?: PagiantionColor;
    count?: number;
    page?: number;
    disabled?: boolean;
    /** a callback to provide current value */
    onChange?: (e: any, page: number, rowsPerPage: any) => void;
    rowsPerPage?: number;
    onchange?: (e: any, page: number, rowsPerPage: any) => void;
}

export type NativeDivProps = HTMLAttributes<HTMLDivElement>
export type PatPaginationProps = NativeDivProps | IPaginationProps;

export interface pageBtnProps {
    pageNumber: number;
    onClick?: Function;
    className?: string;
}

const PageBtn: FC<pageBtnProps> = (props: any) => {
    const { pageNumber, onClick, className } = props;
    const handleClick = (e: MouseEvent) => {
        onClick(e, pageNumber)
    }

    return (
        <div className={className} onClick={handleClick}>{pageNumber}</div>
    )
}

export const Pagination: FC<PatPaginationProps> = (props: any) => {
    const { count, page, type, color, size, disabled, className, onChange, rowsPerPage, ...rest } = props;
    const [curPage, setCurPage] = useState<number>(1);
    const [curRowsPerPage, setCurRowsPerPage] = useState<number>(rowsPerPage || 0);
    const rowsOptions: Array<number> = [5, 10, 15, 20, 50];
    let styleClasses = classNames('pagination', {
        [`page-${type}`]: !disabled && !!type,
        [`page-${size}`]: !!size,
        [`page-${color}`]: !disabled && !!color,
        disabled,
    });
    if (className) {
        styleClasses += ' ' + className;
    }

    const handleClick = (e: any, cur: number) => {
        if (!disabled && cur > 0 && cur <= count) {
            if (!page) {
                setCurPage(cur);
            }

            onChange(e, cur, curRowsPerPage);
        }
        else {
            e.preventDefault();
        }
    }

    const handleSelectRowsPerPage = (val: number) => {
        setCurRowsPerPage(val);
        onChange(null, page ? page : curPage, val);
    }

    const unControlledComponent = (
        <div data-testid={"pagination"} className={styleClasses} {...(rest as NativeDivProps)}>
            <div data-testid={"prev-btn"} id="prev-btn" className="page-icon" onClick={(e) => handleClick(e, curPage - 1)}>
                <Icon name="angle left" size={size} disabled={disabled || curPage === 1}></Icon>
            </div>

            {count > 0 ? <PageBtn className={`page-btn ${curPage === 1 ? "selected" : null}`} pageNumber={1} onClick={handleClick}/> : null}

            <div>{curPage > 3 ? "..." : null}</div>

            {curPage > 2 ? <PageBtn className="page-btn" pageNumber={curPage - 1} onClick={handleClick}/> : null}
            {curPage > 1 && curPage < count ? <PageBtn className="page-btn selected" pageNumber={curPage} onClick={handleClick}/> : null}
            {curPage < count - 1 ? <PageBtn className="page-btn" pageNumber={curPage + 1} onClick={handleClick}/> : null}

            <div>{curPage < count - 2 ? "..." : null}</div>

            {count > 1 ? <PageBtn className={`page-btn ${curPage === count ? "selected" : null}`} pageNumber={count} onClick={handleClick}/> : null}

            <div data-testid={"next-btn"} className="page-icon" onClick={(e) => handleClick(e, curPage + 1)}>
                <Icon name="angle right" size={size} disabled={disabled || count === 0 || curPage === count}></Icon>
            </div>  
            {
                rowsPerPage ? 
                <Dropdown disabled={disabled} className="rows-dropdown" onChange={handleSelectRowsPerPage}>
                    {rowsOptions.map((r, i) => <Dropdown.Option key={`dropdown-${i}`} active={curRowsPerPage === r} value={r}>{r} rows per page</Dropdown.Option>)}
                </Dropdown> : null
            }
        </div>
    )

    const controlledComponent = (
        <div data-testid={"pagination"}  className={styleClasses} {...(rest as NativeDivProps)}>
            <div className="page-icon" onClick={(e) => handleClick(e, page - 1)}>
                <Icon name="angle left" size={size} disabled={disabled || page === 1}></Icon>
            </div>

            {count > 0 ? <PageBtn className={`page-btn ${page === 1 ? "selected" : null}`} pageNumber={1} onClick={handleClick}/> : null}

            {page > 3 ? "..." : null}

            {page > 2 ? <PageBtn className="page-btn" pageNumber={page - 1} onClick={handleClick}/> : null}
            {page > 1 && page < count ? <PageBtn className="page-btn selected" pageNumber={page} onClick={handleClick}/> : null}
            {page < count - 1 ? <PageBtn className="page-btn" pageNumber={page + 1} onClick={handleClick}/> : null}

            {page < count - 2 ? "..." : null}

            {count > 1 ? <PageBtn className={`page-btn ${page === count ? "selected" : null}`} pageNumber={count} onClick={handleClick}/> : null}

            <div className="page-icon" onClick={(e) => handleClick(e, page + 1)}>
                <Icon name="angle right" size={size} disabled={disabled || count === 0 || page === count}></Icon>
            </div>
            {
                rowsPerPage ? 
                <Dropdown disabled={disabled} className="rows-dropdown" onChange={handleSelectRowsPerPage}>
                    {rowsOptions.map((r, i) => <Dropdown.Option key={`dropdown-${i}`} active={curRowsPerPage === r} value={r}>{r} rows per page</Dropdown.Option>)}
                </Dropdown> : null
            }
        </div>
    )

    return page ? controlledComponent : unControlledComponent;
}

Pagination.defaultProps = {
    size: "small",
    type: "filled",
    color: "primary",
    onChange: () => {}
}

export default Pagination;
