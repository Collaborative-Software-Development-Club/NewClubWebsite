import Button from '@/ui_library/components/Button';
import Navbar from '@/ui_library/components/Navbar';

const LOGO_URL = '/logo.svg';

const Navigation = () => {
    return (
        <Navbar logoURL={LOGO_URL}>
            <Button href="/" variant="terciary">
                About us
            </Button>
            <Button href="/members" variant="terciary">
                Our Members
            </Button>
            <Button href="/projects" variant="terciary">
                Projects
            </Button>
            {/*             <Button href="" variant="terciary">
                Arcade
            </Button> */}
        </Navbar>
    );
};

export default Navigation;

/*
 <nav className={styles.navbar}>
            <div className={styles.container}>
                <Image src={LOGO_URL} alt="logo" width={100} height={40}/>
                <div>
                    <Button href="" variant='terciary'>About us</Button>
                    <Button href="" variant='terciary'>Our Members</Button>
                    <Button href="" variant='terciary'>Projects</Button>
                    <Button href="" variant='terciary'>Arcade</Button>
                </div>
                <p className={styles.hamburger}>hamburger</p>
            </div>
        </nav>
*/
