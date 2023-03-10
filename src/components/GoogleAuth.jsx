import React from 'react';

class GoogleAuth extends React.Component {
  state= {isSignedIn:null}
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: "Streamy",
      }).then(()=>{
        this.auth =window.gapi.auth2.getAuthInstance() // us time p auth ka instance lene k liye banaye apan ye
        this.setState({isSignedIn:this.auth.isSignedIn.get()})// isSignedIn.get y function s apan ko pata chalta h apan sign in hai y nai
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }
  renderAuthButton(){
    if(this.state.isSignedIn===null){
      return null
    }
    else if(this.state.isSignedIn){
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon'/>
          Sign Out
        </button>
      )
    }
    else{
     return(
      <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon'/>
          Sign In With Google
        </button>
     )
    }
  }
  onAuthChange = ()=>{
    this.setState({isSignedIn:this.auth.isSignedIn.get()})
  }

  onSignInClick =()=>{
    this.auth.signIn()
  }
  
  onSignOutClick =()=>{
    this.auth.signOut()
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
} 

export default GoogleAuth;



