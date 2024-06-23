import Image from 'next/image';
import styles from './MemberPhoto.module.css';

const MemberPhoto = ({ src }: { src: string }) => {
    return (
        <div className={styles.imageContainer}>
            <Image src={src} alt="member photo" className={styles.memberPhoto} fill />
        </div>
    );
};

export default MemberPhoto;
