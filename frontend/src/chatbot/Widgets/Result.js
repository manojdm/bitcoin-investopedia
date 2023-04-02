import React from 'react'

const Result = (e) => {

    const {results} = e.state
    const keys = Object.keys(results)

    return (
        <div className='results'>
            {
                keys.map((key,idx) => 
                <div key={key} className='result'>
                    <span className='label'>{key}: </span>
                    <span className='answer'>{results[key]}{key == 'roi' ? '%' : ''}</span>
            </div>)
            }
        </div>
    )
}

export default Result