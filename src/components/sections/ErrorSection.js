import Link from "next/link";
import errorImg from "@/assets/images/error/error.svg";

export default function ErrorSection() {
    return (
        <section className="error section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12 d-flex justify-content-center flex-column align-items-center">
                        <div className="error__thumb">
                            <img src={errorImg.src} alt="svg"/>
                        </div>
                        <div className="error-content">
                            <div className="error-content__text">
                                <h6>Sorry, the page you’re looking for doesn’t exist. If you think something is broken,
                                    report a problem</h6>
                            </div>
                            <div className="btn-wrapper pt-35">
                                <Link className="theme-btn style1" href="/">Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}