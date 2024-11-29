import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero col-8'>
      <div className="hero-text col-1">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore col-1 ">
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play col-12">
        <ul className="hero-dots col-5 lg">
          <li onClick={() => setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div  className="hero-play col-6">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="Play/Pause" />
        <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
