import {navigation} from "../mainFiles/data";

function Navbar() {
    return (
        <>
        <nav className="ml-[70px]">
            <ul className="flex gap-x-[42px]">
                {navigation.map((item, i) => {
                    return <li key={"itemNav_" + i}><a href={item.href} className="text-lg">{item.name}</a></li>
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar;