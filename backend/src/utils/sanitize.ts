import sanitizeHtml from "sanitize-html"

export function sanitizeComment(comment: string): string {
    return sanitizeHtml(comment, {
        allowedTags: ['b', 'i', 'em', 'strong', 'p'],
        allowedAttributes: {},
        allowedSchemes: [],
    })
}
