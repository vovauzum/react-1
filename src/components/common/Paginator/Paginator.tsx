import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            <button onClick={(e) => {
                onPageChanged(1);
                setPortionNumber(1);
            }}>{"<<"}</button>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}>Next</button>}
            {<button onClick={() => {
                onPageChanged(pagesCount);
                setPortionNumber(portionCount);
            }}>{">>"}</button>}
        </div>
    )
}
export default Paginator;