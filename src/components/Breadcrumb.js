import Link from "next/link";

export default function Breadcrumb({title, menus}) {
    return (
        <div className="breadcrumb">
            <div className="container">
                <div className="breadcrumb-heading">
                    <h1>{title}</h1>
                    <ul className="breadcrumb-heading__items">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        {menus.map((menu, index) => (
                            menu.link ? (
                                <li key={index}>
                                    <Link href={menu.link}><i className="fas fa-chevron-right me-2"></i> {menu.label}</Link>
                                </li>
                            ) : (
                                <li key={index}>
                                    <i className="fas fa-chevron-right me-2"></i> {menu.label}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}