export interface PasswordValidationResult {
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialCharacter: boolean;

    isValid: boolean;
}

export function validatePassword(
    password: string
): PasswordValidationResult {

    const result = {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialCharacter:
            /[!@#$%^&*(),.?":{}|<>]/.test(password),

        isValid: false
    };

    result.isValid =
        result.minLength &&
        result.hasUpperCase &&
        result.hasLowerCase &&
        result.hasNumber &&
        result.hasSpecialCharacter;

    return result;
}