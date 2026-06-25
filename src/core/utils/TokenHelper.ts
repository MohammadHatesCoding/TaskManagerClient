import { jwtDecode } from "jwt-decode";
import type { AuthUser } from "../models/AuthUser";

export function getCurrentUser(): AuthUser | null {

    const token =
        sessionStorage.getItem(
            "accessToken"
        );

    if (!token)
        return null;

    const decoded: any =
        jwtDecode(token);

    const roles =
        decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];

    return {

        userId:
            decoded[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
            ],

        username:
            decoded[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ],

        roles:
            Array.isArray(roles)
                ? roles
                : roles
                    ? [roles]
                    : []

    };

}