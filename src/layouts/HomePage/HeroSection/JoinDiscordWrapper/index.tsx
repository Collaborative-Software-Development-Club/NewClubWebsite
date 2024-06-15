'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './JoinDiscordWrapper.module.css';
import { useInView } from 'react-intersection-observer';

const JoinDiscordWrapper = ({ children }: OnlyChildren) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    /* const [inView, setInView] = useState<boolean>(true)
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)
            },
            {
                threshold: 0,
                root: null,
                rootMargin: '0px',
            },
        )
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref]) */

    const className = `
        ${styles.joinDiscordWrapper}
        ${!inView && styles.floating}
    `;

    return (
        <div className={styles.joinDiscordWrapper} ref={ref}>
            <div className={className}>{children}</div>
        </div>
    );
};

export default JoinDiscordWrapper;
