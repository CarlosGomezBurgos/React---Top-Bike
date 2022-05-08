import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import ProductList from './ProductList';
import UserList from './UserList';

function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">TopBike Dashboard</h1>
					</div>
				
					<ContentRowMovies />
					<ContentRowCenter />
					<ProductList />
					<UserList />
	
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;