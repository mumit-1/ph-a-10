

import { useState } from 'react';
import Thing from './Thing';
const Things = () => {
    const [data1,setData1] = useState([]);
    fetch('things.json')
    .then(res=>res.json())
    .then(data=>{
        setData1(data)
    })
    return (
        <div className='max-w-screen-lg mx-auto pr- pb-10'>
            <p className='lg:text-5xl text-4xl text-center'>Our Products</p>
            <p className='text-center text-sm mt-3 text-zinc-400'>Buy these shit or get out of here</p>
            <div className='grid grid-cols-2 gap-5 justify-center place-items-center'>
                {
                    data1.map((info,idx)=><Thing key={idx} info={info}></Thing>)
                }
            </div>
        </div>
    );
};

export default Things;