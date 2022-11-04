import React from "react";

export default function Contact(){
    return(
            /** Contact Me section*/ 
        <div className="contact__container container">
            <div className="contact__header mb-4">
                <h1 className="contact__header_text"> Contact Me</h1>
                <p className="contact__header_sub_text">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            {/* contact me section ends */}

            {/* form starts */}
           <form className="contact__body">
             <div className="input__container flex-column flex-md-row">
                 <div className="input__wrapper w-100 w-md-50 me-0 me-md-3 mb-4 mb-md-0">
                     <label for="first_name" className="input__text">First name</label>
                     <input type="text" name="first_name"  id="first_name" defaultValue={``} placeholder="Enter your first name" required />
                 </div>
                 <div className="input__wrapper w-100 w-md-50">
                     <label for="last_name" className="input__text">Last name</label>
                     <input type="text" name="last_name" id="last_name" defaultValue={``} placeholder="Enter your last name" required />
                 </div>
             </div>
             <div className="input__container">
                   <label for="message" className="input__text">Message</label>
                    <textarea  name="message" id="message" defaultValue={``} placeholder="Send me a message and I'll reply you as soon as possible" required />
             </div>
             <div className="input__container flex-row">
                 <input type="checkbox" name="" value="agree_data" className="me-3" />
                 <span className="input__text">You agree to providing your data to Aderibigbe Oluwatimilehin Col.Mustard who may contact you.</span>
             </div>
             <button id="btn__submit" type="submit">Send Message</button>
           </form>
           {/* form ends */}
        </div>
    )
}