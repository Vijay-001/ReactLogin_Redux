import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll, _delete, update } from '../_actions';
import  { UpdateDetails, getdata} from '../UpdateDetails/updatedetails'

let stageflag=0;

class HomePage extends React.Component {

  handleUpdateUser(user) {
       stageflag = user.id
   }
    componentDidMount() {
      stageflag=0;
      this.props.getAll();

    }

    handleDeleteUser(id) {
      stageflag=0;
        return (e) => this.props._delete(id);
    }



    render() {
        const { user, users } = this.props;
        if (stageflag !=0){
          return(
            <div className="col-md-6 col-md-offset-3">
              <UpdateDetails update={this.props.update} UserId={user.id}/>
              </div>
          )
        }else {


          return (
              <div className="col-md-6 col-md-offset-3">
                  <h3>Hi</h3>
                  <p>You're logged in with user details!</p>
                  <p>All registered users:</p>
                  <p></p>
                  <p></p>
                  {users.loading && <em>Loading users...</em>}
                  {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                      <ul>
                          {users.items.map((user, index) =>
                              <li key={user.id}>
                                  {user.firstName + ' ' + user.lastName}
                                  {
                                      user.deleting ? <em> - Deleting...</em>
                                      : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                      : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                  }
                                  {

                                    <span> - <Link to="/" onClick={this.handleUpdateUser(user)}>Update</Link></span>
                                  }
                              </li>
                          )}
                      </ul>
                  }
                <p></p>
                  <p>
                    <Link to="/login">Logout</Link>
                  </p>
                </div>
          );
        }

    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

// const actionCreators = {
//     getUsers: getAll,
//     deleteUser: _delete,
//     // updateUser: userActions.update
// }

const mapDispatchToProps = (dispatch) => {
    return{
      getAll: () => {
         dispatch(getAll())
      },
      _delete: (id) => {
         dispatch(_delete(id))
      },
      update: (user) => {
         dispatch(update(user))
      }
    }
}

const connectedHomePage = connect(mapState, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };
