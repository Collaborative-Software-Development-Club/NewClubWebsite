import ActionButton from './ActionButton';
import LinkButton from './LinkButton';
import styles from './Button.module.css';
import assert from 'assert';
import assertStringOptions from '@/ui_library/asserts/assertStringOptions';

const possibleVariants: ExternalButtonProps['variant'][] = [
    'primary',
    'secondary',
    'terciary',
] as const;
const possibleThemes: Exclude<ExternalButtonProps['theme'], undefined>[] = [
    'dark',
    'light',
] as const;
/**
 * Button component that works either as a button that takes an action or a link and can take a theme
 * @param props requires the variant, and child string and either href (with optional newTab) or onClick and can take a theme
 */
export default function Button(props: ExternalLinkButtonProps): React.JSX.Element;
export default function Button(props: ExternalActionButtonProps): React.JSX.Element;
// signature of implementation wont appear as an option
export default function Button(props: OverloadButtonProps) {
    assert(
        props.newTab == undefined || typeof props.newTab === 'boolean',
        'newTab must be a boolean',
    );
    assert(props.variant != undefined, 'Button must have a variant');
    assertStringOptions(props.variant, possibleVariants, 'variant');
    const theme = props.theme ?? 'dark';
    assertStringOptions(theme, possibleThemes, 'theme');
    const className = `${styles.button} ${styles[props.variant]} ${styles[theme]}`;
    if (props.href !== undefined) {
        return (
            <LinkButton className={className} href={props.href} newTab={props.newTab}>
                {props.children}
            </LinkButton>
        );
    } else if (props.onClick !== undefined) {
        return (
            <ActionButton className={className} onClick={props.onClick}>
                {props.children}
            </ActionButton>
        );
    } else {
        throw new Error('Button requires either href or onClick.');
    }
}
