//SASS
import './404.scss'

// IMAGE
import Error404 from '../../Assets/imgs/404.png'

function NotFound(){
    return(
        <div className='notfound'>
            <img src={Error404} alt="Error404" />
        </div>
    )
}

export default NotFound