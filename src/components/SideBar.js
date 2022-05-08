import React from 'react';
import image from '../assets/images/logo-TB.png';
import ContentWrapper from './ContentWrapper';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import ContentRowMovies from './ContentRowMovies';
import {Link, Route, Switch} from 'react-router-dom';
import ProductList from './ProductList';
import UserList from './UserList';

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Top Bike"/>
                    </div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>TOP BIKE</span></Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Componentes</div>

                <li className="nav-item">
                <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-box"></i>
                        <span>Último producto registrado</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastUserInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Usuario registrado</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ProductList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Productos</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/UserList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Usuarios</span></Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/LastUserInDb">
                    <LastUserInDb />
                </Route>
                <Route path="/ProductList">
                    <ProductList />
                </Route>
                <Route path="/UserList">
                    <UserList />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;