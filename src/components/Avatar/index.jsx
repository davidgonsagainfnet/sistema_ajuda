import { Avatar } from "@mui/material";


const AvatarComponent = ({style, profileUrl, ...rest }) => (
    <Avatar src={profileUrl}
    style={{...style,}}
     {...rest} />
);

AvatarComponent.defaultProps = {
link: "../../assets/img/profile.png"
}

export default AvatarComponent;