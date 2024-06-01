import useIsMobileScreen from './useIsMobileScreen';

type CSSPropertyValue = string;

type UISizeOption =
    | {
          mobile: CSSPropertyValue;
          desktop: CSSPropertyValue;
      }
    | CSSPropertyValue;

interface UISizeMapping {
    sm: UISizeOption;
    md: UISizeOption;
    lg: UISizeOption;
    none: UISizeOption;
}

function useUISizeToCSSValue(mapping: UISizeMapping) {
    const isMobile = useIsMobileScreen();
    console.log(isMobile);
    return {
        sm: getValueOfProperty(mapping.sm, isMobile),
        md: getValueOfProperty(mapping.md, isMobile),
        lg: getValueOfProperty(mapping.lg, isMobile),
        none: getValueOfProperty(mapping.none, isMobile),
    };
}

function getValueOfProperty(sizeValue: UISizeOption, isMobile: boolean) {
    const converted = sizeValue as any;
    if (converted.mobile == undefined) {
        return sizeValue;
    }
    return isMobile ? converted.mobile : converted.desktop;
}

export default useUISizeToCSSValue;
