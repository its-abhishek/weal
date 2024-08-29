import { GoogleLogout } from "react-google-login";
const clientId = process.env.GOOGLE_CLIENT_ID;
function Logout(){
    const onSuccess=(res)=>{
        console.log("logged out");
    }
    return (<div id="logout">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                />
    </div>)
}
export default Logout