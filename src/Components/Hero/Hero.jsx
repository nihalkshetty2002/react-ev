import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero col-8'>
      <div className="hero-text col-12 col-lg-4">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore col-12 col-lg-5">
        <p className="hero-explore-p col-9 col-lg-10">Explore the Features</p>
        <img src={arrow_btn} alt="car pics" />
      </div>
      <div className="hero-dot-play col-12">
        <ul className="hero-dots col-5 lg">
          <li onClick={() => setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div  className="hero-play col-6 col-lg-3">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="Play/Pause" />
        <p className="hero-play-p col-lg-6">See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
