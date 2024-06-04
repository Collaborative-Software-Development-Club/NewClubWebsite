import Image from 'next/image';
import styles from './MemberPhoto.module.css';

const MemberPhoto = ({ src }: { src: string }) => {
    return (
        // <div className={styles.imageContainer}>
        <Image
            src={src}
            alt="member photo"
            className={styles.memberPhoto}
            height={200}
            width={200}
        />
        // </div>
    );
};

export default MemberPhoto;
