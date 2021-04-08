import { connect } from 'react-redux';
import { getFavs } from '../../../redux/usersSlice';
import SavedContainer from './SavedContainer';

function mapDispatchToProps(dispatch) {
  return {
    getFavs: () => dispatch(getFavs()),
  };
}

function mapStateToProps(state) {
  return {
    rooms: state.roomsReducer.favs,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);
