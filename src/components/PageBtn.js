import React from 'react'
  const PageBtn = ({ onClick, content, disabled }) => { 

  return <button disabled={disabled} onClick={ onClick }>{ content }</button>
}

export default PageBtn