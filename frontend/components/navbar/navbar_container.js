import {connect} from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = ({session}) => ({
  sessionId: session.id
});

export default connect(mapStateToProps)(NavBar);
