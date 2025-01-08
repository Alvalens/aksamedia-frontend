import { Home, Settings, User, Users } from "lucide-react";

const menuItems = [
	{
		category: "Main",
		items: [
			{ name: "Dashboard", icon: Home, path: "/dashboard" },
			{ name: "Employee", icon: Users, path: "/employees" },
		],
	},
	{
		category: "User",
		items: [{ name: "Profile", icon: User, path: "/profile" }],
	},
	{
		category: "Settings",
		items: [{ name: "Settings", icon: Settings, path: "/settings" }],
	},
];

export default menuItems;
