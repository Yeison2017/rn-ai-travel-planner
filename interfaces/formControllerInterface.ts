export interface FormControllerInterface<T> {
  initialValues: T;
  validationSchema: any;
  errorMessages: (error: unknown) => string | undefined;
}
