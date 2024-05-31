'use client';
import useUISizeToCSSValue from '@/ui_library/hooks/useUISizeToCSSValue';
import styles from './Padding.module.css';
interface AllPadddingValues extends OnlyChildren {
    top: UISize;
    bottom: UISize;
    left: UISize;
    right: UISize;
}

interface TwoPaddingValues extends OnlyChildren {
    vertical: UISize;
    horizontal: UISize;
}

interface SinglePaddingValue extends OnlyChildren {
    all: UISize;
}

type InternalPaddingProps = Partial<AllPadddingValues & TwoPaddingValues & SinglePaddingValue> &
    OnlyChildren;

export default function Padding(props: TwoPaddingValues): React.JSX.Element;
export default function Padding(props: AllPadddingValues): React.JSX.Element;
export default function Padding(props: SinglePaddingValue): React.JSX.Element;
export default function Padding(props: OnlyChildren): React.JSX.Element;
// signature of implementation wont appear as an option
export default function Padding(props: InternalPaddingProps): React.JSX.Element {
    const sizeToValueMap = useUISizeToCSSValue({
        sm: {
            desktop: '16px',
            mobile: '8px,',
        },
        md: {
            desktop: '32px',
            mobile: '24px',
        },
        lg: {
            desktop: '64px',
            mobile: '32px',
        },
        none: '0',
    });
    let style;
    if (props.top && props.bottom && props.left && props.right) {
        style = {
            paddingTop: sizeToValueMap.get(props.top),
            paddingBottom: sizeToValueMap.get(props.bottom),
            paddingRight: sizeToValueMap.get(props.right),
            paddingLeft: sizeToValueMap.get(props.left),
        };
    } else if (props.horizontal && props.vertical) {
        style = {
            padding: `${sizeToValueMap.get(props.vertical)} ${sizeToValueMap.get(
                props.horizontal,
            )}`,
        };
    } else if (props.all) {
        style = {
            padding: sizeToValueMap.get(props.all),
        };
    } else {
        style = {
            padding: sizeToValueMap.get('md'),
        };
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
    );
}
