import Image from 'next/image';
import FlexContainer from '../FlexContainer';
import styles from './Navbar.module.css';
import NavbarController from './NavbarController';
import Padding from '../Padding';

interface NavbarProps extends OnlyChildren {
    logoURL?: string;
}

/**
 * Renders the Navbar component with the provided properties and children.
 *
 * @param {NavbarProps} props - Properties for customizing the Navbar component.
 * @param {React.ReactNode} props.children - The children of the Navbar component.
 * @param {string} [props.logoURL] - URL of the logo image (optional).
 * @return {JSX.Element} Rendered JSX element of the Navbar component.
 */
const Navbar = (props: NavbarProps): JSX.Element => {
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
