import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function About() {
	return (
		<div>
			<p>About</p>
		</div>
	);
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale))
	}
});
