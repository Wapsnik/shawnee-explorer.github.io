// Enhanced Notifications with Real-time Updates
function NotificationsWireframe({ notifications }) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header */}
      <div className="p-4 bg-white shadow-sm">
        <div className="text-center">
          <AppLogo />
          <h2 className="text-lg" style={{ color: "#228B22" }}>
            Notifications & Support
          </h2>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto">
        {/* Security & Integration Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 border rounded-xl p-3 flex items-center shadow-sm"
          style={{ borderColor: "#E0E0E0" }}
        >
          <Shield size={16} className="mr-2 text-blue-600" />
          <div className="text-xs text-blue-800">
            🔐 Secure with OAuth • Real-time sync enabled
          </div>
        </motion.div>

        {/* Live Notifications Panel */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-black">
              Live Notifications
            </h3>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center text-xs text-green-600"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              Real-time
            </motion.div>
          </div>

          <AnimatePresence>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50 border rounded-xl p-4 shadow-md relative"
                  style={{
                    borderColor: "#228B22",
                    backgroundColor: "#E8F5E8",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Bell size={12} className="text-white" />
                  </motion.div>
                  <div className="text-xs text-green-800 mb-1">
                    {notification.message}
                  </div>
                  <div className="text-xs text-gray-600 flex items-center">
                    <Clock size={10} className="mr-1" />
                    {new Date(
                      notification.timestamp,
                    ).toLocaleTimeString()}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 border rounded-xl p-4 text-center"
                style={{ borderColor: "#E0E0E0" }}
              >
                <Bell
                  size={24}
                  className="mx-auto mb-2 text-gray-400"
                />
                <p className="text-xs text-gray-500">
                  No new notifications
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sample Static Notifications */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 border rounded-xl p-4 shadow-md"
            style={{ borderColor: "#E0E0E0" }}
          >
            <div className="text-xs text-blue-800 mb-1">
              📅 Reminder: Wine Festival tomorrow at 2 PM
            </div>
            <div className="text-xs text-gray-600 flex items-center">
              <Clock size={10} className="mr-1" />1 day ago
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-orange-50 border rounded-xl p-4 shadow-md"
            style={{ borderColor: "#E0E0E0" }}
          >
            <div className="text-xs text-orange-800 mb-1">
              ⚠️ Trail closure: Rim Rock Recreation Trail
            </div>
            <div className="text-xs text-gray-600 flex items-center">
              <Clock size={10} className="mr-1" />3 days ago
            </div>
          </motion.div>
        </div>

        {/* Enhanced Support Section */}
        <div className="space-y-3">
          <h3 className="text-sm text-black">
            Support & Help (AI Powered)
          </h3>

          {/* Contact Form with Supabase Integration */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border rounded-xl p-4 shadow-md"
            style={{ borderColor: "#E0E0E0" }}
          >
            <h4 className="text-sm text-black mb-3 flex items-center">
              <span className="mr-2">👋</span>
              Contact Us (Supabase Forms)
            </h4>
            <div className="space-y-2">
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#228B22",
                }}
                type="email"
                placeholder="Your email address"
                className="w-full p-2 text-xs border rounded-lg transition-all duration-200"
                style={{ borderColor: "#E0E0E0" }}
              />
              <motion.textarea
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#228B22",
                }}
                placeholder="How can we help you?"
                rows={3}
                className="w-full p-2 text-xs border rounded-lg resize-none transition-all duration-200"
                style={{ borderColor: "#E0E0E0" }}
              />
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 4px 15px rgba(34, 139, 34, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-2 rounded-lg text-white text-xs shadow-sm"
                style={{ backgroundColor: "#228B22" }}
              >
                Send Message (Auto-routed)
              </motion.button>
            </div>
          </motion.div>

          {/* Interactive FAQ */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border rounded-xl shadow-md"
            style={{ border: "1px solid #E0E0E0" }}
          >
            <motion.button
              whileHover={{ backgroundColor: "#f9f9f9" }}
              className="w-full p-3 flex justify-between items-center border-b transition-colors duration-200"
              style={{ borderColor: "#E0E0E0" }}
            >
              <span className="text-sm text-black">
                AI-Powered FAQ
              </span>
              <ChevronDown
                size={16}
                className="text-gray-400"
              />
            </motion.button>
            <div className="p-3 space-y-2">
              <div className="text-xs text-gray-600">
                • How do I earn loyalty points?
              </div>
              <div className="text-xs text-gray-600">
                • Where can I redeem my points?
              </div>
              <div className="text-xs text-gray-600">
                • How do I reset my password?
              </div>
              <div className="text-xs text-green-600">
                • Ask our AI assistant anything!
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Tutorial with Flow Tracking */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 4px 15px rgba(138, 43, 226, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-50 border p-4 rounded-xl text-center text-sm text-purple-700 shadow-md flex items-center justify-center"
          style={{ borderColor: "#E0E0E0" }}
        >
          <HelpCircle size={16} className="mr-2" />
          <span>Interactive App Tutorial & Flow Demo</span>
        </motion.button>
      </div>

      <BottomNavigation activeTab="home" />
    </div>
  );
}
export default NotificationsWireframe;