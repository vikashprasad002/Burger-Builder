import  React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state ={
        showSideDrawer: false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerOpenHandler=()=>{
        this.setState({showSideDrawer: true});
    }

    render() {
        console.log("this is ::",this.state.showSideDrawer);
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpenHandler}/>
                <SideDrawer  closed={this.sideDrawerCloseHandler} current={this.state.showSideDrawer}/>
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )
    }  
}

export default Layout;