import styles from './Padding.module.css'
interface AllPadddingValues extends OnlyChildren {
    top: UISize
    bottom: UISize
    left: UISize
    right: UISize
}

interface TwoPaddingValues extends OnlyChildren {
    vertical: UISize
    horizontal: UISize
}

interface SinglePaddingValue extends OnlyChildren {
    all: UISize
}

type InternalPaddingProps = Partial<AllPadddingValues & TwoPaddingValues & SinglePaddingValue> &
    OnlyChildren

export default function Padding(props: TwoPaddingValues): React.JSX.Element
export default function Padding(props: AllPadddingValues): React.JSX.Element
export default function Padding(props: SinglePaddingValue): React.JSX.Element
export default function Padding(props: OnlyChildren): React.JSX.Element
// signature of implementation wont appear as an option
export default function Padding(props: InternalPaddingProps): React.JSX.Element {
    let style
    if (props.top && props.bottom && props.left && props.right) {
        style = {
            paddingTop: sizeToValueMap.get(props.top),
            paddingBottom: sizeToValueMap.get(props.bottom),
            paddingRight: sizeToValueMap.get(props.right),
            paddingLeft: sizeToValueMap.get(props.left),
        }
    } else if (props.horizontal && props.vertical) {
        style = {
            padding: `${sizeToValueMap.get(props.vertical)} ${sizeToValueMap.get(
                props.horizontal,
            )}`,
        }
    } else if (props.all) {
        style = {
            padding: sizeToValueMap.get(props.all),
        }
    } else {
        style = {
            padding: sizeToValueMap.get('md'),
        }
    }
    return (
        <div
            style={{
                ...style,
                height: '100%',
                width: '100%',
            }}
            className={styles.padding}
        >
            {props.children}
        </div>
    )
}

const sizeToValueMap: Map<UISize, string> = new Map([
    ['sm', '16px'],
    ['md', '32px'],
    ['lg', '64px'],
    ['none', '0'],
])

const SMALL = ''
const MEDIUM = ''
const LARGE = ''
