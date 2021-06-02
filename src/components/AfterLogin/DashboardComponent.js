import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Nav, SearchButton, SearchInput, Rightside, NavbarContainer, NavLogo, NavMenu, Navlink , NavItem, NavBtn, NavBtnLink } from './DashboardnavComponentElements';
import Icon1 from '../../images/nagarbai.jpg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './CardElements';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    
    render(){

      /*const lratings = this.props.ratings.filter((rating) => rating.wid === this.props.rating.id);

      var sum = 0;
      for( var i = 0; i < lratings.length; i++ ){
          sum += parseInt( lratings[i].content, 10 ); //don't forget to add the base
      }

      var avg = (sum/lratings.length).toFixed(1);*/

      if (this.props.workersLoading || this.props.clientsLoading){
        return(
            <div className="container">
                <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
            </div>
        )
      }

      else if (this.props.workersErrMess || this.props.clientsErrMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{this.props.workersErrMess}</h4>
                </div>
            </div>
        )
    }

    else if(!this.props.workersLoading || this.props.clientsLoading){

      const lworkers = this.props.workers.filter((worker) => this.props.client.address.area === worker.area)
      const list = lworkers.map((worker) => {return (
       
       <ServicesContainer>
          
        <ServicesH1></ServicesH1>
        

        <ServicesWrapper className="col">
          <ServicesCard to={`/worker/${this.props.client.id}/${worker.id}`}>
            <ServicesIcon src={Icon1}  />
            <ServicesH2>Name: {worker.naam}</ServicesH2>
            <ServicesH2>Work type: Moping</ServicesH2>
            <ServicesH2>Area: {worker.area}</ServicesH2>
            <ServicesH2>Rating: 2.5</ServicesH2>
          </ServicesCard>

        </ServicesWrapper>
      </ServicesContainer>
      
           
          );
      });

        return(
            <>
            
            <Nav >
                    <NavbarContainer>
                      <NavLogo to='/dashboard' >AYS | At Your Service</NavLogo>
                      <Rightside>
                     <SearchInput type='text' placeholder='Search' size='70' />
                    <SearchButton >Search </SearchButton>  
                    </Rightside>
                      <NavMenu >
                        <NavItem>
                          <Navlink className="nav-link" to={`/clientprofile/${this.props.client.id}`}
                          smooth={true} duration={500} spy={true} exact='true' offset={-80} isOpen={this.state.isNavOpen}
                          >My Profile</Navlink>
                        </NavItem>
                        </NavMenu>
                      <NavBtn>
                        <NavBtnLink to="/home">Log Out</NavBtnLink>
                      </NavBtn>
                    </NavbarContainer>
                  </Nav>

                 <div class='row row-cols-1 row-cols-md-3 g-2'>
                  <div class='col'>
                  {list}
                </div>
                </div>
        </>
        );
    }
    }
}

export default Dashboard;