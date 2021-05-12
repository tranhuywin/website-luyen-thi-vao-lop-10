import { StaticMathField,addStyles } from "react-mathquill";
import ReactDOMServer from 'react-dom/server';

addStyles();
const FiltermathSigns = ({ valueQuill }) => {
    let stringBetweenImgTag = '';
    if (valueQuill && valueQuill.includes('mathsigns(')) {
        const indexOfImageStart = valueQuill.indexOf('mathsigns(') + 10;
        const indexOfImageEnd = valueQuill.indexOf(')', (indexOfImageStart));
        stringBetweenImgTag = valueQuill.slice(indexOfImageStart, (indexOfImageEnd));
    }
    stringBetweenImgTag = `\\sqrt{123}`;
    console.log(ReactDOMServer.renderToStaticMarkup( <StaticMathField>{stringBetweenImgTag}</StaticMathField>));
    //console.log(stringBetweenImgTag);
   
    return (
         <StaticMathField>{stringBetweenImgTag}</StaticMathField>
    )   
}
export default FiltermathSigns
