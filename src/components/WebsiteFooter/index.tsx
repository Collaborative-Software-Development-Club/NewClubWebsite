import Image from 'next/image'
import Button from '../../ui_components/Button'
import Footer from '@/ui_components/Footer'

const DISCORD_LINK = 'https://discord.gg/tt4ds3MF'
const LINKEDIN_LINK = 'https://www.linkedin.com/groups/14285824/'
const INSTAGRAM_LINK = 'https://www.instagram.com/csdosu/'
const GITHUB_LINK = 'https://github.com/Collaborative-Software-Development-Club'

const WebsiteFooter = () => {
    return (
        <Footer>
            <Button href={DISCORD_LINK} variant="terciary">
                Discord
            </Button>
            <Button href={INSTAGRAM_LINK} variant="terciary">
                Instagram
            </Button>
            {<Image src="/logo.svg" alt="logo" width={100} height={100} />}
            <Button href={LINKEDIN_LINK} variant="terciary">
                LinkedIn
            </Button>
            <Button href={GITHUB_LINK} variant="terciary">
                GitHub
            </Button>
        </Footer>
    )
}

export default WebsiteFooter
