import ReactQuill, {Quill} from 'react-quill';

export default function RQuill(props) {
    const valueInit = props.setDefaultvalue;

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image', 'video'], [{ 'script': 'sub' }, { 'script': 'super' }],
            ['clean']
        ],
        
    }
    function handleValue(e) {
        props.getValueQuill(e);
    }
    return (
        <>
            <ReactQuill          
            onfile
                value={valueInit}
                modules={modules}
                onChange={handleValue}
                placeholder={props.placeHolder}
            />
        </>
    )
}

