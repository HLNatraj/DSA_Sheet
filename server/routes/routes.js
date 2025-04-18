const express = require("express")
const router = express.Router()

//Router connection
const Login = require("../controllers/LoginController")
// const jwt_verify = require('../controller/JWTverifycontroller');
const { getTopics, updateProblemStatus } = require('../controllers/topicController');
const { getProgress } = require('../controllers/ProgressController');


// Endpoint to get topics and related data
router.get('/topics', getTopics);
//POST API
router.post("/login", Login)

router.put('/topics/:problemId', updateProblemStatus);
router.get('/progress', getProgress);



module.exports = router;
