import React from 'react'
const PageBtn = ({ className, onClick, content, disabled }) => {

  return <button className={className} disabled={disabled} onClick={ onClick }>{ content }</button>
}

export default PageBtn