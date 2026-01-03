import iconWhite from "@/assets/images/icon/dropdown-icon-white.svg";
import Link from "next/link";

export default function HeaderMenu() {
    return (
        <ul>
            <li className="menu-item-has-children">
                <a className='active' href='#'>Home
                    <span className="dropdown-icon">
                        <img className="svg" src={iconWhite.src} alt="icon"/>
                    </span>
                </a>
                <ul className="sub-menu">
                    <li><Link className='active' href='/'>Home One</Link></li>
                    <li><Link href='/home-2'>Home Two</Link></li>
                    <li><Link href='/home-3'>Home Three</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <a href='#'> Pages
                    <span className="dropdown-icon">
                        <img className="svg" src={iconWhite.src} alt="icon"/>
                    </span>
                </a>
                <ul className="sub-menu">
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/service'>Service</Link></li>
                    <li><Link href='/service/details'>Service Details</Link></li>
                    <li><Link href='/team'>Team</Link></li>
                    <li><Link href='/team/details'>Team Details</Link></li>
                    <li><Link href='/pricing'>Pricing</Link></li>
                    <li><Link href='/faq'>Faq</Link></li>
                    <li><Link href='/404'>404 Page</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link href='/project'>Portfolio
                    <span className="dropdown-icon">
                    <img className="svg" src={iconWhite.src} alt="icon"/></span>
                </Link>
                <ul className="sub-menu">
                    <li><Link href='/project'>Portfolio</Link></li>
                    <li><Link href='/project/details'>Portfolio Details</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <a href='#'> Blog
                    <span className="dropdown-icon">
                        <img className="svg" src={iconWhite.src} alt="icon"/>
                    </span>
                </a>
                <ul className="sub-menu">
                    <li><Link href='/blog'>Blog</Link></li>
                    <li><Link href='/blog-2'>Blog Two</Link></li>
                    <li><Link href='/blog/details'>Blog Details</Link></li>
                </ul>
            </li>
            <li><Link href='/contact'>Contact</Link></li>
        </ul>
    )
}