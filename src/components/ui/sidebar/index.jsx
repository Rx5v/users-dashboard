/* eslint-disable react/prop-types */
export const Sidebar = ({children}) => (
     <aside className="w-64 p-4">
        <h2 className="text-xl font-bold text-dark mb-8">Untitled.</h2>
        <nav>
            {children}
        </nav>
    </aside>
)