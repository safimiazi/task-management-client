import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,

} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export function StickyNavbar() {
    const { user, logOut } = useContext(AuthContext)
    const [openNav, setOpenNav] = React.useState(false);


    const handleLogOut = () => {
        logOut()
    }


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 text-black flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </Typography>



        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-black-900">
                <Typography
                    as="a"
                    color="black"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Tasky
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <Link to="/register">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Register</span>
                            </Button>
                        </Link>
                        {
                            user ? <Link onClick={handleLogOut}>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Sign Out</span>
                                </Button>
                            </Link> : <Link to="/login">
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Sign in</span>
                                </Button>
                            </Link>
                        }
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="">
                        <span>Sign in</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>


    );
}