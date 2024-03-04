import './Course.css';
import Resim1 from './image/Resim1.jpg';
import Resim2 from './image/Resim2.jpg';
import Resim3 from './image/Resim3.jpg';
import Resim4 from './image/Resim4.jpg';
import Resim5 from './image/Resim5.jpg';

const courseMap ={
    Resim1,
    Resim2,
    Resim3,
    Resim4,
    Resim5,
};


function Course({courseName}) {
    // console.log(Resim1);
    // console.log(courseName);
    console.log(courseMap[courseName]);
    return ( 
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt='course' />
        </div>
     );
}

export default Course;