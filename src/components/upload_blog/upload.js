import { useState } from 'react';
import './upload.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Upload() {
    const navigate = useNavigate()
    const LogoutUser = () => {
        navigate("/")
    }

    return (
        <div className='Upload'>
            <div className='UploadnavBar'>
                <div>
                    <h1 className='Uploadblogs'>Blogs</h1>
                </div>
                <div className='UploadnavBarRightBlock'>
                    <div className='UploadnavInnerBlock'>
                        <div>
                            <a href="#" className='UploaduserName'>{localStorage.getItem("currentUser")}</a>
                        </div>
                        <div className='Uploadicon'>
                            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        </div>
                        <div>
                            <a onClick={LogoutUser} href="#" className='UploaduserName'>Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='UploadmainDiv'>
                    <div className='UploadinnerDiv'>
                        <input type="text" name="" id="" placeholder="Title" className='UploadtitleInput' />

                        <hr />

                        <textarea name="" id="" placeholder="Description" rows="20" cols="112" className='UploaddescInput'></textarea>
                        <div className='Uploadbuttons'>
                            <div>
                                <button type="reset"
                                    className='Uploadbutton'>Cancel</button>
                                <button type="submit"
                                    className='Uploadbutton'>Save</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Upload