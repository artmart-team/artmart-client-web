import React from 'react'
import { useDispatch } from 'react-redux'
import { paginationPage } from "../../utils/store/actions/picturesAction"

const Pagination = _ => {

  const dispatch = useDispatch()

  const pageOne = e => {
    // e.preventDefault()
    // console.log(1)
    dispatch(paginationPage(1))
  }

  const pagetwo = e => {
    // e.preventDefault()
    // console.log(2)
    dispatch(paginationPage(2))
  }

  const pageThree = e => {
    // e.preventDefault()
    // console.log(3)
    dispatch(paginationPage(3))
  }

  return (
    <div id="Pagination">
      <nav className="d-flex justify-content-center" style={{ marginTop: 24 }} aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item" onClick={pageOne}><a className="page-link" href="#HomeCard">1</a></li>
          <li className="page-item" onClick={pagetwo}><a className="page-link" href="#HomeCard">2</a></li>
          <li className="page-item" onClick={pageThree}><a className="page-link" href="#HomeCard">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
