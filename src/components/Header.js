import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand"> Employee Management System </a> </div>

                    </nav>
                </header>
            </div>

        )
    }
}
export default Header

/*
import React from 'react';
import {Card, CardBody} from "reactstrap";
function Header({name, title}){
return(
  <div>
      <Card className="my-2 bg-secondary text-white">
          <CardBody>
              <h1 className="text-center my-3 display-4">
                  BILLING SYSTEM
              </h1>
          </CardBody>
      </Card>

  </div>
);
}
export default Header;*/
