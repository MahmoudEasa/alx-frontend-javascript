interface MajorCredits {
	brand: string;
	credits: number;
}

interface MinorCredits {
	brand: string;
	credits: number;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits) => {
	subject1.credits += subject2.credits;
	return subject1;
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits) => {
	subject1.credits += subject2.credits;
	return subject1;
};

const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };

const minor1: MinorCredits = { credits: 2, brand: "minor" };
const minor2: MinorCredits = { credits: 1, brand: "minor" };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
