import React from 'react'
import Image from 'next/image'
import styles from './BackgroundImage.module.css'

const BackgroundImage = () => {
    return (
        <div className={styles.imageContainer}>
            <Image
                className={styles.backgroundImage}
                src="logo.svg"
                fill
                alt="background logo image"
            />
        </div>
    )
}

export default BackgroundImage
