var V = [ 410, 105, 664, 375 ];
var deepJs = {
	studentRecords : [],
	//to store enrolled student id
	currentEnrollment : [],

	addStudent(id, name, paid){
		this.studentRecords.push({id, name, paid});
  	},
	enrollStudents(id){
		//avoid add duplicate id
		if(!this.currentEnrollment.includes(id)){
			this.currentEnrollment.push(id);
		}
	},
	printCurrentEnrollment(){
		this.printRecords(this.currentEnrollment);
	},
	enrolledPaidStudents(){
		this.paidStudentsToEnroll();
	},
	remindUnpaidStudents(){
		this.remindUnpaid(this.currentEnrollment);
	},
	getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);
	
		// *************************
		function matchId(record) {
			return (record.id == studentId);
		}
	},
	
	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));
	
		records.sort(this.sortByNameAsc);
		records.forEach(this.printRecord);
	},
	sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},
	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},
	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));
		
		var idsToEnroll = recordsToEnroll.map(this.getStudentId);
	
		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},
	
	needToEnroll(record) {
		return record.paid && !this.currentEnrollment.includes(record.id);
	},	
	getStudentId(record) {
		return record.id;
	},
	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
		this.printRecords(unpaidIds);
	},
	
	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return record.paid;
	}
};
deepJs.addStudent(313, "Frank",  true);
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

// function workshop(){

// 	//create a publicAPI so that return all method that is encapsulated in this function
// 	return publicAPI = {
// 		addStudent,
// 		enrollStudents,
// 		printCurrentEnrollment,
// 		enrolledPaidStudents,
// 		remindUnpaidStudents

// 	};
// }
