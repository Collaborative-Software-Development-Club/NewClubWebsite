import Button from '@/ui_library/components/Button';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Section from '@/ui_library/components/Section';
import RotatingText from './RotatingText';
import Padding from '@/ui_library/components/Padding';
import TextBulletedList from '@/ui_library/components/TextBulletedList';
import content from '@/websiteContent';

const MoreInfoSection = () => {
    return (
        <>
            <Section id="info">
                <Padding top="md" bottom="sm" right="lg" left="lg">
                    <FlexContainer direction="column" alignItems="start">
                        <RotatingText />
                        <TextBulletedList bullets={content.BULLET_POINTS} />
                        <Button variant="secondary" href="/members">
                            {content.OFFICERS_CTA}
                        </Button>
                        {/* <Button variant={'terciary'} href={PROJECTS_LINK}>
                            {PROJECTS_CTA}
                        </Button> */}
                    </FlexContainer>
                </Padding>
            </Section>
        </>
    );
};

export default MoreInfoSection;
