import Button from '@/ui_library/components/Button';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading2 from '@/ui_library/components/Heading2';
import Padding from '@/ui_library/components/Padding';
import Paragraph from '@/ui_library/components/Paragraph';

export default function NotFound() {
    return (
        <Padding all="lg">
            <FlexContainer direction="column" alignItems="start">
                <Heading2>Not Found</Heading2>
                <Paragraph>Requested page does not exist</Paragraph>
                <Button variant="primary" href="/">
                    Return home
                </Button>
            </FlexContainer>
        </Padding>
    );
}
