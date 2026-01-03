export default function ContactUsSectionFour() {
    return (
        <section className="contact2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12 d-flex justify-content-center">
                        <div className="contact2-content">
                            <div className="section-top pb-38">
                                <p className="section-top__subtitle text-center">Contact Us</p>
                                <h2 className="section-top__title text-center pb-20">Have questions? <br/> contact us!
                                </h2>
                            </div>
                            <form action="#" id="#" method="POST" className="form">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="form__group">
                                            <input type="text" name="name" id="name" placeholder="Your name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group">
                                            <input type="text" name="email" id="email" placeholder="Email address"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group">
                                            <input type="text" name="subject" id="subject" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group form__group--large">
                                        <textarea name="message" id="message"
                                                  placeholder="Type your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-wrapper pt-7 text-center">
                                        <button type="button" className="theme-btn style1">Message Here</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}