import Styles from './Toast.module.css';

const Toast = ({heading, body, isShow}) => {
    return (
        <div className="position-fixed bottom-0 right-0 p-4 rounded" style={{"z-index": 5, right: 0, bottom: 0,}}>
                <div id="liveToast" className={isShow ? 'toast fade show' : 'toast fade hiden'} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className={'toast-header ' + Styles.headingToast}>
                        <strong className="mr-auto">{heading}</strong>
                        <small className='ml-4'>&lt; 1 phút trước</small>
                    </div>
                    <div className="toast-body ">
                        {body}
                    </div>
                </div>
            </div>
    )
}

export default Toast
