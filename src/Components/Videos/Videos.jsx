import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

import UserData from '../../Data/UserData'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';


//SASS
import './Videos.scss'

//HOOK
import useTheme from '../../Hooks/useTheme'

//Images
import True_hand from '../../Assets/imgs/true_hand.svg'
import False_hand from '../../Assets/imgs/false__hand.svg'
import Share_icon from '../../Assets/imgs/share_ison.svg'

function Videos() {
    let { username, video } = useParams()
    let [theme] = useTheme()

    return (
        <>
            <div className={`video ${theme}`}>
                <div className='video__wrapper'>
                    {
                        (video ? UserData.filter(obj => obj.id === Number(username)) : []).map(item => {
                            return (<>
                                {
                                    (item.url.filter(param => param.id === Number(video))).map(elem => {
                                        return (
                                            <div key={elem.id}>
                                                <div className='video__box'>
                                                    <iframe className='video__player' width="1366" height="625" src={elem.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <h1 className={`video__title ${theme}`}>{elem.title}</h1>
                                                    <div className='video__panel'>
                                                        <p className="video__view">123k views</p>
                                                        <div className="video__navigation">
                                                            <button className='video__navigation--btn'>
                                                                <img className='video__navigation--icon' src={True_hand} alt="True_hand" />
                                                                <p className='video__navigation--text'>123k</p>
                                                            </button>
                                                            <button className='video__navigation--btn'>
                                                                <img className='video__navigation--icon' src={False_hand} alt="False_hand" />
                                                                <p className='video__navigation--text'>123k</p>
                                                            </button>
                                                            <button className='video__navigation--btn'>
                                                                <img className='video__navigation--icon' src={Share_icon} alt="Share_icon" />
                                                                <p className='video__navigation--text'>123k</p>
                                                            </button>
                                                            <div className='video__dots'>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='video__subbox'>
                                                    {
                                                        (UserData.filter(t => t.id === Number(username))).map(m => {
                                                            return (
                                                                <div key={m.id} className='video__area'>
                                                                    <img className='video__area--pic' src={m.img} alt="pic" />
                                                                    <div className='video__area--box'>
                                                                        <h2 className={`video__area--title ${theme}`}>{m.name}</h2>
                                                                        <p className='video__area--publish'>Published on 14 Jun 2019</p>
                                                                        <p className={`video__area--text ${theme}`}>{elem.description}</p>
                                                                        <button className='video__area--showbtn'>Show more</button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <button className='video__area--btn'>Subscribe 2.3m</button>
                                                </div>
                                            </div>)
                                    })
                                }
                                <div key={item.id} className='chanel__videos'>
                                    <Swiper  className='main__user--videos'
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
                                        navigation={{
                                            nextEl: '.right',
                                            prevEl: '.left',
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
                            </>
                            )
                        })
                    }
                </div>
                {/* {
                    UserData
                } */}

            </div>
        </>
    )
}

export default Videos

