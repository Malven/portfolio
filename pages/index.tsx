import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Img from 'next/image';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export default function Index() {
	const [t] = useTranslation('common');

	return (
		<Fragment>
			<Head>
				<title>Marcus Alvén</title>
				<meta name='keywords' content='portfolio' />
				<meta name='description' content='Personal website and portfolio' />
			</Head>
			<section className='w-3/4 mx-auto'>
				<div className='flex flex-col justify-between py-4 md:flex-row'>
					<div className='mr-4'>
						<Img
							className='rounded-br-3xl ring-4 ring-purple-300 rounded-tl-3xl'
							src='/images/me.jpg'
							alt='me'
							layout='intrinsic'
							width={150}
							height={150}
						/>
					</div>
					<h1 className='text-4xl font-semibold'>{t('main')}</h1>
				</div>
				<div className='h-96'>Hmm</div>
			</section>
		</Fragment>
	);
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale))
	}
});
