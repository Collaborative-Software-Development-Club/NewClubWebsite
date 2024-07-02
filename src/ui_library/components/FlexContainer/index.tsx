'use client';
import useUISizeToCSSValue from '@/ui_library/hooks/useUISizeToCSSValue';
import styles from './FlexContainer.module.css';
import assertBoolean from '@/ui_library/asserts/assertBoolean';
import assertStringOptions from '@/ui_library/asserts/assertStringOptions';
import assertUISize from '@/ui_library/asserts/assertUISize';

interface FlexContainerProps extends OnlyChildren {
    direction: 'row' | 'column';
    fill?: boolean;
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'center' | 'stretch' | 'end' | 'start';
    wrap?: boolean;
    gap?: UISize;
    convertToVerticalOnMobile?: boolean;
    scroll?: boolean;
}

const possibleDirections: FlexContainerProps['direction'][] = ['row', 'column'] as const;
const possibleJustifyContentValues: Exclude<FlexContainerProps['justifyContent'], undefined>[] = [
    'start',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
] as const;
const possibleAlignItemsValues: Exclude<FlexContainerProps['alignItems'], undefined>[] = [
    'center',
    'stretch',
    'end',
    'start',
] as const;
/**
 * Renders a flexbox container with the provided props.
 * See https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 * @param props - The props for the flex container component.
 * @param props.direction - The direction of the flex container ('row' or 'column').
 * @param [props.fill] - Whether the flex container should fill its parent container.
 * @param [props.justifyContent] - The justify-content property of the flex container.
 * @param [props.alignItems] - The align-items property of the flex container.
 * @param [props.wrap] - Whether the flex container should wrap its children.
 * @param [props.gap] - The gap size of the flex container.
 * @param [props.convertToVerticalOnMobile] - Whether the flex container should convert to a vertical layout on mobile.
 * @param [props.scroll] - Whether the flex container should have a scrollable overflow.
 * @return The rendered flex container component.
 */
const FlexContainer = (props: FlexContainerProps): JSX.Element => {
    assertBoolean(props.fill, 'fill');
    assertBoolean(props.wrap, 'wrap');
    assertBoolean(props.convertToVerticalOnMobile, 'convertToVerticalOnMobile');
    assertBoolean(props.scroll, 'scroll');
    if (props.gap) {
        assertUISize(props.gap, 'gap');
    }
    assertStringOptions(props.direction, possibleDirections, 'direction');
    if (props.justifyContent) {
        assertStringOptions(props.justifyContent, possibleJustifyContentValues, 'justifyContent');
    }
    if (props.alignItems) {
        assertStringOptions(props.alignItems, possibleAlignItemsValues, 'alignItems');
    }
    const gapSizeToValue = useUISizeToCSSValue({
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
        none: '0px',
    });
    let fillStyle = null;
    if (props.fill) {
        fillStyle = props.direction === 'row' ? styles.horizontalFill : styles.verticalFill;
    }
    const className = `
        ${fillStyle}
        ${props.direction == 'row' ? styles.row : styles.column}
        ${styles.flexContainer}
        ${props.wrap && styles.wrap}
        ${props.convertToVerticalOnMobile && styles.convertToVerticalOnMobile}
        ${props.scroll && styles.scroll}
    `;
    const style = {
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        gap: props.gap ? gapSizeToValue[props.gap] : gapSizeToValue.md,
    };
    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    );
};

export default FlexContainer;
