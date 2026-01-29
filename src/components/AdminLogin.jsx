import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Adminlogin() {
    // --- States ---
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [adminData, setAdminData] = useState([]);
    let [postingUsers, setPostingUsers] = useState([]);
    let navigate = useNavigate();

    // --- Super Admin Credentials ---
    const SUPER_ADMIN_EMAIL = "master@rehoboth.com";
    const SUPER_ADMIN_PW = "marine2026";

    // --- Fetch Admins & Posting Users ---
    useEffect(() => {
        // Fetch regular admins
        axios.get("http://localhost:1000/Admin")
            .then((res) => setAdminData(res.data))
            .catch((err) => console.error("Error fetching admin data:", err));

        // Fetch posting users
        axios.get("http://localhost:1000/PostingUsers")
            .then((res) => setPostingUsers(res.data))
            .catch((err) => console.error("Error fetching posting users:", err));
    }, []);

    // --- Role-Based Login ---
    function login_admin(e) {
        e.preventDefault();

        // 1️⃣ Super Admin
        if (email === SUPER_ADMIN_EMAIL && password === SUPER_ADMIN_PW) {
            toast.info("Welcome Super Admin");
            navigate("/admin/dashboard");
            return;
        }

        // 2️⃣ Regular Admin
        const admin = adminData.find(
            (a) => a.email === email && a.password === password
        );

        if (admin) {
            toast.success("Admin login successful");
            navigate("/admin/dashboard");
            return;
        }

        // 3️⃣ Posting User
        const postingUser = postingUsers.find(
            (u) => u.username === email && u.password === password
        );

        if (postingUser) {
            if (postingUser.blocked) {
                toast.error("Your account has been blocked by Admin");
                return;
            }
            toast.success("Welcome Posting User");
            navigate("/Project-uploads");
            return;
        }

        // 4️⃣ Invalid credentials
        toast.error("Invalid username or password");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 py-12 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border-t-4 border-[#2563EB]">
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#002B5B]">Admin Login</h2>
                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
                        Rehoboth Marine Portal
                    </p>
                </div>

                <form className="mt-8 space-y-5" onSubmit={login_admin}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Username / Email
                            </label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter Username or Email" 
                                type="text" 
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <input 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter Password" 
                                type="password" 
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
                    >
                        SIGN IN
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Adminlogin;
