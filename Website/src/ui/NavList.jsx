import { Link } from 'react-router-dom';

export default function NavList({ children, to, onClick, type }) {
  const style = {
    nav: 'rounded-full px-7 py-3 transition duration-300 ease-in-out hover:scale-110 hover:bg-green-500/10 hover:text-green-400',
    primary:
      'rounded-md bg-gradient-to-r from-green-900 to-green-700 px-6 py-3 text-base text-[#fff] transition duration-300 ease-in-out hover:scale-110 hover:bg-green-500/10',
    secondary:
      'rounded-md px-6 py-3 text-base transition duration-300 ease-in-out hover:scale-110 hover:bg-green-500/10 hover:text-green-400 ',
  };

  if (onClick && to)
    return (
      <Link className={style[type]} onClick={onClick} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <Link className={style[type]} onClick={onClick}>
        {children}
      </Link>
    );
  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
}
