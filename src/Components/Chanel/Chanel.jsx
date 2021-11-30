import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import UserData from '../../Data/UserData';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';

//SASS
import './Chanel.scss'
import '../Main/Main.scss'

//HOOK
import useTheme from '../../Hooks/useTheme';

// Image
import bgImg from '../../Assets/imgs/Cover.png'
import RangIcon from '../../Assets/imgs/rang_icon.svg'
import Lupa from '../../Assets/imgs/lupa.svg'
import Left_arrow from '../../Assets/imgs/L_Arrow.svg'
import Right_arrow from '../../Assets/imgs/R_Arrow.svg'

function Chanel() {
    let { username } = useParams()
    let [theme] = useTheme()

    return (
        <div className={`chanel ${theme}`}>
            <img className='chanel__bg' src={bgImg} alt="bgImg" />
            {
                (username ? UserData.filter(User => User.id === Number(username)) : []).map(item => {
                    return (
                        <div key={item.id + 1}>
                            <div className='chanel__header'>
                                <div className="chanel__header--box">
                                    <img className="chanel__header--img" src={item.img} alt="userImg" />
                                    <div>
                                        <h1 className={`chanel__header--title ${theme}`}>{item.name}</h1>
                                        <p className="chanel__header--count">{item.followers} subscribed</p>
                                    </div>
                                </div>
                                <div className='chanel__header--control'>
                                    <img className='chanel__header--icon' src={RangIcon} alt="RangIcon" />
                                    <button className='chanel__header--btn'>Subscribe 2.3m</button>
                                </div>
                            </div>
                            <ul className='chanel__pages'>
                                <li className='chanel__pages--item chanel__pages--item--active chanel__pages--mobile'>Home</li>
                                <li className='chanel__pages--item chanel__pages--mobile'>Videos</li>
                                <li className='chanel__pages--item chanel__pages--mobile'>Playlists</li>
                                <li className='chanel__pages--item'>Channels</li>
                                <li className='chanel__pages--item'>Discussion</li>
                                <li className='chanel__pages--item'>About</li>
                                <li className='chanel__pages--item'><img className='chanel__pages--icon' src={Lupa} alt="Lupa" /></li>
                            </ul>
                            <div className='chanel__box'>
                                <NavLink className='chanel__textwrapper--link' to={`/chanel/${item.id}/${item.url[0].id}`}>
                                    <div className='chanel__textwrapper'>
                                        <img className='chanel__textwrapper--img' src={item.url[0].img} alt={`${item.url[0].id}`} />
                                        <div className='chanel__textwrapper--box'>
                                            <h2 className={`chanel__textwrapper--title ${theme}`}>{item.url[0].title}</h2>
                                            <p className={`chanel__textwrapper--text ${theme}`}>{item.url[0].description}</p>
                                            <p className='chanel__textwrapper--view'>11k views  ·  6 months ago</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <div className='chanel__userbox'>
                                    <h3 className='chanel__userbox--title'>Recommended channel</h3>
                                    <ul className='chanel__userbox--list'>
                                        {
                                            UserData.map(data => {
                                                return (
                                                    <li key={data.id} className='chanel__userbox--item'>
                                                        <NavLink className={`chanel__userbox--item ${theme}`} to={`/chanel/${data.id}`}>
                                                            <img className='chanel__userbox--img' src={data.img} alt="userImg" />
                                                            <p className='chanel__userbox--name'>{data.name}</p>
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div key={item.id} className='chanel__card'>
                                <h2 className={`chanel__card--title ${theme}`}>{item.name} videos</h2>
                                <div className='chanel__control--box'>
                                    <button className='chanel__control--btn left'><img src={Left_arrow} alt="Left_arrow" /></button>
                                    <button className='chanel__control--btn right'><img src={Right_arrow} alt="Right_arrow" /></button>
                                </div>
                            </div>
                            <div key={item.id} className='chanel__videos'>
                                <Swiper className='main__user--videos'
                                    navigation={{
                                        nextEl: '.right',
                                        prevEl: '.left',
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={4}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        },
                                        375: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        },
                                        500: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40
                                        }
                                    }}
                                >
                                    {
                                        item.url.map(url => {
                                            return (
                                                <SwiperSlide key={url.id} className='main__user--card'>
                                                    <NavLink to={`/chanel/${username}/${url.id}`}>
                                                        <img className='chanel__user--frem' src={url.img} alt={url.id} />
                                                        <h3 className={`main__user--subtitle ${theme}`}>{url.title}</h3>
                                                        <p className='main__user--view'>54k views  ·  11 months ago</p>
                                                    </NavLink>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Chanel