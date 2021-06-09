import React, {Component} from 'react';
import './css/clientprofile.css'
import { Nav, Rightside, NavbarContainer, NavLogo, NavBtn, NavBtnLink } from './DashboardnavComponentElements';

class ClientProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
          clientname: this.props.client.naam,
          clientpwd: this.props.client.pwd,
          clientcity: this.props.client.address.area,
          oldpwd:null,
          newpwd:null,
          confirmpwd:null,
          showEdit:true,
          showEdit2:true,
          showEdit3:true,
          showSave:false,
          showSave2:false,
          showSave3:false,
          personalinfocss: "profileinput",
          personalinfocss2: "profileinput",
          personalinfocss3: "profileinput",
          personalinfocss4: "profileinput",
          showProfile:"profilename",
          showAddress:"profileaddressnone",
          showPwd:"profilepwdnone"
        }
        this.handleName = this.handleName.bind(this);
        this.handleOldPwd = this.handleOldPwd.bind(this);
        this.handleNewPwd = this.handleNewPwd.bind(this);
        this.handleConfirmPwd = this.handleConfirmPwd.bind(this);
    }

    handleName(event){
      this.setState({clientname: event.target.value});
    }

    handleOldPwd(event){
      this.setState({oldpwd: event.target.value});
    }

    handleNewPwd(event){
      this.setState({newpwd: event.target.value});
    }

    handleConfirmPwd(event){
      this.setState({confirmpwd: event.target.value});
    }

    renderProfile(){

      const personaledit = () => {
        this.setState({personalinfocss: "profileinputedit"});
        this.setState({showEdit:false})
        this.setState({showSave:true});
      }

      const contactedit = () => {
        this.setState({personalinfocss2: "profileinputedit"});
        this.setState({showEdit2:false})
        this.setState({showSave2:true});
      }

      const address = () => {
        this.setState({showProfile: "profilenamenone"});
        this.setState({showAddress: "profileaddress"});
        this.setState({showPwd: "profilepwdnone"});
      }

      const personalInfo = () => {
        this.setState({showProfile: "profilename"});
        this.setState({showAddress: "profileaddressnone"});
        this.setState({showPwd: "profilepwdnone"});
      }

      const addressedit = () => {
        this.setState({personalinfocss3: "profileinputedit"});
        this.setState({showEdit3:false})
        this.setState({showSave3:true});
      }

      const saveAddress = () => {
        this.setState({personalinfocss3: "profileinput"});
        this.setState({showEdit3:true})
        this.setState({showSave3:false});
      }

      const password = () => {
        this.setState({showProfile: "profilenamenone"});
        this.setState({showAddress: "profileaddressnone"});
        this.setState({showPwd: "profilepwd"});
      }

      const saveName = () => {
        this.setState({personalinfocss: "profileinput"});
        this.setState({showEdit:true})
        this.setState({showSave:false});
      }

      const saveContact = () => {
        this.setState({personalinfocss2: "profileinput"});
        this.setState({showEdit2:true})
        this.setState({showSave2:false});
      }

      const savePwd = () => {
        if(this.state.oldpwd === this.state.clientpwd)
        {
          if(this.state.newpwd === this.state.confirmpwd &&
            this.state.newpwd !== null)
          {
              this.setState({showProfile: "profilename"});
              this.setState({showAddress: "profileaddressnone"});
              this.setState({showPwd: "profilepwdnone"});
              this.setState({oldpwd: null});
              this.setState({newpwd: null});
              this.setState({confirmpwd: null});
              alert('Pwd change successfully')
          }
          else
          {
            alert('confirm password not match');
          }
        }
        else
        {
          alert("Enter correct old password")
        }
      }

        return(
            <div>
              <Nav >
                    <NavbarContainer>
                      <NavLogo to='/dashboard' >AYS | At Your Service</NavLogo>
                      <Rightside>
                    </Rightside>
                      
                      <NavBtn>
                        <NavBtnLink to="/home">Log Out</NavBtnLink>
                      </NavBtn>
                    </NavbarContainer>
                  </Nav>



              <br/><br/><br/>
              <div className='profile'>
                <center>
                <div className='width90'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='profilename'>
                        <table>
                          <tr>
                            <td><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg'
                             alt='profile-img' className='profileimg' /></td>
                            <td> &nbsp; &nbsp; </td>
                            <td>
                              <span className='hello'>Hello,</span><br/>
                              <b>{this.state.clientname}</b>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br/>
                      <div className='profilename'>
                          Account Settings
                          <br/><br/>
                          <ul>
                          <li className='profileli'
                          onClick={personalInfo}
                          >Personal Information</li>
                            <li className='profileli'
                            onClick={address}
                            >Manage Addresses</li>
                            <li className='profileli'
                            onClick={password}
                            >Change Password</li>
                          </ul>
                      </div>
                    </div>
                    <div className='col-sm-9'>
                      <div className={this.state.showProfile}>
                        <br/>
                        <span className='profiletag'>Personal Information</span>
                        <span className='profileedit'
                        onClick={personaledit}
                        ><b>{ this.state.showEdit ? <>Edit</> : null }</b></span>
                        <br/>
                        <input type='text' placeholder={this.state.clientname}
                        onChange={this.handleName}
                        className={this.state.personalinfocss} tabindex="-1" />
                        { this.state.showSave ? <button className='profilebtnsave'
                        onClick={saveName}
                        >SAVE</button> : null }<br/>
                        <br/>
                        <br/>
                        <span className='profiletag'>Contact Information</span>
                        <span className='profileedit'
                        onClick={contactedit}><b>
                        { this.state.showEdit2 ? <>Edit</> : null }
                        </b></span><br/><br/>
                        <span className='profilesubtag'>Email Address</span><br/>
                        <input type='email' placeholder={this.props.client.email}
                        className={`${this.state.personalinfocss2} email`} tabindex="-1" /><br/>
                        <span className='profilesubtag'>Mobile number</span><br/>
                        <input type='number' placeholder={this.props.client.phno}
                        className={this.state.personalinfocss2} tabindex="-1" />
                        { this.state.showSave2 ? <button className='profilebtnsave'
                        onClick={saveContact}
                        >SAVE</button> : null }
                        <br/>
                      </div>
                      <div className={this.state.showAddress}>
                        <br/>
                        <span className='profiletag'>Address</span>
                        <span className='profileedit'
                        onClick={addressedit}
                        ><b>{ this.state.showEdit3 ? <>Edit</> : null }</b></span>
                        <br/><br/>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>House Number</span><br/>
                            <input type='text' placeholder={this.props.client.address.hno}
                            className={this.state.personalinfocss3} tabindex="-1" /><br/>
                          </div>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>Street</span><br/>
                            <input type='text' placeholder={this.props.client.address.street}
                            className={this.state.personalinfocss3} tabindex="-1" /><br/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>Area</span><br/>
                            <input type='text' placeholder={this.props.client.address.area}
                            className={this.state.personalinfocss3} tabindex="-1" /><br/>
                          </div>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>City</span><br/>
                            <input type='text' placeholder={this.props.client.address.city}
                            className={this.state.personalinfocss3} tabindex="-1" /><br/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>State</span><br/>
                            <input type='text' placeholder={this.props.client.address.state}
                            className={this.state.personalinfocss3} tabindex="-1" /><br/>
                          </div>
                          <div className='col-sm-6'>
                          <br/> &nbsp; &nbsp; &nbsp; &nbsp;
                            { this.state.showSave3 ? <button className='profilebtnsave'
                            onClick={saveAddress}
                            >SAVE</button> : null }
                          </div>
                        </div>
                      </div>
                      <div className={this.state.showPwd}>
                        <span className='profiletag'>Change Password</span>
                        <span className='profileedit'

                        ><b>{ this.state.showEdit4 ? <>Edit</> : null }</b></span>
                        <br/><br/>
                        <span className='profilesubtag'>Old Password :</span><br/>
                        <input type='password' onChange={this.handleOldPwd} placeholder={this.state.oldpwd}
                        className="profileinputedit" tabindex="-1" /><br/>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>New Password :</span><br/>
                            <input type='password' onChange={this.handleNewPwd} placeholder={this.state.newpwd}
                            className="profileinputedit" tabindex="-1" /><br/>
                          </div>
                          <div className='col-sm-6'>
                            <span className='profilesubtag'>Confirm :</span><br/>
                            <input type='password' onChange={this.handleConfirmPwd} placeholder={this.state.confirmpwd}
                            className="profileinputedit" tabindex="-1" /><br/>
                          </div>
                        </div>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button className='profilebtnsave'
                        onClick={savePwd}
                        >SAVE CHANGE</button>
                      </div>
                    </div>
                  </div>
                </div>
                </center>
              </div>
              <br/>
            </div>
        );
    }
    render(){
        return(
        <div>
            {this.renderProfile()}
        </div>
        );
}
}

export default ClientProfile;
