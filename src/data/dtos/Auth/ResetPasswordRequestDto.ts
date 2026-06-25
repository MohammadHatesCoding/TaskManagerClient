export interface ResetPasswordRequestDto{
    rawResetPasswordToken: string,
    password: string,
    confirmPassword: string
}