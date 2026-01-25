import iconWhite from "@/assets/images/icon/dropdown-icon-white.svg";
import Link from "next/link";

export default function HeaderMenu() {
    return (
        <ul>
            <li>
                <Link className='active' href='/'>Home</Link>
            </li>

            <li className="menu-item-has-children">
                <Link href='/services'>Services
                    {/* <span className="dropdown-icon">
                        <img className="svg" src={iconWhite.src} alt="icon"/>
                    </span> */}
                </Link>
                {/* <ul className="sub-menu">
                    <li><Link href='/services/web-development'>Web Development</Link></li>
                    <li><Link href='/services/marketplace-management'>Marketplace Management</Link></li>
                    <li><Link href='/services/private-label'>Private Label</Link></li>
                    <li><Link href='/services/product-sourcing'>Product Sourcing</Link></li>
                    <li><Link href='/services/ddp-logistics'>DDP Logistics</Link></li>
                    <li><Link href='/services/digital-social-media'>Digital & Social Media</Link></li>
                    <li><Link href='/services/wholesale-bulk'>Wholesale & Bulk</Link></li>
                    <li><Link href='/services/brand-expansion'>Brand Expansion</Link></li>
                </ul> */}
            </li>

            <li><Link href='/about-us'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ul>
    )
}
