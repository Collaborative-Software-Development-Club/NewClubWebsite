import getProjects from '@/cms/getProjects';
import GamePage from '@/layouts/GamePage';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    const projectsData = await getProjects();
    return projectsData
        .filter((project) => project.playUrl != undefined)
        .map((game) => {
            return {
                game: game.playUrl,
            };
        });
}

export const metadata: Metadata = {
    title: `CSDC - Play`,
};

export default async function Game({ params }: { params: { game: string } }) {
    return (
        <main>
            <GamePage path={`/games/${params.game}`} />
        </main>
    );
}

function parseName(str: string) {
    return str.replace('%20', ' ');
}
