import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { NavLink } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';

// DATA
import UserData from '../../Data/UserData';

// SASS
import './Main.scss'
import 'swiper/swiper.scss';

//HOOK
import useTheme from '../../Hooks/useTheme';

// Images
import Left_arrow from '../../Assets/imgs/L_Arrow.svg'
import Right_arrow from '../../Assets/imgs/R_Arrow.svg'

SwiperCore.use([Navigation]);
function Main() {
  let [theme] = useTheme()

  return (<>

    <ul className={`main ${theme}`}>
      {
        UserData.map(obj => {
          return (
            <li key={obj.id} className='main__item'>
              <div className='main__card'>
                <NavLink to={`/chanel/${obj.id}`} className='main__box'>
                  <img className='main__user--img' src={obj.img} alt={obj.name} />
                  <h2 className={`main__user--title ${theme}`}>{obj.name}</h2>
                </NavLink>
                <div className='main__control--box'>
                  <button className={`main__control--btn left${obj.id}`}><img src={Left_arrow} alt="Left_arrow" /></button>
                  <button className={`main__control--btn right${obj.id}`}><img src={Right_arrow} alt="Right_arrow" /></button>
                </div>
              </div>
              <Swiper className='main__user--videos'
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
                  nextEl: `.right${obj.id}`,
                  prevEl: `.left${obj.id}`,
                }}
              >
                {
                  obj.url.map(url => {
                    return (
                      <SwiperSlide key={url.id} className='main__user--card'>
                        <NavLink to={`chanel/${obj.id}/${url.id}`}>
                          <img className='main__user--frem' src={url.img} alt={url.id} />
                          <h3 className={`main__user--subtitle ${theme}`}>{url.title}</h3>
                          <p className='main__user--view'>54k views  ·  11 months ago</p>
                        </NavLink>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </li>
          )
        })
      }
    </ul>
  </>
  )
}

export default Main
