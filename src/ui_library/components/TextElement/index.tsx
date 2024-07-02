import assert from 'assert';
import React from 'react';

function TextElement(
    ElementType: string,
    className: string,
): (props: OnlyStringChildren) => React.ReactElement {
    function Element(props: OnlyStringChildren): React.ReactElement {
        assert(props.children, 'TextElement must have children');
        assert(typeof props.children === 'string', 'children must be a string');
        return React.createElement(ElementType, { className: className }, props.children);
    }
    return Element;
}

export default TextElement;
