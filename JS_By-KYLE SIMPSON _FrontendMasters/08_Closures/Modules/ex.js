var V = [ 410, 105, 664, 375 ];
var deepJs = workshop();
deepJs.addStudent(313, "Frank", true);
deepJs.addStudent(410, "Suzy", true);
deepJs.addStudent(709, "Brian", false);
deepJs.addStudent(105, "Henry", false);
deepJs.addStudent(502, "Mary", true);
deepJs.addStudent(664, "Bob", false);
deepJs.addStudent(250, "Peter", true);
deepJs.addStudent(375, "Sarah", true);
deepJs.addStudent(867, "Greg", false);
deepJs.enrollStudents(410);
deepJs.enrollStudents(105);
deepJs.enrollStudents(664);
deepJs.enrollStudents(867);
deepJs.enrolledPaidStudents();
deepJs.printCurrentEnrollment();
deepJs.remindUnpaidStudents();


// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************

function workshop(){
	var studentRecords = [];
	//to store enrolled student id
	var currentEnrollment = [];

	//create a publicAPI so that return all method that is encapsulated in this function
	return publicAPI = {
		addStudent,
		enrollStudents,
		printCurrentEnrollment,
		enrolledPaidStudents,
		remindUnpaidStudents

	};
	

	function addStudent(id, name, paid){
		  studentRecords.push({id, name, paid});
	}

	function enrollStudents(id){
		//avoid add duplicate id
		if(!currentEnrollment.includes(id)){
			currentEnrollment.push(id);
		}
	}



	function printCurrentEnrollment(){
		printRecords(currentEnrollment);
	}

	function enrolledPaidStudents(){
		paidStudentsToEnroll();
	}

	function remindUnpaidStudents(){
		remindUnpaid(currentEnrollment);
	}

	function getStudentFromId(studentId) {
		return studentRecords.find(matchId);
	
		// *************************
	
		function matchId(record) {
			return (record.id == studentId);
		}
	}
	
	function printRecords(recordIds) {
		var records = recordIds.map(getStudentFromId);
	
		records.sort(sortByNameAsc);
	
		records.forEach(printRecord);
	}
	
	function sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}
	
	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}
	
	function paidStudentsToEnroll() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);
		 
		var idsToEnroll = recordsToEnroll.map(getStudentId);
	
		return [ ...currentEnrollment, ...idsToEnroll ];
	}
	
	function needToEnroll(record) {
		return (record.paid && !currentEnrollment.includes(record.id));
	}
	
	function getStudentId(record) {
		return record.id;
	}
	
	function remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(notYetPaid);
	
		printRecords(unpaidIds);
	}
	
	function notYetPaid(studentId) {
		var record = getStudentFromId(studentId);
		return !record.paid;
	}

}
