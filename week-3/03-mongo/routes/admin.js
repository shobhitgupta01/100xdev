const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course }= require('../db/index');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const new_admin = new Admin({
        username : username,
        password: password
    });
    await new_admin.save();
    res.json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const new_course = Course(req.body)
    await new_course.save();
    res.json({
        message: 'Course created successfully', 
        courseId: new_course._id.toString() });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courseList = await Course.find({});
    
    res.json({
        courses: courseList
    })

});

module.exports = router;