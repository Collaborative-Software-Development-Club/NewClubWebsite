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
    const sizesToValues = useUISizeToCSSValue({
        sm: {
            desktop: '16px',
            mobile: '8px',
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
            paddingTop: sizesToValues[props.top],
            paddingBottom: sizesToValues[props.bottom],
            paddingRight: sizesToValues[props.right],
            paddingLeft: sizesToValues[props.left],
        };
    } else if (props.horizontal && props.vertical) {
        style = {
            padding: `${sizesToValues[props.vertical]} ${sizesToValues[props.horizontal]}`,
        };
    } else if (props.all) {
        style = {
            padding: sizesToValues[props.all],
        };
    } else {
        style = {
            padding: sizesToValues.md,
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
