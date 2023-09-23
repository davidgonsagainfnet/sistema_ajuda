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
        <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
            {
                hasArrowBack ? 
                <>
                
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
                    </>
                 : null
            }
            
            {
                hasProfile?
                <>
                <div style= {{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                 <TypographyComponent style={{
                    margin: '10px',
                    fontWeight: 'bold',
                 }}>
                    {profileName}
                 </TypographyComponent>
                 <AvatarComponent
                sx={{
                    border: '1px solid white',
                    marginRight: '10px'
                }}
                 profileUrl={profileUrl}/>
                 </div>
                 </>
                 : null
            }
            </div>
        
            
        </BoxComponent>
        </>
}

Topbar.defaultProps = {
    hasProfile: false, 
    hasArrowBack: false, 
    profileName: "",
}

export default Topbar;