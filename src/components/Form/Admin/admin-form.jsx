import AddIcon from "@mui/icons-material/Add";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, TextField, CircularProgress } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { validationSchema } from "./validation-schema";

const AdminForm = ({ newRole, setNewRole, handleAddRole }) => {
    return (
        <Formik
            initialValues={newRole}
            enableReinitialize={newRole.id !== null}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setFieldValue }) => {
                const role = {
                    ...values,
                    permissions: values.permissions.split(',').map((p) => p.trim()),
                };
                handleAddRole(role);
                setNewRole({ name: '', permissions: [] });
                resetForm();


            }}
        >
            {({ values, handleChange, handleBlur, errors, touched, isValid, dirty, setFieldValue }) => {
                return (
                    <Form>
                        <Box sx={{
                            justifySelf: "center"
                        }}>
                            <Field
                                name="name"
                                as={TextField}
                                label="Role Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                fullWidth
                                error={touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                            />

                            <Field
                                name="permissions"
                                as={TextField}
                                label="Permissions (comma-separated)"
                                value={values.permissions}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                fullWidth
                                error={touched.permissions && !!errors.permissions}
                                helperText={touched.permissions && errors.permissions}
                            />

                            <Stack direction="row" spacing={2} sx={{ marginTop: 2, justifyContent: "center" }}>
                                <LoadingButton
                                    startIcon={!newRole.id && <AddIcon />}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    disableElevation
                                    disabled={!(isValid && dirty)}
                                    loadingIndicator={<CircularProgress color="inherit" size={25} />}
                                    loadingPosition="start"
                                >
                                    {newRole.id ? 'Update Role' : 'Add Role'}
                                </LoadingButton>

                                {newRole.id && (
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            const resetValues = { name: '', permissions: [], id: null };
                                            setNewRole(resetValues);
                                            setFieldValue('name', resetValues.name);
                                            setFieldValue('permissions', resetValues.permissions.join(', '));
                                            setFieldValue('id', resetValues.id);
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                )}
                            </Stack>
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AdminForm;
