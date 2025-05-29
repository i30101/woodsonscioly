/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 May 2025
 */


let serviceDelay = -50;

interface ServiceProps {
    name: string;
    contact: string;
    url: string;
    image: any;
}


const ContactService: React.FC<ServiceProps> = ({name, contact, url, image}) => {
    serviceDelay += 50;
    return <a href={url} target="_blank" className="service row" data-aos="fade-up" data-aos-delay={serviceDelay}>
        <div className="contact-icon col-2">
            <img src={image} className="contact-image" alt={image}/>
        </div>
        <div className="contact-details col-10">
            <div className="contact-name">{name}</div>
            <div className="contact">{contact}</div>
        </div>
    </a>
}



function ContactContainer() {
    return <div className="primary-section row" id="contact-box" data-aos="fade-up">
        <div className="contact-container col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="contact-heading">Get In Touch</div>
            <div className="contact-text">Want to sponsor us? Have any questions? Fill out the form or reach out to us through one of the following platforms.</div>
            <ContactService name="Mail" contact="woodsonscioly@gmail.com" url="mailto:woodsonscioly@gmail.com" image={`${process.env.PUBLIC_URL}/icons/envelope.svg`} />
            <ContactService name="Instagram" contact="@woodsonscioly" url="https://www.instagram.com/woodsonscioly/" image={`${process.env.PUBLIC_URL}/icons/instagram.svg`} />
            <ContactService name="GitHub" contact="woodsonscioly" url="https://github.com/woodsonscioly/" image={`${process.env.PUBLIC_URL}/icons/github`} />
        </div>
        <div className="message-container col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="message-heading">Send us a message</div>
            <div className="message-text">We'll respond in 1-2 business days.</div>
            <form action="" method="POST" target="_blank" className="contact-form">
                <label className="form-section"><input type="hidden" name="_next" value="" /></label>
                <label className="form-section"><input className="form-input" placeholder="Name" type="text" name="name" /></label>
                <label className="form-section"><input className="form-input" placeholder="Email" type="email" name="email" /></label>
                <label className="form-section">
                    <textarea className="form-input message" placeholder="Message" />
                </label>
            </form>
        </div>
    </div>
}


export default ContactContainer;