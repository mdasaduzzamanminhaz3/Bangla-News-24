import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div className="text-center font-bold">
            <Suspense fallback="loading...">
                <ResetPasswordForm/>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;