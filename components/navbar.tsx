import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NavBar: React.FC = () => {
	const [t] = useTranslation();
	const router = useRouter();

	return (
		<header className='fixed inset-x-0 top-0 z-10 flex flex-col h-12 pl-8 pr-4 text-gray-100 bg-transparent sm:items-center sm:justify-between sm:flex-row'>
			<h1 className='hidden font-semibold sm:block'>Marcus Alvén</h1>
			<div className='hidden lg:block'>{t('common:description')}</div>
			<nav>
				<Link href='/'>
					<button
						className={`px-4 py-2 uppercase transition duration-150 ease-in-out border-4 border-t-0 border-l-0 border-r-0  hover:border-gray-100 ${
							router.pathname === '/' ? 'border-gray-100' : 'border-transparent'
						}`}
					>
						{t('navbar:home')}
					</button>
				</Link>
				<Link href='/about'>
					<button
						className={`px-4 py-2 uppercase transition duration-150 ease-in-out border-4 border-t-0 border-l-0 border-r-0  hover:border-gray-100 ${
							router.pathname === '/about' ? 'border-gray-100' : 'border-transparent'
						}`}
					>
						{t('navbar:about')}
					</button>
				</Link>
				<Link href='/projects'>
					<button
						className={`px-4 py-2 uppercase transition duration-150 ease-in-out border-4 border-t-0 border-l-0 border-r-0  hover:border-gray-100 ${
							router.pathname === '/projects' ? 'border-gray-100' : 'border-transparent'
						}`}
					>
						{t('navbar:projects')}
					</button>
				</Link>
				<Link href={`${router.pathname}`} locale={router.locale === 'en' ? 'sv' : 'en'}>
					<button className='px-4 py-2 ml-2 uppercase transition duration-150 ease-in-out border-4 border-t-0 border-l-0 border-r-0 border-transparent outline-none hover:border-gray-100'>
						{router.locale === 'en' ? 'SV' : 'EN'}
					</button>
				</Link>
			</nav>
		</header>
	);
};

export default NavBar;
