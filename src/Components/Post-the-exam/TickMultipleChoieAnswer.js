import React from 'react'

export default function TickMultipleChoieAnswer(props) {
    return (
        <>
            <div class="form-group form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id={props.id}  />
                <label class="form-check-label" for={props.id}>{props.name}. Default radio</label>
            </div>
        </>
    )
}
