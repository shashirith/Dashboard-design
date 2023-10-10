import React from 'react'
import classNames from 'classnames'

const Button = ({classname, title, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('font-["Figtree"] text-[14px] rounded-[8px] font-semibold px-[16px] py-[8px]', classname)}>
            {title}
        </button>
    )
}

export default Button