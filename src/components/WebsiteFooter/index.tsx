import Image from 'next/image';
import Button from '@/ui_library/components/Button';
import Footer from '@/ui_library/components/Footer';
import Padding from '@/ui_library/components/Padding';

const DISCORD_LINK = 'https://discord.gg/tt4ds3MF';
const LINKEDIN_LINK = 'https://www.linkedin.com/groups/14285824/';
const INSTAGRAM_LINK = 'https://www.instagram.com/csdosu/';
const GITHUB_LINK = 'https://github.com/Collaborative-Software-Development-Club';

const WebsiteFooter = () => {
    return (
        <Padding>
            <Footer>
                <Button href={DISCORD_LINK} variant="terciary" newTab>
                    Discord
                </Button>
                <Button href={INSTAGRAM_LINK} variant="terciary" newTab>
                    Instagram
                </Button>
                {<Image src="/logo.svg" alt="logo" width={100} height={100} />}
                <Button href={LINKEDIN_LINK} variant="terciary" newTab>
                    LinkedIn
                </Button>
                <Button href={GITHUB_LINK} variant="terciary" newTab>
                    GitHub
                </Button>
            </Footer>
        </Padding>
    );
};

export default WebsiteFooter;
