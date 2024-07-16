import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../_actions/user_actions";

interface AuthProps {
    SpecificComponent: React.FC;
    option: boolean | null;
    adminRoute?: boolean | null;
}

const withAuthChild: React.FC<AuthProps> = ({ SpecificComponent, option, adminRoute = null }) => {
    const AuthenticationCheck: React.FC = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            (async () => {
                try {
                    const res = await dispatch(auth());
                    console.log(res);

                    if (!res.payload.isAuth) {
                        if (option) {
                            navigate("/login");
                        }
                    } else {
                        if (adminRoute && !res.payload.isAdmin) {
                            navigate("/");
                        } else {
                            if (option === false) navigate("/");
                        }
                    }
                } catch (error) {
                    console.error("Error occurred while authenticating:", error);
                }
            })();
        }, [dispatch, navigate, option, adminRoute]);

        return <SpecificComponent />;
    };

    return <AuthenticationCheck />;
};

export default withAuthChild;
