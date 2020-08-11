import Link from 'next/link'
import {motion} from 'framer-motion'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/news', label: 'About' },
  { href: '/connect', label: 'Connect'}
]

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 } 
};

const back = {
  rest: { scale: 1 },
  hover: { scale: 1.1, rotate: 360 },
  pressed: { scale: 0.95 } 
};

export default function Nav({isHome}) {
  return (
    <nav className="tracking-widest">
      <ul className="flex justify-between items-center p-8">
      <motion.div 
            variants={back}
            initial="rest"
            whileHover="hover"
            whileTap="pressed" >
       {(!isHome) ? (
        <li>
          <Link href="/">
            <a className="text-pink-500 text-2xl no-underline ">Back</a>
          </Link>
        </li>
       ) : (
        <li>
          <Link href="/">
            <a className="text-pink-500 text-2xl no-underline">Home</a>
          </Link>
        </li>
       ) }
       </motion.div>
        <ul className="flex  justify-between items-center space-x-3 sm:space-x-2 mr-2">
          {links.map(({ href, label }) => (
            <motion.div 
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
            key={`${href}${label}`}>
            <li >
            <Link href={href}>
            <a href={href} className="btn-pink no-underline">
                {label}
              </a>
            </Link>
            </li>
            </motion.div>
            
          ))}
        </ul>
      </ul>
    </nav>
  )
}
