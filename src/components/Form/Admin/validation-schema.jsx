import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Role name is required'),
    permissions: Yup.string()
        .test(
            'is-valid-array',
            'Permissions must be a comma-separated list',
            (value) => {
                if (!value) return true;
                return value.split(',').every((p) => p.trim() !== '');
            }
        )
        .required('Permissions are required'),
});
