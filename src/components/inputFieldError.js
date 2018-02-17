import React from 'react'
import MdError from "react-icons/lib/md/error"

const Required = props => {
  return (
    <div className="text-danger"><MdError size={21} /><strong>Required</strong></div>
  )
}
export default Required
