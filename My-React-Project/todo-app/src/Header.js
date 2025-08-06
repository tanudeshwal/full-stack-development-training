import { Link } from "react-router-dom"

function Header() {
    return (

        <header className="flex justify-between px-10 bg-blue-400 p-5">
            <Link to="/add-todo"><button className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-pink-300">Add</button> </Link>
            <Link to="/show-todo"><button className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-green-300 ">Show</button> </Link>
            <Link to="/done-todo"><button className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-yellow-300">Done</button> </Link>
        </header>
    )
}


export default Header 