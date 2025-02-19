import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
export const Sidebar = ({children}) => {
    const { open } = useSelector((state) => state.sidebar);
    return(
     <aside className={`${open ? 'w-full md:w-64 fixed md:relative z-1 transform translate-x-0' : 'transform -translate-x-full sr-only'} h-screen bg-gray-100 p-4 transition-all duration-100 ease-in-out`}>
        <h2 className="text-xl font-bold text-dark mb-8">Untitled.</h2>
        <nav>
            {children}
        </nav>
    </aside>
    )
}