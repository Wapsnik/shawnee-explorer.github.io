// Enhanced Loyalty with Real-time Updates
function LoyaltyWireframe({
  userFlows,
  loyaltyPoints,
  notifications,
  navigateToScreen,
}) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Live Notifications */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <AppLogo />
            <h2
              className="text-lg"
              style={{ color: "#228B22" }}
            >
              My Loyalty
            </h2>
          </div>
          <motion.div
            animate={{
              scale: notifications.length > 0 ? [1, 1.2, 1] : 1,
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative cursor-pointer"
            onClick={() => navigateToScreen("notifications")}
          >
            <Bell size={20} className="text-gray-400" />
            {notifications.length > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-xs text-white">
                  {notifications.length}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto">
        {/* Supabase Real-time Data Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 rounded-xl p-3 shadow-sm border-l-4"
          style={{ borderColor: "#228B22" }}
        >
          <div className="flex items-center text-xs">
            <Database
              size={14}
              className="mr-2"
              style={{ color: "#228B22" }}
            />
            <span className="text-blue-800">
              Supabase: Real-time points sync • Live leaderboard
              updates
            </span>
          </div>
        </motion.div>

        {/* Dynamic Points Balance */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{
            borderColor: ["#228B22", "#32CD32", "#228B22"],
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="p-6 rounded-xl text-white text-center shadow-lg border-2"
          style={{ backgroundColor: "#228B22" }}
        >
          <motion.div
            key={loyaltyPoints}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-3xl mb-2"
          >
            {loyaltyPoints.toLocaleString()} Points
          </motion.div>
          <div className="text-sm opacity-90 mb-4">
            Your Adventure Balance (Live)
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-3">
            <div className="text-xs mb-2">
              Progress to Wine Connoisseur
            </div>
            <div className="bg-white bg-opacity-30 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-white rounded-full h-2"
              />
            </div>
            <div className="text-xs mt-1">750 points to go</div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xs bg-white bg-opacity-20 rounded-lg p-2 cursor-pointer"
            onClick={() => userFlows.exploreToBusiness()}
          >
            🏆 Explorer Level • Click to explore businesses
          </motion.div>
        </motion.div>

        {/* Interactive Accolades */}
        <div className="space-y-3">
          <h3 className="text-sm text-black">
            Your Achievements (API Synced)
          </h3>

          {[
            {
              icon: "🌟",
              title: "Region Consistent Visitor",
              desc: "Visited 5+ locations this year",
              earned: true,
            },
            {
              icon: "🥾",
              title: "Trail Enthusiast",
              desc: "Completed 10+ trails",
              earned: true,
            },
            {
              icon: "🍷",
              title: "Wine Connoisseur",
              desc: "Visit 3 more wineries",
              earned: false,
            },
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              className={`bg-white p-4 rounded-xl shadow-md ${achievement.earned ? "" : "opacity-60"}`}
              style={{ border: "1px solid #E0E0E0" }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">
                    {achievement.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-black">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {achievement.desc}
                  </div>
                </div>
                {achievement.earned && (
                  <Star
                    size={14}
                    style={{ color: "#228B22" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Exploration Flow */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => userFlows.exploreToBusiness()}
          className="bg-white rounded-xl p-4 shadow-md cursor-pointer"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm text-black mb-3 flex items-center">
            Recent Visits (Live Data)
            <ArrowRight
              size={12}
              className="ml-2"
              style={{ color: "#228B22" }}
            />
          </h3>
          <div className="space-y-2">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-xs"
            >
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#228B22" }}
              ></div>
              <span className="text-gray-600">
                Wichmann Vineyard - 50 pts
              </span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-xs"
            >
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#228B22" }}
              ></div>
              <span className="text-gray-600">
                Garden of Gods - 30 pts
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-3 rounded-xl shadow-md text-center"
            style={{ border: "1px solid #E0E0E0" }}
          >
            <div className="text-lg mb-1">🍷</div>
            <div className="text-xs text-black">
              Redeem at Winery
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-3 rounded-xl shadow-md text-center"
            style={{ border: "1px solid #E0E0E0" }}
          >
            <div className="text-lg mb-1">💡</div>
            <div className="text-xs text-black">
              View Suggestions
            </div>
          </motion.button>
        </div>
      </div>

      <BottomNavigation
        activeTab="loyalty"
        navigateToScreen={navigateToScreen}
        hasNotifications={notifications.length > 0}
      />
    </div>
  );
}
export default LoyaltyWireframe;