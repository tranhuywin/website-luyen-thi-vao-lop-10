import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";
import  { useState } from "react";

addStyles();

const MathQuill = () => {
    
    const [latex, setLatex] = useState(`\\frac{1}{\\sqrt{2}}\\cdot 2`);
    return (
        <div>
            <EditableMathField
                latex={latex}
                onChange={(mathField) => {
                    setLatex(mathField.latex());
                }}
            />
            <StaticMathField>{`\\sqrt{ 123 }`}</StaticMathField>
        </div>

    )
}

export default MathQuill
