"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"
import ReactPaginate from "react-paginate"

type Props = {
  page: number
  url?: string
  pageCount: number
}

const Pagination = ({ page, url = `/blogs/`, pageCount }: Props) => {
  const router = useRouter()
  const handlePageClick = (event: { selected: number }) => {
    router.push(`${url}${event.selected + 1}`)
  }
  return (
    <div className="py-10 ">
      {pageCount === 1 ? null : (
        <ReactPaginate
          forcePage={page - 1}
          className="flex gap-3 items-center  justify-center select-none"
          pageLinkClassName="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 select-none "
          activeLinkClassName="block size-8 rounded border-primary !bg-primary text-center leading-8 !text-white"
          breakLabel="..."
          nextLabel={<ChevronLeft />}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={<ChevronRight />}
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  )
}

export default Pagination
