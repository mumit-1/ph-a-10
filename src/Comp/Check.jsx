import React, { Children, useState } from 'react';

const Check = ({children}) => {
    const [ok,setOK] = useState(true);
    
    if(ok){
         return <></>;
    }
    else{
        {children}
    }
};

export default Check;