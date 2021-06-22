import { Link } from 'react-router-dom';
import Styles from './Item.module.css';
const Item = ({ name, handleClickBtn, linkItem, textBtn }) => {

	return (
		<div class={"row " + Styles.Item}>
			<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
				<Link
					to={linkItem}
					className={Styles.ItemLink}
				>
					{name}
				</Link>
			</div>
			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				<button className="m-2 btn-two" onClick={handleClickBtn}>
					{textBtn}
          </button>
			</div>
		</div>
	);
}
export default Item;