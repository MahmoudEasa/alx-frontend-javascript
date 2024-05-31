type RowID = Number;
interface RowElement {
	firstName: string;
	lastName: string;
	age?: RowID;
}

export { RowID, RowElement };
