import FlexContainer from '@/ui_library/components/FlexContainer';

const Content = ({ children }: OnlyChildren) => {
    return (
        <FlexContainer direction={'column'} fill gap="lg">
            {children}
        </FlexContainer>
    );
};

export default Content;
