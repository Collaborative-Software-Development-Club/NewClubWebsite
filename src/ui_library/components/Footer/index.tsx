import FlexContainer from '../FlexContainer';

/**
 *
 * @param props
 * @param {React.ReactNode} props.children
 * @returns a footer with the provided children
 */
const Footer = ({ children }: OnlyChildren) => {
    return (
        <footer>
            <FlexContainer
                direction="row"
                justifyContent="center"
                alignItems="center"
                convertToVerticalOnMobile
            >
                {children}
            </FlexContainer>
        </footer>
    );
};

export default Footer;
