import React from 'react'

export default function Info(){
    return(
        <div className='container'>
            <img src="\src\assets\Screenshot_20230308_142430_com.android.gallery3d (2).jpg" alt="Luchi's photograph" className='profile-pic'/>

            <h1>Luchi</h1>
            <p className='title'>Frontend Engineer</p>
            <small>luchi.website</small>
            <div className="socials">
                <div className="email">
                    <img src="\src\assets\Icon.png" alt="email icon" />
                    <p>Email</p>
                </div>
                <div className="linkedin">
                    <img src="\src\assets\Vector.png" alt="linkedIn icon" />
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
            
    )
}