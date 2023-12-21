import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import loginAnimation from "../assets/login.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";


const Login = () => {
const {signInWithPassEmail} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signInWithPassEmail(email, password)
        .then()
    }
    return (
        <div className=" bg-blue-200 pt-10 md:pt-0 md:h-[665px] grid grid-cols-1 md:grid-cols-2 items-center justify-between md:gap-4 p-4">
            <div className="md:ml-40">
                <form onSubmit={handleLogin}>
                    <Card className="md:w-96">
                        <CardHeader
                            variant="gradient"
                            color="gray"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign in
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                            <Input label="Email" size="lg" />
                            <Input label="Password" size="lg" />
                            <div className="-ml-2.5">
                                <Checkbox label="Remember Me" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" variant="gradient" fullWidth>
                                Sign in
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Don&apos;t have an account?
                                <Link to="/register">
                                    <Typography
                                        as="a"
                                        href=""
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                    >
                                        register
                                    </Typography>
                                </Link>
                            </Typography>
                        </CardFooter>
                    </Card>
                </form>
            </div>
            <div>
                <Lottie className="h-[500px]" animationData={loginAnimation} />
            </div>
        </div>
    );
};

export default Login;