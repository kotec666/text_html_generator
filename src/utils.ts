
export function rootElement(content: string | undefined) {
    return `<body>${content}</body>`
}

export function section(content: string | undefined) {
    return `<section class="section">${content ? content : ''}`
}

export function column(content: string | undefined) {
    return `<div class="column">${content ? content : ''}`
}

export function heading(content: string | undefined) {
    return `<h1 class="heading">${content ? content : ''}`
}
