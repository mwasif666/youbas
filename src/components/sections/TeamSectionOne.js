import twitter from "@/assets/images/icon/twitter.svg";
import camera from "@/assets/images/icon/camera.svg";
import {teamMembers} from "@/data/team";
import Link from "next/link";


export default function TeamSectionOne({showItems}) {
    return (
        <section className="team1 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="section-top pb-15 text-center">
                            <p className="section-top__subtitle2">Our Team members</p>
                            <h2 className="section-top__title pb-20">We have skilled people</h2>
                        </div>
                    </div>
                    {teamMembers.slice(0, showItems).map((member) => (
                        <div key={member.id} className="col-sm-6 col-lg-3">
                            <div className="team1-card">
                                <div className="team1-card-thumb">
                                    <div className="team1-card-thumb__one">
                                        <img src={member.image.src} alt={member.name} />
                                    </div>
                                    <div className="team1-card-thumb__icon">
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                            <img src={twitter.src} alt="Twitter icon" />
                                        </a>
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <img src={camera.src} alt="Instagram icon" />
                                        </a>
                                    </div>
                                </div>
                                <Link href="/team/details">
                                    <h4 className="team1-card__title">{member.name}</h4>
                                </Link>
                                <p className="team1-card__desc">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
