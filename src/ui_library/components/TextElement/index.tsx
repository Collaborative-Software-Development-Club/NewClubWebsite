import React from 'react';

function TextElement(
    ElementType: string,
    className: string,
): (props: OnlyStringChildren) => React.ReactElement {
    function Element(props: OnlyStringChildren): React.ReactElement {
        return React.createElement(ElementType, { className: className }, props.children);
    }
    return Element;
}

export default TextElement;
