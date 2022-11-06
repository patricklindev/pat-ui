import React, { FC, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonType = 'primary' | 'secondary' | 'default';

export interface PaginationProps {
    defaultpage: number;
    count: number;
    rowsPerPage?: number;
    TablePagination?: boolean;
    btnSize?: ButtonSize;
    color?: ButtonType;
    disabled?: boolean;
}

export const PaginationContainer: FC<PaginationProps> = (props) => {
    const {
        rowsPerPage,
        defaultpage,
        count,
        TablePagination,
        btnSize,
        color,
        disabled,
    } = props;
    const [page, setPage] = useState(defaultpage);
    const [curRowsPerPage, setCurRowsPerPage] = useState(rowsPerPage);
    let options: string[] = [];
    if (rowsPerPage && TablePagination) {
        options = [
            rowsPerPage.toString(),
            Math.ceil(count / 3).toString(),
            Math.ceil(count / 2).toString(),
            count.toString(),
        ];
    }

    const handleChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div>
            {TablePagination && rowsPerPage && curRowsPerPage ? (
                <div className="tablepagination">
                    <div>Rows per page: </div>
                    <Dropdown
                        className="tablepagination__dropdown"
                        options={options}
                        onChange={(e) => setCurRowsPerPage(+e.value)}
                        value={rowsPerPage.toString()}
                        placeholder={curRowsPerPage.toString()}
                    />
                    <div>
                        {page % curRowsPerPage === 0
                            ? (Math.floor(page / curRowsPerPage) - 1) * curRowsPerPage + 1
                            : Math.floor(page / curRowsPerPage) * curRowsPerPage + 1}
                        -
                        {page % curRowsPerPage === 0
                            ? Math.floor(page / curRowsPerPage) * curRowsPerPage
                            : Math.floor(page / curRowsPerPage) * curRowsPerPage +
                            curRowsPerPage}{' '}
                        of {count}
                    </div>
                    <button
                        className={
                            page - curRowsPerPage < 1
                                ? 'tablepagination__btn-disabled'
                                : 'tablepagination__btn'
                        }
                        disabled={page - curRowsPerPage < 1}
                        onClick={() => handleChange(page - curRowsPerPage)}
                    >
                        &lt;
                    </button>
                    <button
                        className={
                            page + curRowsPerPage > count
                                ? 'tablepagination__btn-disabled'
                                : 'tablepagination__btn'
                        }
                        disabled={page + curRowsPerPage > count}
                        onClick={() => handleChange(page + curRowsPerPage)}
                    >
                        &gt;
                    </button>
                </div>
            ) : (
                <div className="pagination">
                    <button
                        className={
                            page === 1 ? 'pagination__btn--disabled' : disabled ? 'pagination__btn--disabled' : 'pagination__btn'
                        }
                        disabled={page === 1 || disabled}
                        onClick={() => handleChange(page - 1)}
                        type="button"
                    >
                        &lt;
                    </button>
                    <button
                        className={page === 1 ? color : disabled ? 'pagination__btn--disabled' : 'pagination__btn'}
                        disabled={disabled}
                        onClick={() => handleChange(1)}
                        type="button"
                    >
                        {1}
                    </button>
                    {page > 3 && <div style={{ color: 'grey' }}>...</div>}

                    {page > 2 && (
                        <button
                            className={disabled ? 'pagination__btn--disabled' : "pagination__btn"}
                            disabled={disabled}
                            onClick={() => handleChange(page - 1)}
                            type="button"
                        >
                            {page - 1}
                        </button>
                    )}

                    {page !== 1 && page !== count && (
                        <button
                            className={`${disabled ? 'pagination__btn--disabled--selected' : color}`}
                            disabled={disabled}
                            onClick={() => handleChange(page)}
                            type="button"
                        >
                            {page}
                        </button>
                    )}

                    {page < count - 1 && (
                        <button
                            className={disabled ? 'pagination__btn--disabled' : "pagination__btn"}
                            disabled={disabled}
                            onClick={() => handleChange(page + 1)}
                            type="button"
                        >
                            {page + 1}
                        </button>
                    )}

                    {page < count - 2 && <div style={{ color: 'grey' }}>...</div>}

                    <button
                        className={page === count ? color : disabled ? 'pagination__btn--disabled' : 'pagination__btn'}
                        disabled={disabled}
                        onClick={() => handleChange(count)}
                        type="button"
                    >
                        {count}
                    </button>

                    <button
                        className={
                            page === count ? 'pagination__btn--disabled' : disabled ? 'pagination__btn--disabled' : 'pagination__btn'
                        }
                        disabled={page === count || disabled}
                        onClick={() => handleChange(page + 1)}
                        type="button"
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

PaginationContainer.defaultProps = {
    defaultpage: 1,
    count: 20,
    rowsPerPage: 5,
    TablePagination: false,
    btnSize: 'default',
    color: 'default',
    disabled: false,
};

export default PaginationContainer;
