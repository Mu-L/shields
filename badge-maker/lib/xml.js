/**
 * @module
 */

export function stripXmlWhitespace(xml) {
  return xml.replace(/>\s+/g, '>').replace(/<\s+/g, '<').trim()
}

export function escapeXml(s) {
  if (typeof s === 'number') {
    return s
  } else if (s === undefined || typeof s !== 'string') {
    return undefined
  } else {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }
}

/**
 * Representation of an XML element
 */
export class XmlElement {
  /**
   * Xml Element Constructor
   *
   * @param {object} attrs Refer to individual attrs
   * @param {string} attrs.name
   *    Name of the XML tag
   * @param {Array.<string|module:badge-maker/lib/xml~XmlElement>} [attrs.content=[]]
   *    Array of objects to render inside the tag. content may contain a mix of
   *    string and XmlElement objects. If content is `[]` or omitted the
   *    element will be rendered as a self-closing element.
   * @param {object} [attrs.attrs={}]
   *    Object representing the tag's attributes as name/value pairs
   */
  constructor({ name, content = [], attrs = {} }) {
    this.name = name
    this.content = content
    this.attrs = attrs
  }

  /**
   * Render the XML element to a string, applying appropriate escaping
   *
   * @returns {string} String representation of the XML element
   */
  render() {
    const attrsStr = Object.entries(this.attrs)
      .map(([k, v]) => ` ${k}="${escapeXml(v)}"`)
      .join('')
    if (this.content.length > 0) {
      const content = this.content
        .map(function (el) {
          if (typeof el.render === 'function') {
            return el.render()
          } else {
            return escapeXml(el)
          }
        })
        .join(' ')
      return stripXmlWhitespace(
        `<${this.name}${attrsStr}>${content}</${this.name}>`,
      )
    }
    return stripXmlWhitespace(`<${this.name}${attrsStr}/>`)
  }
}

/**
 * Convenience class. Sometimes it is useful to return an object that behaves
 * like an XmlElement but renders multiple XML tags (not wrapped in a <g>).
 */
export class ElementList {
  constructor({ content = [] }) {
    this.content = content
  }

  render() {
    return this.content.reduce(
      (acc, el) =>
        typeof el.render === 'function'
          ? acc + el.render()
          : acc + escapeXml(el),
      '',
    )
  }
}
