import { AvatarComponent, BoxComponent, TopMenuComponent, TypographyComponent } from "../"
import arrowBackImage from '../../assets/img/arrow_back.png'
import { React } from "react"
import { Link, useNavigate } from "react-router-dom";


const Topbar = ({ hasArrowBack, hasProfile, profileName, profileUrl}) => {
    const navigate = useNavigate();

    let goBack = () => {        
        navigate(-1);
      };

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

<Link onClick={goBack}>
    <img src={arrowBackImage} style={{
                    width: '25px', 
                    height: '25px',
                    margin: '10px',
                    backgroundColor: '#884CDF',
                    padding: '6px',
                    borderRadius: '30px',
                    boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.5)',
                    }}
                        alt="Voltar"
                    />

</Link>              

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
                 <TypographyComponent 
                    variant={'h6'} 
                    style={{
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