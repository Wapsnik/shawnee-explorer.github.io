// Enhanced Homepage with Authentication Flow
function HomepageWireframe({
  userFlows,
  userAuthenticated,
  navigateToScreen,
}) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Flow Indicators */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex-1 text-center">
            <AppLogo />
            <h1
              className="text-lg mb-1"
              style={{ color: "#228B22" }}
            >
              Explore with Us!
            </h1>
            <p className="text-xs text-gray-700">
              Shawnee National Forest
            </p>
          </div>
          <div className="absolute top-4 right-4 flex flex-col items-end space-y-1">
            <WifiOff size={16} className="text-gray-400" />
            {userAuthenticated && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-20 overflow-y-auto">
        {/* API Integration Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
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
              Supabase: Real-time user data sync • API: Location
              services ready
            </span>
          </div>
        </motion.div>

        {/* Search Bar with Live API Hint */}
        <div
          className="bg-white rounded-xl p-3 shadow-md flex items-center relative"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search locations, events... (API Connected)"
            className="flex-1 text-sm bg-transparent outline-none"
          />
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>

        {/* Interactive Map Preview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => navigateToScreen("ar-vr")}
          className="bg-green-50 rounded-2xl shadow-lg h-48 overflow-hidden relative cursor-pointer"
          style={{ border: "2px dashed #E0E0E0" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: "#E8F5E8" }}
              >
                <MapPin
                  size={20}
                  style={{ color: "#228B22" }}
                />
              </div>
              <div className="text-sm text-black">
                Shawnee National Forest Trails
              </div>
              <div className="text-xs mt-1">
                Tap to explore with AR/VR
              </div>
            </div>
          </div>
          {/* Animated Pin Markers */}
          {[
            { top: 24, left: 32 },
            { top: 48, right: 48 },
            { bottom: 32, left: 64 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: "#228B22", ...pos }}
            />
          ))}

          {/* Flow Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-4 right-4"
          >
            <ArrowRight
              size={16}
              style={{ color: "#228B22" }}
            />
          </motion.div>
        </motion.div>

        {/* Featured Promotions with Real-time Updates */}
        <div className="space-y-2">
          <h3 className="text-sm text-black">
            Featured Promotions (Live Feed)
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 shadow-md"
            style={{
              border: "1px solid #E0E0E0",
              borderLeft: "4px solid #228B22",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-black mb-1">
                  🎯 Double Points Day
                </h4>
                <p className="text-xs text-gray-600">
                  Visit any winery today and earn 2x loyalty
                  points!
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <ChevronRight
                  size={16}
                  className="text-gray-400"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Access with Flow Navigation */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(34, 139, 34, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateToScreen("loyalty")}
            className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center space-x-2"
            style={{ border: "1px solid #E0E0E0" }}
          >
            <Gift size={16} style={{ color: "#228B22" }} />
            <span className="text-sm text-black">
              Loyalty Points
            </span>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(34, 139, 34, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateToScreen("events")}
            className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center space-x-2"
            style={{ border: "1px solid #E0E0E0" }}
          >
            <Calendar size={16} style={{ color: "#228B22" }} />
            <span className="text-sm text-black">
              Upcoming Events
            </span>
          </motion.button>
        </div>

        {/* Authentication Flow Buttons */}
        <div className="space-y-3">
          {!userAuthenticated ? (
            <>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 8px 25px rgba(34, 139, 34, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={userFlows.login}
                className="w-full p-4 rounded-xl text-white shadow-lg transition-all duration-200"
                style={{ backgroundColor: "#228B22" }}
              >
                <div className="flex items-center justify-center">
                  <Key size={16} className="mr-2" />
                  <span className="text-base">
                    Login to Your Adventure
                  </span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-xl text-black shadow-md transition-all duration-200"
                style={{
                  backgroundColor: "white",
                  border: "2px solid #E0E0E0",
                }}
              >
                <span className="text-base">
                  Join the Exploration
                </span>
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 rounded-xl p-4 text-center"
              style={{ border: "1px solid #228B22" }}
            >
              <CheckCircle
                size={24}
                className="mx-auto mb-2"
                style={{ color: "#228B22" }}
              />
              <p className="text-sm text-green-800">
                Welcome back, Explorer!
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <BottomNavigation
        activeTab="home"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}
export default HomepageWireframe;