import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
interface RequireAuthProps {
    children: React.ReactNode;
}
export const RequireAuth = ({ children }: RequireAuthProps) => {
    const user = useSelector((state: any) => {
        return state.user.user;
    });
    if (user === null) return <Navigate to="/" />;
    return <div>{children}</div>;
};
