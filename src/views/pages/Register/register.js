import React, {Component} from "react";
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap";
import bg_img from '../../../../public/img/green.jpg'
import {UserApiService} from '../../../services/user-service'

let transpInput = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid white',
    color: 'white',
    borderRadius: '0'
}

let buttonStyle = {
    border: 'none',
    borderRadius: '20px',
    width: "180px",
    backgroundColor:'#038232'
}

let registerButton = {
    borderRadius: "20px",
    width: "180px",
    color: '#038232'
}

let header = {
    fontSize: "35px"
}
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      validLogin: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let info = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
    }
    if (info.password != this.state.confirmPassword) {
        console.log('passwords doesn\'t match')
        return 
      }
    let a = new UserApiService();
    a.postUserSignup(info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
          console.log(err);
      })
  }

  render() {

    return (
      <div className="app flex-row align-items-center" style={{marginTop: '0', backgroundImage:"url('"+bg_img+"'", backgroundSize: "cover"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <CardGroup className="mb-4">
                <Card className="p-4" style={{backgroundColor: 'transparent', border:'none'}}>
                  <CardBody className="text-white text-center">
                    <h1 style={header}>Create a new Account</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div className="text-danger" style={this.state.validLogin === false ? {}:{display:"none"}}>Email y/o Contraseña invalida</div>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={transpInput}>
                            <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input className={this.state.validLogin === false ? 'is-invalid': ''} type="text" placeholder="full name" name="name" onChange={this.handleChange} style={transpInput}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={transpInput}>
                            <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input className={this.state.validLogin === false ? 'is-invalid': ''} type="text" placeholder="username" name="username" onChange={this.handleChange} style={transpInput}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={transpInput}>
                            <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input className={this.state.validLogin === false ? 'is-invalid': ''} type="text" placeholder="email" name="email" onChange={this.handleChange} style={transpInput}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={transpInput}>
                            <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input className={this.state.validLogin === false ? 'is-invalid': ''} type="password" placeholder="password" name="password" onChange={this.handleChange} style={transpInput}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={transpInput}>
                            <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input className={this.state.validLogin === false ? 'is-invalid': ''} type="password" placeholder="confirm password" name="confirmPassword" onChange={this.handleChange} style={transpInput}/>
                    </InputGroup>
                    <Row className="justify-content-center">
                      <Col xs="10">
                        <Button className="px-5" style={buttonStyle}><i className="icon-key"></i> Register </Button>
                      </Col>
                    </Row>
                    </form>
                    <Row className="mt-3 justify-content-center">
                        <Col xs="10">
                            <div>
                                <Button color="light" className="px-5" href="/#/login" style={registerButton}><i style={{color:'#038232'}} className="fa fa-user-plus"></i> Login</Button>
                            </div>
                        </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;