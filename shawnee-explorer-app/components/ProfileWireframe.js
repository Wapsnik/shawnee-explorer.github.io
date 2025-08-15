// Enhanced Profile with Flow Integration
import { useState, useEffect } from 'react';
function ProfileWireframe({
  userFlows,
  profileCompleted,
  flowStep,
  navigateToScreen,
}) {
  const [showOptional, setShowOptional] = useState(false);
  const [dailyCode, setDailyCode] = useState('');
  useEffect(() => {
  const generateCode = () => 'USER-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  setDailyCode(generateCode());
  const timer = setInterval(() => setDailyCode(generateCode()), 86400000); // 24 hours
  return () => clearInterval(timer);
}, []);

  return (
    <div
      className="h-full flex flex-col relative overflow-y-auto"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Flow Step */}
      <div className="p-4 bg-white shadow-sm">
        <div className="text-center">
          <AppLogo />
          <h2 className="text-lg" style={{ color: "#228B22" }}>
            My Profile
          </h2>
          {flowStep === "setup" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <Badge
                style={{
                  backgroundColor: "#228B22",
                  color: "white",
                }}
              >
                Setup Flow: Step 1 of 3
              </Badge>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24">
        {/* Supabase Auth Integration Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 rounded-xl p-3 shadow-sm border-l-4"
          style={{ borderColor: "#228B22" }}
        >
          <div className="flex items-center text-xs">
            <Shield
              size={14}
              className="mr-2"
              style={{ color: "#228B22" }}
            />
            <span className="text-blue-800">
              Supabase Auth: Profile data encrypted & synced
            </span>
          </div>
        </motion.div>

        {/* Profile Picture with Upload Flow */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md text-center"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div
            className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-dashed transition-all duration-200 hover:border-solid"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Upload size={20} className="text-gray-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs px-3 py-1 rounded-lg border transition-all duration-200 hover:shadow-md"
            style={{ borderColor: "#228B22", color: "#228B22" }}
          >
            Upload Photo (Supabase Storage)
          </motion.button>
        </motion.div>

        {/* Required Fields with Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm mb-3 text-black">
            Required Information
          </h3>
          <div className="space-y-3">
            {["Name", "Email", "Phone", "ZIP Code"].map(
              (field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 border rounded-lg p-3 text-xs relative"
                  style={{ borderColor: "#228B22" }}
                >
                  <label className="text-gray-700">
                    {field} *
                  </label>
                  <div className="mt-1 text-black">
                    [Input Field - Real-time Validation]
                  </div>
                  {index === 1 && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Optional Fields with Interactive Accordion */}
        <motion.div
          layout
          className="bg-white rounded-xl shadow-md overflow-hidden"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <motion.button
            whileHover={{ backgroundColor: "#f9f9f9" }}
            onClick={() => setShowOptional(!showOptional)}
            className="w-full p-3 flex justify-between items-center bg-gray-50 transition-colors duration-200"
            style={{ borderBottom: "1px solid #E0E0E0" }}
          >
            <span className="text-sm text-black">
              Optional Information
            </span>
            <motion.div
              animate={{ rotate: showOptional ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus size={16} style={{ color: "#228B22" }} />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {showOptional && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-3 space-y-2">
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    DOB: [Date Picker]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Gender: [Select Dropdown]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Marital Status: [Select]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Interests:
                    <div className="flex flex-wrap gap-1 mt-1">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-green-100 rounded text-xs cursor-pointer"
                      >
                        🍷 Wine
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-green-100 rounded text-xs cursor-pointer"
                      >
                        🥾 Trails
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Loyalty Codes with Real-time Sync */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm text-black">
              My Codes (Live Sync)
            </h3>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Copy
                  size={14}
                  className="text-gray-400 hover:text-gray-600"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <RefreshCw
                  size={14}
                  style={{ color: "#228B22" }}
                />
              </motion.button>
            </div>
          </div>
          <motion.div
            animate={{
              borderColor: ["#E0E0E0", "#228B22", "#E0E0E0"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-green-50 p-3 rounded-lg text-center shadow-sm border"
            style={{ backgroundColor: "#E8F5E8" }}
          >
            <div className="text-green-800 mb-1">
              Your Code: <strong>{dailyCode}</strong>
            </div>
            <div className="text-xs text-gray-600">
              Expires Midnight • Auto-refresh enabled
            </div>
          </motion.div>
        </motion.div>

        {/* Flow Navigation */}
        {flowStep === "setup" && (
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(34, 139, 34, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={userFlows.completeProfile}
            className="w-full p-4 rounded-xl text-white shadow-lg flex items-center justify-center"
            style={{ backgroundColor: "#228B22" }}
          >
            <span className="text-sm mr-2">
              Complete Profile & Continue
            </span>
            <ArrowRight size={16} />
          </motion.button>
        )}

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-xl text-center text-sm text-white shadow-sm"
          style={{ backgroundColor: "#800000" }}
        >
          Logout from Adventure
        </motion.button>
      </div>

      <BottomNavigation
        activeTab="profile"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}
export default ProfileWireframe;