import styles from './FlexContainer.module.css'

interface FlexContainerProps extends OnlyChildren {
    direction: 'row' | 'column'
    fill?: boolean
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'center' | 'stretch' | 'end' | 'start'
    wrap?: boolean
    gap?: string
    convertToVerticalOnMobile?: boolean
    scroll?: boolean
}

const FlexContainer = (props: FlexContainerProps) => {
    let fillStyle = null
    if(props.fill) {
        fillStyle = props.direction === 'row' ? styles.horizontalFill : styles.verticalFill;
    }
    const className = `
        ${fillStyle}
        ${props.direction == 'row' ? styles.row : styles.column}
        ${styles.flexContainer}
        ${props.wrap && styles.wrap}
        ${props.convertToVerticalOnMobile && styles.convertToVerticalOnMobile}
        ${props.scroll && styles.scroll}
    `
    const style = {
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        gap: props.gap
    }
    return <div className={className} style={style}>{props.children}</div>
}

export default FlexContainer
