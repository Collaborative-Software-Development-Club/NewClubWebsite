import React from 'react';
import HeroSection from './HeroSection';
import MoreInfoSection from './MoreInfoSection';
import ProjectsSection from './ProjectsSection';
import WebsiteFooter from '@/components/WebsiteFooter';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <MoreInfoSection />
            <ProjectsSection />
            <WebsiteFooter />
        </>
    );
};

export default HomePage;
