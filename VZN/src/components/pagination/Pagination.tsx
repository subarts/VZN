import React, { FC } from "react"
import { ReactSVG } from "react-svg"
import nextPageIcon from "../../assets/icons/nextPage.svg"
import prevPageIcon from "../../assets/icons/prevPage.svg"
import style from "./pagination.module.css"
import PrevPageIcon from "../icons/PrevPageIcon"
import NextPageIcon from "../icons/NextPageIcon"
PrevPageIcon
NextPageIcon
interface IPaginationProps {
  lastPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
}

export const Pagination: FC<IPaginationProps> = ({
  lastPage,
  setCurrentPage,
  currentPage,
}) => {
  function handlePageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.target.value <= lastPage && +e.target.value !== 0)
      setCurrentPage(+e.target.value)
  }

  return (
    <nav className={style.pagination}>
      <li
        className={style.prevPage}
        style={
          currentPage === 1
            ? { background: "#dcd8e0" }
            : { background: "#4680b0" }
        }
        onClick={() =>
          setCurrentPage((prevState) => Math.max(prevState - 1, 1))
        }
      >
        <PrevPageIcon />
      </li>

      <li>
        <input
          type="number"
          placeholder={currentPage.toString()}
          onInput={handlePageChange}
        />
        <span>из {lastPage}</span>
      </li>

      <li
        className={style.nextPage}
        style={
          lastPage === currentPage
            ? { background: "#dcd8e0" }
            : { background: "#4680b0" }
        }
        onClick={() =>
          setCurrentPage((prevState) => Math.min(prevState + 1, lastPage))
        }
      >
        <NextPageIcon />
      </li>
    </nav>
  )
}
