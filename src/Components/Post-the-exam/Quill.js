import React, { useState } from 'react';
import ReactQuill from 'react-quill';

export default function Quill(props) {
    const [valueReactQuill, setValueReactQuill] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image', 'video'], [{ 'script': 'sub' }, { 'script': 'super' }],
            ['clean']
        ]
    }
    function handleValue(e){
        setValueReactQuill(e);
        props.setValueQuill(valueReactQuill);
    }
    return (
        <>
            <ReactQuill value={valueReactQuill}
                modules={modules}
                onChange={handleValue}
                placeholder={props.placeHolder}
            />
        </>
    )
}