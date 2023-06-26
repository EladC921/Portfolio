import './home.style.sass';
import myImage from '../../assets/images/me_files/profile.jpg'

function HomePage() {
    return (
        <div className="wrapper">
            <div className="top-container">
                <div className='header'>
                    <h1>Full Stack Developer</h1>
                    <h2>Coffee lover</h2>
                    <h3>Adventurer</h3>
                </div>
                <div className="profile-pic">
                    <img src={myImage} />
                </div>
            </div>
            <div className='bottom-container'>

            </div>
        </div>
    )
}

export default HomePage