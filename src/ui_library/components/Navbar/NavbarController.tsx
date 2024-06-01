'use client';
import FlexContainer from '../FlexContainer';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import useIsMobileScreen from '../../hooks/useIsMobileScreen';

const NavbarController = ({ children }: OnlyChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobileScreen();

    if (!isMobile) {
        return (
            <FlexContainer direction="row" justifyContent="start">
                {children}
            </FlexContainer>
        );
    }
    return (
        <>
            <FlexContainer direction="column" alignItems="end">
                <HamburgerMenu setIsOpen={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {isOpen && <div className={styles.navlinks}>{children}</div>}
            </FlexContainer>
        </>
    );
};

export default NavbarController;
