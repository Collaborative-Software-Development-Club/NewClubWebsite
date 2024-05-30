import FlexContainer from '@/ui_components/FlexContainer'

const Content = ({ children }: OnlyChildren) => {
    return (
        <FlexContainer direction={'column'} fill gap="3rem">
            {children}
        </FlexContainer>
    )
}

export default Content
