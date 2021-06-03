import React, {Component} from 'react';
import { Control, } from 'react-redux-form';
import video from '../videos/videosignin.mp4';
import { Container, FormWrap, Icon, FormContent, Form, Formside, Formgrid, IndexBg, VideoBg, FormH1, FormLabel, FormButton } from './WorkerSignupComponentElements';
class Signup_worker extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){
        return(
            <>
            <Container>
              <FormWrap>
                <Icon to='/'>At Your Service</Icon>
                <FormContent>
                  <Form onSubmit={(values) => this.handleSubmit(values)}>
                    <FormH1>Sign up to our application</FormH1>
                    <Formside>
                    <FormLabel htmlFor="name">Name</FormLabel>
                         <Control.text model=".name" id="name" name="name"
                                              placeholder="Name"
                                              className="form-control"
                                               />
                        </Formside>
                      <Formside>
                      <FormLabel htmlFor="experience">Experience</FormLabel>
                      <div>
                        <Control.text model=".experience" id="experience" name="experience"
                                              placeholder="Experience"
                                              className="form-control"
                                               />
                        </div>
                        </Formside>
                        <Formside>   
                    <FormLabel htmlFor="phno">Ph no.</FormLabel>
                    <div>
                  <Control.text model=".phno" id="phno" name="phno"
                                              placeholder="Ph no."
                                              className="form-control"
                                               />
                 </div>
      
                 </Formside>
                  <Formside>
                 <FormLabel htmlFor="gender">Gender</FormLabel>
                    <div>
                  <Control.text model=".gender" id="gender" name="gender"
                                              placeholder="Gender"
                                              className="form-control" />
                 </div>
                 </Formside>
      
                 <Formside>
                 <FormLabel htmlFor="specialization">Specialization</FormLabel>
                <Formgrid>
                  

                   <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-1"
                                        className="form-control"
                                         />


                   <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-2"
                                        className="form-control"
                                         />
                                      
                  </Formgrid>
                  <Formgrid>
                   <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-3"
                                        className="form-control"
                                         />
                  
                  
                   <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-4"
                                        className="form-control"
                                         />
                  </Formgrid>
                  </Formside>
      
                  <Formgrid>
              
                    <FormButton to='' type='submit' primary='' dark='false' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Submit </FormButton>
                    
                
              </Formgrid>
              
              </Form>
              </FormContent>
              </FormWrap>
              <IndexBg>
              <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </IndexBg>
            </Container>
          </>
        )
    }
}

export default Signup_worker;