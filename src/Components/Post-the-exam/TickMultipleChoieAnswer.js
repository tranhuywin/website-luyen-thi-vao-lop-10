import Styles from './TickMultipleChoieAnswer.module.css';

export default function TickMultipleChoieAnswer(props) {
    return (
        <div className="form-group form-check">
            <input className={Styles.optionInput + ' ' + Styles.radio}
            type="radio" 
            name={props.nameRadio} 
            onChange={(e) => props.onClickAnswer(e, props.name, props.nameRadio)} 
            id={props.id} />
            <label className="form-check-label" htmlFor={props.id}>{props.name}. {props.value}</label>
        </div>
    )
}
