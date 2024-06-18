import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" width={140} height={29} />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:gap-12 max-md:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <a
                href={navLink.href}
                className="font-montserrat text-lg leading-normal text-slate-gray transition-[0.2s] hover:text-black"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>

        <div className=" hidden max-md:block">
          <img src={hamburger} alt="hamburger menu icon" width={27} height={27} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
