import useIsMobileScreen from './useIsMobileScreen';

type UISizeToValueMap = Map<UISize, string>;

function createMapFromUISIzeToCSSValue(
    sm: string,
    md: string,
    lg: string,
    none: string,
): UISizeToValueMap {
    return new Map([
        ['sm', sm],
        ['md', md],
        ['lg', lg],
        ['none', none],
    ]);
}

type UISizeOption =
    | {
          mobile: string;
          desktop: string;
      }
    | string;

interface UISizeMapping {
    sm: UISizeOption;
    md: UISizeOption;
    lg: UISizeOption;
    none: UISizeOption;
}

/*
interface UISizeOption {
    getValue(isMobile: boolean): string;
}

class SingleUISizeOption implements UISizeOption {
    constructor(private mobile: string, private desktop: string) {}
    getValue(isMobile: boolean) {
        return isMobile ? this.mobile : this.desktop
    }
}

class ResponsiveUISizeOption implements UISizeOption {
    constructor(private value: string) {}
    getValue(isMobile: boolean) {
        return this.value
    }
}*/

function useUISizeToCSSValue(mapping: UISizeMapping): UISizeToValueMap {
    const isMobile = useIsMobileScreen();
    const map = createMapFromUISIzeToCSSValue(
        getValueOfProperty(mapping.sm, isMobile),
        getValueOfProperty(mapping.md, isMobile),
        getValueOfProperty(mapping.lg, isMobile),
        getValueOfProperty(mapping.none, isMobile),
    );
    return map;
}

function getValueOfProperty(sizeValue: UISizeOption, isMobile: boolean) {
    if (typeof sizeValue == 'string') {
        return sizeValue;
    }
    return isMobile ? sizeValue.mobile : sizeValue.desktop;
}

export default useUISizeToCSSValue;
