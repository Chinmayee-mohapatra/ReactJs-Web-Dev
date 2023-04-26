import React,{useState} from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    // console.log("printing data...");
    // console.log(courses);
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);
     
    // returns you a list of all courses recieved from the api response.
    function getCourses() {
        if(category === "All"){
            let allCourses=[];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            // srf specific category ka array pass karungi
            return courses[category];
        }
        
    }

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards;