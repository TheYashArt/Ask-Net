import './display.css';

function Display() {
    return (
        <div className='Display'>
                <div className='DisplaynavBar'>
                <div>
                    <h1 className='Displayblogs'>Blogs</h1>
                </div>
                <div className='DisplaynavBarRightBlock'>
                    <div className='DisplaynavInnerBlock'>
                        <div>
                            <a href="#" className='DisplayuserName'>{localStorage.getItem("currentUser")}</a>
                        </div>
                        <div className='Displayicon'>
                            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        </div>
                        <div>
                            <a href="#" className='DisplayuserName'>Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <main className='Displaymain'>
                <div className='DisplayinnerMain'>
                    <div className='Displayheadings'>
                        <div>
                            <h1 className='Displayblogs'>Blogs</h1>
                        </div>
                        <button className='DisplaynewPost'><i
                            class="fa fa-plus-circle" aria-hidden="true"></i> Create new post</button>
                    </div>
                    <div>
                        <p>Publish your Passon, Your way</p>
                        <hr className='Displayhr' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Display