export default function createIteratorObject(report) {
	const result = [];
	for (const key in report.allEmployees)
		for (const val of report.allEmployees[key]) result.push(val);

	return result;
}
