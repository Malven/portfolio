import Link from 'next/link';
import { Fragment } from 'react';
import { Children } from '../types';
import NavBar from './navbar';

const Layout = ({ children }: Children) => {
	return (
		<Fragment>
			<NavBar />
			<main className='mx-auto bg-white border border-gray-300 mt-14'>{children}</main>
			<footer className='flex justify-between p-4 text-gray-100 bg-gray-800'>
				<ul className='list-disc list-inside'>
					<li className='py-2 transition-colors duration-150 ease-in-out list-item hover:text-gray-400'>
						<a href='https://github.com/Malven'>GitHub</a>
					</li>
					<li className='py-2 transition-colors duration-150 ease-in-out list-item hover:text-gray-400'>
						<a href='https://www.linkedin.com/in/marcus-alven/'>LinkedIn</a>
					</li>
					<li className='py-2 transition-colors duration-150 ease-in-out list-item hover:text-gray-400'>
						<a href='https://twitter.com/Glore_'>Twitter</a>
					</li>
				</ul>
				<span>
					<Link href='/'>
						<button className='transition-colors duration-150 ease-in-out hover:text-gray-400 '>
							&copy; 2021 malven.se
						</button>
					</Link>
				</span>
			</footer>
		</Fragment>
	);
};

export default Layout;
