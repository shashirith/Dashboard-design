import React from 'react'
import className from 'classnames'

const Paper = (props) => {
    const {children, classnames} = props;
  return (
    <div {...props} className={className('rounded-[20px] border-[#e0e0e0] border-[2px] bg-white', classnames)}>
        {children}
    </div>
  )
}

export default Paper