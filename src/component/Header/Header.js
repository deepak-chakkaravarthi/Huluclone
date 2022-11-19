import React from 'react'
import {
   Home,
   LiveTv,
   PersonOutline,
   Search,
   VideoLibrary,
   FlashOn

} from "@mui/icons-material";
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
       <div className='header-icons'>
           <div className='header-icon header-icon-active'>
            <Home/>
            <p>Home</p>
           </div>
           <div className='header-icon'>
            <FlashOn/>
            <p>Trending</p>
           </div>
           <div className='header-icon'>
            <LiveTv/>
            <p>Verified</p>
           </div>
           <div className='header-icon'>
            <VideoLibrary/>
            <p>Collactions</p>
           </div>
           <div className='header-icon'>
            <Search/>
            <p>Search</p>
           </div>
           <div className='header-icon'>
            <PersonOutline/>
            <p>Account</p>
           </div>
        </div> 
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAb1BMVEUAAAD///8ICAg4ODjw8PD5+fkfHx8vLy/Hx8fR0dHq6uqzs7P09PS/v79JSUni4uKSkpJ1dXV+fn5kZGSioqKsrKw2NjYnJyeLi4tZWVnb29t4eHjNzc1mZmYPDw9sbGxPT09AQECdnZ2Pj4+mpqYQQVZ0AAAEMUlEQVR4nO2da1faQBBAoQUFgqL4QkFKrf//N1ZPTz3WnZnsYybQc+79amZm9wrJZrNZRiMAAAAAAAAAAAAAAAAA+OC7xrEblssJd2CsceyGZbI/4Q6ccNOy+HbCHTjhpmWB2zhwGwdu48BtHLiNA7dx4DYO3MaB2zhwGwdu48BtHLiNA7dx4DYO3MaB2zhwGwdu48BtHLiNA7dx4DYO3MaB2zhwGwdu48BtHLiN4z91e3M7Wy2Fv0wnq113dZOV/kxLPzWCzrWgSXpskduSY9uC7MgL9S9/WXT9fnFbT3dup8dtCzPTLm7buDPS47aRyb2aHrfNPGvpcdvOtZIetw4owzHcevAgpsetBwsxPW5duJLS49YHKT1ufbgV0uPWCSE9bp0QBrm4dWKWpsetF2l63HpxmaTHrRebJD1uveiS9Lj1Yp6kx63KYv6FhX14kh63Ct1Zevz+zghIheFW5lGOuDRCkoNxK/JDC3nUY5JjcSuRXpc+mOWXw62E9gTsjZv8criVEK5jFeVwG1cOt3HlcBtXDrdx5XAbVw63ceVwG1cOt3HlcBtXDrdx5XAbVw63ceVwG1cOt3HlVLdWfvXJxjHcVvWgvpyLW+P3bjZaTJhb5fHVO9clBWo1VQXpbo230lZaTJjbC70x85ICtZrqgtRDx+pLaWs1RFj37+N2fNAa86yGLC1DpZqqgvTuTOW3T4wnRuOn9Ogit1M99U+5MQc9Qn7Bo1JTVZDRHfENiX1nBOzS44vcWitXXqSOvhoBwj+6XlNVkHru/NO+2b/s7HU76XqzMrf6ufOd1dfG2G0XVhsP7FZ/3l6B8EEvcmt9J4p5PbrbF8/uCC9fFrlVB3c1bI/u1rgylSM0pcittdyqmJ5dOQZw67kIVboyl+0F5NiY/iFYvNsnv+5Itxtlbh3P/sbtxmBuHc9x0p1pmVv9BrYYdSnigG79vofit7BwfzC3xvTf8Q7htn8zrEzE0X2hW2tldhHCUPsIbu+9uiM2pdCt/lPJhfSPEgaZLnb64MoTZ6V7Bjp9cDOuZMNMxft0R85dvB+jNcGRj7WCdlC3W4/erJ3cutzMiKf+o7j1OCtorwiU7yNqzW1lsspSO9DjueYbCPUuqGKP1l1rY8b7LLVDPfq0p+v6UebR6/a/taca+1Hm0R001QW1fVj0TQmr9hZuO0elb9v7aaoLaphsnBhX5bp9mxtuxJf6/9lDU13Qpf1MQcccS1buiX1fe5ISHiv5aqrrz2hTM7acGGsHRg37jW+l7b77WGbM0DRqqu3PaF36cVkow9oPGvZyvy4dvUzSvTdMqppW35/R+Ut+j5bdoTdf0z75D1f5jZle2F8ggaqmtfTnjcdf3XxhfSUni6fZ61Ydd31Gn3zJa8vosOnm4s8BfG7M3TpnbgYAAAAAAAAAAAAAAAAAIIDfAfJQYHBg/WUAAAAASUVORK5CYII='alt=''/>
    </div>
  )
}

export default Header