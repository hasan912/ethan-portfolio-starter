
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// import router
import { useRouter } from 'next/router'
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col bottom-0 z-50 top-0 xl:h-screen  w-full xl:w-16 xl:max-w-md  mt-auto xl:right-[2%] h-max xl:justify-center items-center gap-y-4 fixed'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:rounded-full'>
        {navData.map((link, index) => (
          <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>

            {/* tooltip */}
            <div className='absolute pr-14 hidden  right-0 xl:group-hover:flex '>
              <div className='bg-white relative flex rounded-[5px] text-primary items-center p-[8px]'>
                <div className='text-[12px] leading-none font-semibold capitalize '>{link.name}
                </div>
                {/* triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>

                </div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
