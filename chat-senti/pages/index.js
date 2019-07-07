import React, { Component, Fragment } from 'react';
import Layout from '../components/Layout';
import Chat from '../components/Chat';
import OnlineUsers from '../components/OnlineUsers';

class IndexPage extends Component {

  state = { user: null, roomUsers: [] }

  handleKeyUp = evt => {
    if (evt.key === "Enter") {
      const user =  evt.target.value;
      const roomUsers = [];
      this.setState({ user: user });
      roomUsers.push(user);
      this.setState({ roomUsers });
    }
  }

  render() {
    const { user, roomUsers } = this.state;

    const nameInputStyles = {
      background: 'transparent',
      color: 'black',
      border: 0,
      borderBottom: '1px solid #666',
      borderRadius: 0,
      fontSize: '3rem',
      fontWeight: 500,
      boxShadow: 'none !important'
    };

    return (
      <Layout pageTitle="Sentimental Chat">

        <main className="container-fluid position-absolute h-100 bg-info">

          <div className="row position-absolute w-100 h-100">

            <section className="col-md-4 d-flex flex-row flex-wrap align-items-center align-content-center px-5">
              <div className="px-5 mx-5">

                <span className="d-block w-100 h1 text-light" style={{marginTop: -50}}>
                  {
                    user
                      ? (<span>
                          <span style={{color: 'black'}}>Hello!</span> {user}
                        </span>)
                      : `What is your name?`
                  }
                </span>

                { !user && <input type="text" className="form-control mt-3 px-3 py-2" onKeyPress={this.handleKeyUp} autoComplete="off" style={nameInputStyles} /> }

              </div>
            </section>

            <section className="col-md-4 d-flex fex-wrap bg-light">
               
                { <OnlineUsers roomUsers={roomUsers} /> }
           
            </section>

            <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                { user && <Chat activeUser={user} /> }
            </section>

          </div>

        </main>

      </Layout>
    );
  }

}

export default () => (
  <IndexPage />
);