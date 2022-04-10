import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBtn from './PageBtn'
import { nextPage, prevPage, status, isAtBeginning, isAtEnd } from '../reducers/viewReducer'

const Paginator = ({routes}) => {
  const dispatch = useDispatch()
  const startIdx = useSelector(state => state.view.n)

  return (
    <section className='pagination'>
      <p>{dispatch(status(startIdx, routes))}</p>
      <PageBtn 
        content='Previous Page'
        onClick={event => dispatch(prevPage(event))}
        disabled={dispatch(isAtBeginning(routes))}
      />
      <PageBtn 
        content='Next Page' 
        onClick={event => dispatch(nextPage(event))}
        disabled={dispatch(isAtEnd(routes))}
      />
    </section>
  )
}

export default Paginator