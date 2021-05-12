import { StaticMathField,addStyles } from "react-mathquill";
addStyles();
const FiltermathSigns = ({ valueQuill }) => {
    let stringBetweenImgTag = '';
    if (valueQuill && valueQuill.includes('mathsigns(')) {
        const indexOfImageStart = valueQuill.indexOf('mathsigns(') + 10;
        const indexOfImageEnd = valueQuill.lastIndexOf(')');
        stringBetweenImgTag = valueQuill.slice(indexOfImageStart, (indexOfImageEnd));
    }
    return (
         <StaticMathField>{stringBetweenImgTag}</StaticMathField>
    )   
}
export default FiltermathSigns
