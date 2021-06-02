import React, {Component} from 'react';
import { Card, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Nav, SearchButton, SearchInput, Rightside, NavbarContainer, NavLogo, NavMenu, Navlink , NavItem, NavBtn, NavBtnLink } from './DashboardnavComponentElements';


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
                <div className="row">
                    <Loading />
                </div>
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
            <Card>
                  <Link to={`/worker/${this.props.client.id}/${worker.id}`} >
                      {/*<CardImg width="100%" src={worker.image} alt={worker.name} />*/}
                      <CardImgOverlay></CardImgOverlay>
                          <CardTitle>{worker.naam}</CardTitle>
                  </Link>
             </Card>
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
                  
                  {list}
                
                </>
        );
    }
    }
}

export default Dashboard;