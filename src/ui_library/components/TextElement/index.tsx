import React from 'react'

function TextElement(ElementType: string, className: string) {
    return function (props: OnlyStringChildren): React.ReactElement {
        return React.createElement(ElementType, { className: className }, props.children)
    }
}

export default TextElement
