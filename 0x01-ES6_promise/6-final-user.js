import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

const handleProfileSignup = async (firstName, lastName, fileName) => {
	try {
		await signUpUser(firstName, lastName);
		const value = await uploadPhoto(fileName);
		return [
			{
				status: 200,
				value: value,
			},
		];
	} catch (err) {
		return [
			{
				status: 400,
				value: err,
			},
		];
	}
};

export default handleProfileSignup;
