const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require('../db/index');
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const new_user =  new User({
        username : username,
        password : password,
        courses: []
    });
    await new_user.save()
    res.json({ message: 'User created successfully' });
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({});
    res.json({
        courses: courseList
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try{
        // Implement course purchase logic
    const courseId = req.params.courseId;
    const findCourse = await Course.findOne({"_id": courseId});
    if(!findCourse){
        res.status(404).json({
            error: "Course not found"
        });
        return;
    }

    const user = await User.findOne({"username": req.headers.username});
    if(user.courses.indexOf(courseId)!=-1){
        res.status(409).json({
            error: "Course already added"
        });
        return;
    }

    await User.findOneAndUpdate({"username":req.headers.username}, {
        courses: [...user.courses,courseId]
    });

    res.json({
        message: 'Course purchased successfully'
    });
    }
    catch(err){
        res.status(500).json({message:err});
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({"username": req.headers.username});
    if(user.courses.length < 1){
        res.json({
            message: "No courses purchased"
        });
        return;
    }
    const courseList = await Course.find({"_id":{$in:user.courses}});
    res.json(courseList);
});

//global catcher
router.use((err,req, res, next)=>{
    res.status(500).json({
        error: err,
    });
});

module.exports = router;