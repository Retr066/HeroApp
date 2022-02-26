import { ChangeEvent, useState } from 'react';

export default function useForm(initialState: any = {}) {
	const [values, setValues] = useState(initialState);

	const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const resetState = () => {
		setValues(initialState);
	};

	return [values, handleInputsChange, resetState];
}
