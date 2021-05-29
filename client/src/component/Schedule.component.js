import React, { Component } from 'react' 
import ClassScheduleItemComponent from './ClassScheduleItem.component'

const CLASS_SCHEDULE = {
    "Monday": [
        {
            startTime: "10:00 AM",
            classImg: "assets/img/speakers/1.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "10:30 AM",
            classImg: "assets/img/speakers/2.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "12:00 AM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "1:00 PM",
            classImg: "assets/img/speakers/4.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:00 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
    ],
    "Tuesday": [
        {
            startTime: "9:00 AM",
            classImg: "assets/img/speakers/2.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "11:00 AM",
            classImg: "assets/img/speakers/4.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "2:00 PM",
            classImg: "assets/img/speakers/1.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "4:00 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "4:30 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
    ],
    "Wednesday": [
        {
            startTime: "11:30 AM",
            classImg: "assets/img/speakers/4.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "1:30 AM",
            classImg: "assets/img/speakers/1.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "2:00 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:00 PM",
            classImg: "assets/img/speakers/2.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:30 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
    ],
    "Thursday": [
        {
            startTime: "10:30 AM",
            classImg: "assets/img/speakers/2.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "11:00 AM",
            classImg: "assets/img/speakers/4.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "1:00 PM",
            classImg: "assets/img/speakers/1.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "2:00 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:00 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
    ],
    "Friday": [
        {
            startTime: "10:00 AM",
            classImg: "assets/img/speakers/1.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:00 PM",
            classImg: "assets/img/speakers/4.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "3:30 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "4:00 PM",
            classImg: "assets/img/speakers/2.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
        {
            startTime: "4:30 PM",
            classImg: "assets/img/speakers/3.jpg",
            className: "Keynote",
            teacherName: "Brenden Legros",
            classBriefDes: "Facere provident incidunt quos voluptas."
        },
    ],
}

export default class ScheduleComponent extends Component {

    render() {
        return (
            <div id="schedule" class="section-with-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="section-header">
                            <h2>Event Schedule</h2>
                        </div>

                        <ul class="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                            <li class="nav-item">
                                <a class="`nav-link` active" href="#day-1" role="tab" data-bs-toggle="tab">Monday</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Tuesday</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Wednesday</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-4" role="tab" data-bs-toggle="tab">Thursday</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-5" role="tab" data-bs-toggle="tab">Friday</a>
                            </li>
                        </ul>

                        <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

                            {/* <!-- Schdule Day 1 --> */}
                            <div role="tabpanel" class="col-lg-9 tab-pane fade show active" id="day-1">
                                {CLASS_SCHEDULE["Monday"].map(entry => {
                                    return <ClassScheduleItemComponent startTime={entry.startTime} classImg={entry.classImg} className={entry.className} teacherName={entry.teacherName} classBriefDes={entry.classBriefDes}/>
                                })}
                            </div>
                            {/* <!-- End Schdule Day 1 --> */}

                            {/* <!-- Schdule Day 2 --> */}
                            <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">
                                {CLASS_SCHEDULE["Tuesday"].map(entry => {
                                    return <ClassScheduleItemComponent startTime={entry.startTime} classImg={entry.classImg} className={entry.className} teacherName={entry.teacherName} classBriefDes={entry.classBriefDes}/>
                                })}
                            </div>
                            {/* End Schdule Day 2 */}

                            {/* Schdule Day 3 */}
                            <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">
                                {CLASS_SCHEDULE["Wednesday"].map(entry => {
                                    return <ClassScheduleItemComponent startTime={entry.startTime} classImg={entry.classImg} className={entry.className} teacherName={entry.teacherName} classBriefDes={entry.classBriefDes}/>
                                })}
                            </div>

                            {/* Schdule Day 4 */}
                            <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-4">
                                {CLASS_SCHEDULE["Thursday"].map(entry => {
                                    return <ClassScheduleItemComponent startTime={entry.startTime} classImg={entry.classImg} className={entry.className} teacherName={entry.teacherName} classBriefDes={entry.classBriefDes}/>
                                })}
                            </div>

                            {/* Schdule Day 5 */}
                            <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-5">
                                {CLASS_SCHEDULE["Friday"].map(entry => {
                                    return <ClassScheduleItemComponent startTime={entry.startTime} classImg={entry.classImg} className={entry.className} teacherName={entry.teacherName} classBriefDes={entry.classBriefDes}/>
                                })}
                            </div>

                        </div>

                    </div>

                </div>
        );
    }
}