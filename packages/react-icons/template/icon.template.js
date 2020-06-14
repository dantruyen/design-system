function defaultTemplate(
    { template },
    opts,
    { imports, interfaces, componentName, props, jsx },
) {
    const plugins = ['jsx']
    if (opts.typescript) {
        plugins.push('typescript')
    }
    const typeScriptTpl = template.smart({ plugins })
    return typeScriptTpl.ast`${imports}
        ${interfaces}
        export const ${componentName} = (${props}) => {
            return ${jsx};
        }
    `
}

module.exports = defaultTemplate
