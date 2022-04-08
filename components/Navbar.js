import Link from "next/link";
const Navbar = (props) => {
    return (
        <>
        <style jsx>
        {`
            nav {
                background-color: ${props.type == "main" ? "#eee" : "#32cd32"};
            }
            a{
                font-size:0.85rem;
                color:#1e7aaf;
                padding:0.5rem;
            }
       
        `}
        </style>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/service">
                    <a>Service</a>
                </Link>
                <Link href="/articles">
                    <a>Articles</a>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;