import { headerLogo } from "../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { hamburger } from "../assets/icons/index.js";


export const Navbar = () => {
    return ( <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href='/'>
                <img src={ headerLogo } alt="logo" width={ 130 } height={ 29 }/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                { navLinks.map ( ( link , index ) => ( <li key={ index }>
                    <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">{ link.label }</a>
                    </li> ) ) }

            </ul>
            <div className="hidden max-lg:block">
                <img
                    src={hamburger} alt="hamburger" width={ 24 } height={ 24 }/>
            </div>
        </nav>
    </header> )
}