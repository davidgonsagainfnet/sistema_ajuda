import {AvatarComponent, BoxComponent, TopMenuComponent, TypographyComponent} from "../"
import arrowBackImage from '../../assets/img/arrow_back.png'
import {React, Image} from "react"

const Topbar = ({ hasArrowBack, hasProfile, profileName, profileUrl}) => {
    return <>
        <BoxComponent sx={{
            height: '50px',
            width: '100%',
            backgroundColor: '#9E4CDF',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center'
        }}>
            {
                hasArrowBack ? 
                <>
                <div style={{
                    width: '50%'
                }}>
<img src={arrowBackImage} style={{
                    width: '25px', 
                    height: '25px',
                    margin: '10px',
                    backgroundColor: '#884CDF',
                    padding: '6px',
                    borderRadius: '30px',
                    boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.5)'
                    }}
                        alt="Voltar"
                    />
                </div>
                
                    </>
                 : null
            }
            
            {
                hasProfile?
                <>
                <div style={{
                    width: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse'
                }}>
                 <AvatarComponent
                sx={{
                    border: '1px solid white',
                    marginRight: '10px'
                }}
                 profileUrl={profileUrl}/>
                 <TypographyComponent style={{
                    margin: '10px',
                    fontWeight: 'bold',
                 }}>
                    {profileName}
                 </TypographyComponent>
                 </div>
                 </>
                 : null
            }
        
            
        </BoxComponent>
        </>
}

Topbar.defaultProps = {
    hasProfile: false, 
    hasArrowBack: false, 
    profileName: "",
}

export default Topbar;