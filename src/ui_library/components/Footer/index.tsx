import FlexContainer from '../FlexContainer'

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
    )
}

export default Footer
