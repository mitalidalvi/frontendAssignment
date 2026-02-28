import React from 'react'
import '../../styles/ContactCss/contactusform.css'

const ContactUsForm = () => {
    return (
        <div className='contactUs'>
            <form className="glassForm">
                <h2>CONTACT US</h2>
                <div className='grid'>
                    <div className="formGroup">
                        <input type="text" placeholder='First Name' required />
                    </div>

                    <div className="formGroup">
                        <input type="text" placeholder='Last Name' required />
                    </div>

                    <div className="formGroup">
                        <input type="email" placeholder='Email' required />
                    </div>

                    <div className="formGroup">
                        <input type="tel" placeholder='Phone' maxLength={10} inputMode='numeric' required />
                    </div>
                </div>


                <div className="formGroup">
                    <textarea rows="4" placeholder='Your Message' required></textarea>
                </div>

                <button type="submit" className="submitBtn">
                    Send Message
                </button>
            </form>
        </div>
    )
}
export default ContactUsForm