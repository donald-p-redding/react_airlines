import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBtn from './PageBtn'
import { nextPage, prevPage, status, isAtBeginning, isAtEnd } from '../reducers/viewReducer'

const Paginator = () => {
  const dispatch = useDispatch()
  const startIdx = useSelector(state => state.view.n)

  return (
    <section className='pagination'>
      <p>{dispatch(status(startIdx))}</p>
      <PageBtn 
        content='Previous Page'
        onClick={event => dispatch(prevPage(event))}
        disabled={dispatch(isAtBeginning())}
      />
      <PageBtn 
        content='Next Page' 
        onClick={event => dispatch(nextPage(event))}
        disabled={dispatch(isAtEnd())}
      />
    </section>
  )
}

export default Paginator