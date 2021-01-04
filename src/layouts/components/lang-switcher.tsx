import React ,{ Component, Dispatch } from 'react';
import { getCurrentLocale } from '../../shared/helpers';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { cookies } from '../../shared/helpers';

interface props {
	dispatch: Dispatch<any>;
	lang: string;
}
function mapStateToProps(state) {
	return {
		lang: getCurrentLocale(state)
	};
}

class LangSwitcher extends Component<props, {}> {

	handleChangeLang(props) {
		let newLang = (props.lang === 'ar' ? 'en' : 'ar');
		cookies.set('Language', newLang, { path: '/' });
		window.location.reload();
}

render() {
	return (
		<a href='#' className='lang-switch' onClick={() => this.handleChangeLang(this.props)}><Translate value='otherLanguage'/> </a>
	);
	}
}

export default connect(mapStateToProps)(LangSwitcher);