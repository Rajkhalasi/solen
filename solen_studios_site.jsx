import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function SolenStudios() {
  const [loading, setLoading] = useState(true);
  const [userLogin, setUserLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [adminDashboard, setAdminDashboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <Image
            src="/Gemini_Generated_Image_6hlj1b6hlj1b6hlj.png"
            alt="Solen Studios Logo"
            width={180}
            height={180}
            className="drop-shadow-[0_0_25px_rgba(255,200,100,0.8)]"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-yellow-400 text-3xl font-bold mt-4"
          >
            Solen Studios
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  const LoginPopup = ({ type, onClose, onLogin }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-gray-900 p-8 rounded-2xl w-96 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">{type} Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-700" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-700" />
        <div className="flex justify-between mt-4">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400" onClick={onLogin}>Login</Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <header className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-yellow-400">Admin Dashboard</h1>
        <Button variant="outline" onClick={() => setAdminDashboard(false)}>Logout</Button>
      </header>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Upload New Comic</h3>
            <input type="file" className="block w-full mb-3 text-sm text-gray-400" />
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Upload</Button>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Upload New Video</h3>
            <input type="file" className="block w-full mb-3 text-sm text-gray-400" />
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Upload</Button>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Edit Website</h3>
            <textarea className="w-full bg-gray-800 border border-gray-700 p-2 rounded text-white mb-3" rows="4" placeholder="Edit site text or update sections..." />
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (adminDashboard) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Image src="/Gemini_Generated_Image_6hlj1b6hlj1b6hlj.png" alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-yellow-400">Solen Studios</h1>
        </div>
        <nav className="space-x-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Comics</Button>
          <Button variant="ghost">Movies</Button>
          <Button variant="ghost">News</Button>
          <Button variant="ghost">About</Button>
          <Button variant="outline" onClick={() => setUserLogin(true)}>User Login</Button>
          <Button className="bg-yellow-600 hover:bg-yellow-500" onClick={() => setAdminLogin(true)}>Admin</Button>
        </nav>
      </header>

      <section className="text-center py-20">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">Welcome to Solen Studios</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Created by <span className="font-semibold">Raj Khalasi</span>. Step into the cinematic universe of creation and imagination.
        </p>
        <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-400">Explore Universe</Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <Card className="bg-gray-800 hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Comics Universe</h3>
            <p>Read powerful stories, mythic heroes, and legendary adventures from Solen’s world.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Cinematic Projects</h3>
            <p>Watch teasers, short films, and cinematic creations made by Solen Studios.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 hover:scale-105 transition-transform">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Join the Team</h3>
            <p>Login as an admin to manage new uploads, or sign up as a user to access exclusive content.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        <p>© 2025 Solen Studios | Created by Raj Khalasi</p>
        <p className="mt-2">Contact: solenstudios25@gmail.com</p>
      </footer>

      {userLogin && <LoginPopup type="User" onClose={() => setUserLogin(false)} />}
      {adminLogin && (
        <LoginPopup
          type="Admin"
          onClose={() => setAdminLogin(false)}
          onLogin={() => {
            setAdminLogin(false);
            setAdminDashboard(true);
          }}
        />
      )}
    </div>
  );
}
