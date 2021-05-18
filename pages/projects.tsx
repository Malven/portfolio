import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Projects: React.FC = () => {
	return <div>Projects</div>;
};

export default Projects;

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale))
	}
});
