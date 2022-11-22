import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/AdminBox.css";

const AdminBox = () => {
  const navigate = useNavigate();

  return (
    <div className="admin_box">
      <motion.div
        whileHover={{ scale: 1.05, backgroundColor: "#ea003d" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/settings")}
      >
        <p>User</p>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          background:
            "linear-gradient(315deg, rgba(92,219,249,1) 0%, rgba(11,68,144,1) 100%)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/settings/admin")}
      >
        <p>Admin</p>
      </motion.div>
    </div>
  );
};

export default AdminBox;
