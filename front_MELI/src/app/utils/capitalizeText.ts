export const capitalizeText = (text: string) => {
    const textToArray = text.split(" ");
    return textToArray.map(word => `${word.charAt(0).toLocaleUpperCase()}${word.slice(1).toLowerCase()}`).join(" ");
}