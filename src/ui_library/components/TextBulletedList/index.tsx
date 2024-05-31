import Paragraph from "../Paragraph"

const TextBulletedList = ({ bullets }: { bullets: string[] }) => {
    return (
        <ul>
            {bullets.map((bullet) => (
                <li key={bullet}><Paragraph>{bullet}</Paragraph></li>
            ))}
        </ul>
    )
}

export default TextBulletedList
