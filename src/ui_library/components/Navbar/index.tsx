import Image from 'next/image';
import FlexContainer from '../FlexContainer';
import styles from './Navbar.module.css';
import NavbarController from './NavbarController';
import Padding from '../Padding';

interface NavbarProps extends OnlyChildren {
    logoURL?: string;
}

const Navbar = (props: NavbarProps) => {
    return (
        <nav className={styles.navbar}>
            <Padding all="md">
                <FlexContainer direction="row" justifyContent="space-between" fill>
                    {props.logoURL && (
                        <Image src={props.logoURL} alt="logo" width={100} height={40} />
                    )}
                    <NavbarController>{props.children}</NavbarController>
                </FlexContainer>
            </Padding>
        </nav>
    );
};

export default Navbar;
