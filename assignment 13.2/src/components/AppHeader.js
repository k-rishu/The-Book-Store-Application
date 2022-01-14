import React from 'react';

const AppHeader=(props)=>{


    return <header>
                <h1 className='site-title'>{props.title}</h1>
                {/* <div>how are you</div>
                <a href="./" >rule</a> */}
            </header>;
}


export default AppHeader;