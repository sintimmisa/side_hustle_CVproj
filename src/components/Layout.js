import "./styles.css";
import PersonalInfo from './PersonalInfo';
import EduInfo from './EduInfo';
import WorkExp from './WorkExp';
import Sidebar from './Sidebar';

function Layout(){
return(
    <div className="container">
        <div>
        <PersonalInfo/>
        <EduInfo/>
        <WorkExp/>
        </div>
        <div className="left"> <Sidebar/></div>

    </div>
)


}

export default Layout;