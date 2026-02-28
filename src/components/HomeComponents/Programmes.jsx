import React from 'react'
import '../../styles/HomeCss/programmes.css'
import Cards from '../Cards.jsx'

const Programmes = () => {
    return (
        <div className='programmes'>
            <h1 className='programmesHeading'>Find the best programme for yourself</h1>
            <p className='subPara'>Because each training course corresponds to a personal ambition, all our students receive individual attention. The success of each student is our priority. Our teams accompany each student in the success of his project.</p>

            <div className='programmesCards'>
                <Cards />
            </div>
        </div>
    )
}

export default Programmes