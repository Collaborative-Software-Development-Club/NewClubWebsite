import FlexContainer from '../FlexContainer';
import Padding from '../Padding';

const Caroussel = ({ children }: OnlyChildren) => {
    return (
        <FlexContainer direction="column" fill>
            <FlexContainer direction="row" fill scroll>
                <Padding vertical="lg" horizontal="lg">
                    <FlexContainer direction="row" alignItems="stretch">
                        {children}
                    </FlexContainer>
                </Padding>
            </FlexContainer>
        </FlexContainer>
    );
};

export default Caroussel;
