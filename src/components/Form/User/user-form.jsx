import AddIcon from "@mui/icons-material/Add";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { validationSchema } from "./validation-schema";

const UserForm = ({ newUser, setNewUser, handleAddUser }) => {
  return (
    <Formik
      initialValues={newUser}
      enableReinitialize={newUser.id !== null}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleAddUser(values);
        resetForm();
        setNewUser({
          name: '',
          role: ''
        });
      }}
    >
      {({ values, handleChange, handleBlur, errors, touched, isValid, dirty, setFieldValue }) => (
        <Form>
          <Box sx={{ justifySelf: "center" }}>
            <Field
              name="name"
              as={TextField}
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
              name="role"
              as={TextField}
              label="Role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              fullWidth
              error={touched.role && !!errors.role}
              helperText={touched.role && errors.role}
            />
            <Stack direction="row" spacing={2} sx={{ marginTop: 2, justifyContent: "center" }}>
              <LoadingButton
                startIcon={!newUser.id && <AddIcon />}
                size="large"
                type="submit"
                variant="contained"
                disableElevation
                disabled={!(isValid && dirty)}
              >
                {newUser.id ? 'Update User' : 'Add User'}
              </LoadingButton>
              {newUser.id && (
                <Button
                  variant="contained"
                  onClick={() => {
                    const resetValues = { name: '', role: '', id: null };
                    setNewUser(resetValues);
                    setFieldValue('name', resetValues.name);
                    setFieldValue('role', resetValues.role);
                    setFieldValue('id', resetValues.id);
                  }}
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
