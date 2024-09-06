export const formatNumberWithDots = (num: string | number): string => {
    const numStr = typeof num === 'number' ? num.toString() : num
    const cleanStr = numStr.replace(/[^\d.]/g, '')
    const [integerPart, decimalPart] = cleanStr.split('.')

    const formattedInteger = integerPart
        .split('')
        .reverse()
        .reduce((acc, char, index) => {
            return char + (index && index % 3 === 0 ? '.' : '') + acc
        }, '')

    const finalInteger = formattedInteger.startsWith('.')
        ? formattedInteger.slice(1)
        : formattedInteger
    return decimalPart ? `${finalInteger}.${decimalPart}` : finalInteger
}
