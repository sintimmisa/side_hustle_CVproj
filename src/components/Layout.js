import "./styles.css";
import PersonalInfo from './PersonalInfo';
import EduInfo from './EduInfo';

function Layout(){
return(
    <div className="container">
        <div>
        <PersonalInfo/>
        <EduInfo/>
        </div>
        <div className="left"> right section</div>

    </div>
)


}

export default Layout;