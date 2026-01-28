import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

function Adminlogin() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [adminData, setAdminData] = useState([])
    let navigate = useNavigate();

    // 1. Specific Super Admin Credentials
    const SUPER_ADMIN_EMAIL = "master@rehoboth.com";
    const SUPER_ADMIN_PW = "marine2026";

    useEffect(() => {
        axios.get("http://localhost:1000/Admin")
            .then((res) => {
                setAdminData(res.data)
            })
            .catch((err) => {
                console.error("Error fetching admin data:", err);
            })
    }, [])

    function login_admin(e) {
        e.preventDefault();

        // Step 1: Check for Super Admin (Specific Credentials)
        if (email === SUPER_ADMIN_EMAIL && password === SUPER_ADMIN_PW) {
            toast.info("Welcome Super Admin");
            navigate("/admin/dashboard"); // Redirects to User Management
            return; 
        }

        // Step 2: Check database for regular Admin
        let regularAdmin = adminData.find((a) => a.email === email && a.password === password);

        if (regularAdmin) {
            toast.success("Login successful");
            navigate("/Project-uploads"); // Redirects to Posting Page
        } else {
            toast.error("Invalid Username or Password");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 py-12 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border-t-4 border-[#2563EB]">
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#002B5B]">Admin Login</h2>
                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Rehoboth Marine Portal</p>
                </div>

                <form className="mt-8 space-y-5" onSubmit={login_admin}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Username / Email</label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter Username" 
                                type="text" 
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
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

                    {/* <div className="flex items-center justify-center mt-4">
                        <Link to="/admin-sign" className="text-sm text-[#2563EB] hover:underline font-medium">
                            Need a new admin account? Register
                        </Link>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Adminlogin