import PaginationItem from './PaginationItem';
import React, { DetailedHTMLProps, FC, HTMLAttributes, OptionHTMLAttributes, useState } from 'react';
import { table } from 'console';

type divTypes = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>



export interface IPagination {
    /**
     * Total Number of Pages the Paginator can go to.
     */
    count: number;
    /**
     *  The current Page Number.
     */
    currentPage?: number;
    /**  Function to call when a pagination item is clicked. Provided with current Page. */
    onChanged?: (currentPage: number) => void;
    /**  An Option to disable having arrows on your Pagination component. */
    arrows?: boolean
    /** filled or outlined */
    filled?: boolean
    /** Rounded or Squared */
    round?: boolean
    /** Size of the buttons */
    size?: 'large' | 'medium' | 'small'
    /** color */
    color?: 'primary' | 'secondary' | 'default'
    /** variant */
    variants?: 'default' | 'active' | 'disabled'
    /** Use a table instead */
    tablePagination?: boolean
    /** Subscribe to the end index of the Table */
    tableEndIndexSubscription?: (endIndex: number) => void;
    /** Set customized className */
    className?: string
}
export type IPaginationProps = IPagination;

const Pagination: FC<IPagination> = (props) => {

    const { tablePagination = false, round = false, variants = 'active', color = 'default', className = '', filled = true, count = 10, arrows = true, currentPage = 4, onChanged = () => { }, ...rest } = props
    const [page, setPage] = useState<number>(currentPage)

    let needsArrows: boolean = false
    if (count > 1 && arrows === true) { needsArrows = true }

    const generatedArray = (cur: number, pages: number) => {
        //Build the array of buttons for the pagination
        let arrayToReturn = []
        let middle = cur;
        if (cur < 4) { middle = 3 }
        if (cur > pages - 3) { middle = pages - 2 }
        arrayToReturn.push(1)
        if (middle > 3) { arrayToReturn.push('...') }
        arrayToReturn.push(middle - 1)
        arrayToReturn.push(middle)
        arrayToReturn.push(middle + 1)
        if (middle < pages - 2) { arrayToReturn.push('...') }
        arrayToReturn.push(pages)
        return arrayToReturn
    }

    function callBackDriller(num: number): () => void {
        return () => {
            if (!isNaN(num)) {
                if (num > 0 && num <= count) {
                    if (props.variants !== 'disabled') {
                        setPage(num)
                        onChanged(num)
                    }
                }
            }
        }
    }

    function buildClass(num: number | string): string {
        //Generate the class for the Pagination Item

        const classesToAppend: string[] = ['pagination-item'];

        classesToAppend.push(className) //add custom class
        if (+num === page) {
            classesToAppend.push('isCurrentPage')
        }
        switch (variants) {
            case 'default':
                classesToAppend.push('default')
                break
            case 'active':
                classesToAppend.push('active')
                break
            case 'disabled':
                classesToAppend.push('disabled')
                break
        }
        if (variants === 'active') {
            switch (color) {
                case 'primary':
                    classesToAppend.push('primaryColor')
                    break
                case 'secondary':
                    classesToAppend.push('secondaryColor')
                    break
                case 'default':
                    classesToAppend.push('defaultColor')
                    break
            }
        } else {
            classesToAppend.push('defaultColor')
        }
        switch (props.size) {
            case 'large':
                classesToAppend.push('large')
                break
            case 'medium':
                classesToAppend.push('medium')
                break
            case 'small':
                classesToAppend.push('small')
                break
        }
        classesToAppend.push(round ? 'rounded' : 'squared')
        classesToAppend.push(filled ? 'filled' : 'outlineed')
        return classesToAppend.join(' ')
    }
    const normalPaginationElement: JSX.Element = (
        <ul aria-roledescription='Pagination navigation' role='navigation' style={{ display: 'flex' }} className={className + 'pagination-UL'}>
            {needsArrows ? <PaginationItem builtClass={buildClass('')} callBack={callBackDriller(page - 1)}>{'<'}</PaginationItem> : null}
            {generatedArray(page, count).map((currNumber, indx) =>
                <PaginationItem data-testid='pageButtons' key={indx + 'pagination' + currNumber} builtClass={buildClass(currNumber)}
                    callBack={callBackDriller(+currNumber)}
                    {...(rest as divTypes)}
                >{currNumber}</PaginationItem>
            )}
            {needsArrows ? <PaginationItem builtClass={buildClass('')} callBack={callBackDriller(page + 1)}>{'>'}</PaginationItem> : null}
        </ul>)

    const generateOptions = (totalPages: number) => {
        const arrayToGenerate = []
        const stepVar: number = 10
        for (let i = 0; i <= Math.floor(totalPages / stepVar); i++) {
            arrayToGenerate.push(
                <option key={'optionarray' + arrayToGenerate.length} value={i * stepVar}>{(i * stepVar)}</option>
            )
        }
        return (
            arrayToGenerate
        )
    }
    const [rows, setRows] = useState<number>(10)
    //could seperate this into a seperate element
    const tablePaginationElement = (): JSX.Element => {
        const { tableEndIndexSubscription = () => { } } = props
        function handleChange(e: React.FormEvent<HTMLSelectElement>): void {
            setRows(+e.currentTarget.value)
        }
        function handleTableClick(sign: number): void {
            setPage((prev) => {
                let candidate: number = prev + (rows * sign)
                if (candidate < 1) { candidate = 1 }
                if (candidate > count) { candidate = count }
                onChanged(candidate)
                return (candidate)
            })
        }
        function calculateEndPage(): number {
            if ((page + rows) > count) {
                tableEndIndexSubscription((count))
                return count
            }
            tableEndIndexSubscription((page + rows))
            return page + rows
        }
        return (
            <div role='navigation' className='table-navigation-container-div'>
                <span className='table-rowchanger'>
                    <label htmlFor='pagesPerRow'>Rows per page </label>
                    <select value={rows} onChange={handleChange} id='pagesPerRow' name='pagesPerRow'>
                        {generateOptions(count)}
                    </select>
                </span>
                <span className='table-pagechanger'>
                    {page}, {calculateEndPage()}
                    <span>
                        <button onClick={() => { handleTableClick(-1) }}>{'<'}</button>
                        <button onClick={() => { handleTableClick(1) }}>{'>'}</button>
                    </span>
                </span>
            </div>)

    }

    function tablePaginationHandler(): JSX.Element {
        if (tablePagination) {
            return (
                tablePaginationElement()
            )
        }
        if (!tablePagination) {
            return (
                normalPaginationElement
            )
        }
        return <div>Error, you shouldn't see this</div>

    }


    return (
        tablePaginationHandler()
    )
}

Pagination.defaultProps = {
    count: 20,
    variants: 'active',
    color: 'default',
    size: 'medium',
    round: false,
    tablePagination: false,
    filled: true,
    arrows: true,
    currentPage: 1,
}

export default Pagination;