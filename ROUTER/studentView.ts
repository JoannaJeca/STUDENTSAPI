import { Router } from "express";
import { deleteStudentInfo,
     enrollStudent,
     readStudentByCourses,
     readStudentByID,
     readStudentByName, 
     readStudentByScore,
     readStudentsResults, 
     updateResult } from "../CONTROLLER/studentController";

const router:Router = Router()

router.route("/enroll-student").post(enrollStudent)
router.route("/read-results").get(readStudentsResults)
router.route("/get-by-name").get(readStudentByName)
router.route("/get-by-course").get(readStudentByCourses)
router.route("/get-by-ID").get(readStudentByID)
router.route("/get-by-score").get(readStudentByScore)
router.route("/update-one").patch(updateResult)
router.route("/delete-one").delete(deleteStudentInfo)

export default router