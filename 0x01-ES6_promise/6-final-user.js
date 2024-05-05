import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

const handleProfileSignup = async (firstName, lastName, fileName) => {
	const allPromises = await Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]);

	return allPromises.map((p) => {
		return {
			status: p.status,
			value: p.value || String(p.reason),
		};
	});
};

export default handleProfileSignup;
