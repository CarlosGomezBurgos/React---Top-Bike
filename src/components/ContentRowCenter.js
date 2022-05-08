import React from 'react';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastUserInDb />

            <LastProductInDb />

        </div>
    )
}

export default ContentRowCenter;