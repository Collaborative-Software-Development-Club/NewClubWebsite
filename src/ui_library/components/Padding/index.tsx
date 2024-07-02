'use client';
import useUISizeToCSSValue from '@/ui_library/hooks/useUISizeToCSSValue';
import styles from './Padding.module.css';
import assertUISize from '@/ui_library/asserts/assertUISize';
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

/**
 * @overload
 * Surrounds inner element with default padding on all sides.
 * (client component)
 *
 * @param {React.ReactNode} child elements
 */
/**
 * @overload
 * Surrounds inner element with given vertical and horizontal padding values.
 * (client component)
 *
 * @param {UISize} vertical
 * @param {UISize} horizontal
 * @param {React.ReactNode} child elements
 */
/**
 * @overload
 * Surrounds inner element with given top, bottom, right, and left paddings.
 * (client component)
 *
 * @param {UISize} props - The props object containing the padding values.
 * @param {UISize}props.top - The top padding value.
 * @param {UISize} props.bottom - The top padding value.
 * @param {UISize} props.left- The top padding value.
 * @param {UISize} props.right - The top padding value.
 * @param {React.ReactNode} child elements
 */
/**
 * @overload
 * Surrounds inner element with given top, bottom, right, and left paddings.
 * (client component)
 *
 * @param {UISize} props - The props object containing the padding values.
 * @param {UISize} props.all - The padding value.
 * @param {React.ReactNode} child elements
 */
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
        assertUISize(props.top, 'top');
        assertUISize(props.bottom, 'bottom');
        assertUISize(props.right, 'right');
        assertUISize(props.left, 'left');
        style = {
            paddingTop: sizesToValues[props.top],
            paddingBottom: sizesToValues[props.bottom],
            paddingRight: sizesToValues[props.right],
            paddingLeft: sizesToValues[props.left],
        };
    } else if (props.horizontal && props.vertical) {
        assertUISize(props.vertical, 'vertical');
        assertUISize(props.horizontal, 'horizontal');
        style = {
            padding: `${sizesToValues[props.vertical]} ${sizesToValues[props.horizontal]}`,
        };
    } else if (props.all) {
        assertUISize(props.all, 'all');
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
