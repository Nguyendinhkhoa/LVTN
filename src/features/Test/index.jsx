import React, { useState , useEffect } from 'react';
import Loading from '../Loading';
import './style.css';

function Test(props) {
    const [loading,setLoading] = useState(undefined);
    useEffect(()=>{
        setLoading(undefined);
        setTimeout(() => {
            setLoading(true);
        }, 3000);
    },[]);
    return (
        <div>
            {!loading ? <Loading/> :
            <>
            <iframe src="https://embed.lottiefiles.com/animation/38463" title="error"></iframe>
            </>
             }
        </div>
    );
}

export default Test;