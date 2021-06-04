import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label } from 'reactstrap';
import {Control, LocalForm} from "react-redux-form";
import { Loading } from './LoadingComponent';
import './css/WorkerDetailsComponent.css';

class Worker_details extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAddCmt : false
        };
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleSubmit1(values){
        // this.toggleModal1();
        this.props.postComment(values.content, this.props.client.id, this.props.worker.id);
    }

    handleSubmit2(values){
        // this.toggleModal2();
        this.props.postRating(values.rating, this.props.client.id, this.props.worker.id);
    }

    render(){

        if(this.props.isLoading){
            return(
                <div className="container">
                  <center>
                    <div className="row">
                      <div className="height100">
                      </div>
                        <Loading />
                        <div className="height100">
                        </div>
                    </div>
                  </center>
                </div>
            )
        }

        else if (this.props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }

        else if(this.props.worker != null)

        var lcomments = this.props.comments.filter((comment) => comment.wid === this.props.worker.id)

        var list = lcomments.reverse().map((comment) => {return (
            <table>
              <tr>
                <td>
                  <li> </li>
                </td>
                <td>
                  {comment.content}
                </td>
              </tr>
            </table>
             );
        });

        const lratings = this.props.ratings.filter((rating) => rating.wid === this.props.worker.id);

        var sum = 0;
        for( var i = 0; i < lratings.length; i++ ){
            sum += parseInt( lratings[i].content, 10 );
        }

        var avg = (sum/lratings.length).toFixed(1);

        const addcmt = () => {

        }

        const addcmtclick = () => {
          this.setState({showAddCmt:true})
        }

        const cancelcmt = () => {
          this.setState({showAddCmt:false})
        }

        return(
          <div className='baidark'><center>
            <div className='bai'>
              <center>
                <div>
                  <br/><br/>
                  <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg'
                  alt='img' className='imgbai' />
                </div>
              </center>
              <div className='bainame'>
                <span>{this.props.worker.naam}</span>
              </div>
              <div className='row'>
                <div className='col-sm-6 left'>
                <table>
                  <tr><td valign="top"><img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Combotrans.svg'
                  className='logoimg' />
                    </td><td>
                    <div className='baitag1'>
                      Gender
                    </div>
                    <div className='baitag2'>
                      {this.props.worker.gender}
                    </div>
                    </td>
                  </tr>
                </table>
                </div>
                <div className='col-sm-6 left'>
                  <table>
                    <tr><td valign="top"><img src='https://www.cars24.com/js/83816f17693307f6aff0a12ceb319cf1.svg'
                    className='logoimg' />
                      </td><td>
                      <div className='baitag1'>
                        Experience
                      </div>
                      <div className='baitag2'>
                        {this.props.worker.experience} yr
                      </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6 left'>
                <table>
                  <tr><td valign="top"><img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'
                  className='logoimg' />
                    </td><td>
                    <div className='baitag1'>
                      Contact
                    </div>
                    <div className='baitag2'>
                      {this.props.worker.phno}
                    </div>
                    </td>
                  </tr>
                </table>
                </div>
                <div className='col-sm-6 left'>
                  <table>
                    <tr><td valign="top"><img src='https://s3.amazonaws.com/coursera/specializations/reasoning/logo.png'
                    className='logoimg' />
                      </td><td>
                      <div className='baitag1'>
                        Specialization
                      </div>
                      <div className='baitag2'>
                        {this.props.worker.specialization[0]}<br/>
                        {this.props.worker.specialization[1]}<br/>
                        {this.props.worker.specialization[2]}<br/>
                        {this.props.worker.specialization[3]}<br/>
                      </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className='ratebai'>
                <table width="100%">
                  <div className="row">
                    <div className="col-sm-4"><center>
                      Rating
                      <div className='rateaankda'>
                        <>{avg}</>
                      </div>
                        <span className="fa fa-star checked"></span>{'  '}
                        <span className="fa fa-star checked"></span>{'  '}
                        <span className="fa fa-star checked"></span>{'  '}
                        <span className="fa fa-star checked"></span>{'  '}
                        <span className="fa fa-star checked"></span>
                      </center>
                    </div>
                    <div className="col-sm-8">
                      <center>

                      <div id="rating_bar">
                        <div id="rate_1"></div>
                        <div id="rate_2"></div>
                        <div id="rate_3"></div>
                        <div id="rate_4"></div>
                        <div id="rate_5"></div>
                      </div>

                        <div>Rate the worker<br/><br/>
                          <table>
                            <tr>
                              <td>
                                <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                  <Control.input type="hidden" defaultValue="1" id="rating" model=".rating" name="rating" disabled/>
                                  <Button value="submit" className="fa fa-star rating" title="Awful"></Button>&nbsp; &nbsp; &nbsp;
                                </LocalForm>
                              </td>
                              <td>
                                <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                  <Control.input type="hidden" defaultValue="2" id="rating" model=".rating" name="rating" disabled/>
                                  <Button value="submit" className="fa fa-star rating" title="Ok"></Button>&nbsp; &nbsp; &nbsp;
                                </LocalForm>
                              </td>
                              <td>
                                <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                  <Control.input type="hidden" defaultValue="3" id="rating" model=".rating" name="rating" disabled/>
                                  <Button value="submit" className="fa fa-star rating" title="Good"></Button>&nbsp; &nbsp; &nbsp;
                                </LocalForm>
                              </td>
                              <td>
                                <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                  <Control.input type="hidden" defaultValue="4" id="rating" model=".rating" name="rating" disabled/>
                                  <Button value="submit" className="fa fa-star rating" title="Great"></Button>&nbsp; &nbsp; &nbsp;
                                </LocalForm>
                              </td>
                              <td>
                                <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                  <Control.input type="hidden" defaultValue="5" id="rating" model=".rating" name="rating" disabled/>
                                  <Button value="submit" className="fa fa-star rating" title="Awesome"></Button>&nbsp; &nbsp; &nbsp;
                                </LocalForm>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </center>
                    </div>
                  </div>
                </table>
              </div>

              <br/><br/>

              <div className='cmtbai'>

                <LocalForm onSubmit={values => this.handleSubmit1(values)}>
                <table width="100%">
                  <tr>
                    <td width="60px">
                      <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg'
                       className='logoimg'/>
                    </td>
                    <td>
                      <Control.input className='cmtbaiinput' placeholder="Add a public comment"
                      id="content" model=".content" name="content"
                      onClick={addcmtclick}/>
                    </td>
                  </tr><tr>
                    <td className='right' colspan="2">
                      { this.state.showAddCmt ? <div className='div-cmt-btn'>
                        <button className="baicancel"
                        onClick={cancelcmt}>cancel</button>
                        <Button className="baiaddcomment"
                        value='submit'>Comment</Button></div> : null }
                    </td>
                  </tr>
                </table>
                </LocalForm>
              </div>
              <div className="comments">
                Some of the public comments:<br/><br/>
                {list}
              </div>
            </div>
          </center></div>
        );
    }
}

export default Worker_details;
