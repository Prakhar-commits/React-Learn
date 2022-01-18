import React from 'react'

const Comments = (props) => {
    return (
        <div>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img src={props.img}  alt='test'/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>{props.name}</a>
                    <div className='metadata'>
                        <span className='date'>{props.day}</span>
                    </div>
                <div className='text'>{props.text}</div>
                </div>
            </div>
        </div>
    )
}

export default Comments
