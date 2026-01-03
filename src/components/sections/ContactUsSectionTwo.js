export default function ContactUsSectionTwo() {
    return (
        <section className="contact1 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="contact1-content">
                            <div className="section-top pb-25">
                                <p className="section-top__subtitle">Contact Us</p>
                                <h2 className="section-top__title pb-20">Send us message</h2>
                                <p className="section-top__desc">Great! We're excited to hear from you and let's start
                                    something
                                </p>
                            </div>
                            <form action="#" id="contact-form" method="POST"
                                  className="contact-content-items">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="contact1-content__formCtrl">
                                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact1-content__formCtrl">
                                            <input type="text" name="email" id="email" placeholder="Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact1-content__formCtrl">
                                            <input type="number" name="number" id="number" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact1-content__formCtrl">
                                            <input type="text" name="subject" id="subject" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact1-content__formCtrl">
                                        <textarea name="message" id="message"
                                                  placeholder="Type your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-wrapper pt-7">
                                        <button className="theme-btn style1">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="map-section">
                            <div className="map-container2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                                    allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}