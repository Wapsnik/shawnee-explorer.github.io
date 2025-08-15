// Enhanced Business Profile with Analytics Flow
function BusinessProfileWireframe({
  userFlows,
  navigateToScreen,
}) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Analytics Flow */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <AppLogo />
            <h2
              className="text-lg"
              style={{ color: "#228B22" }}
            >
              Wichmann Vineyard
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => userFlows.businessToAnalytics()}
            className="p-2 rounded-lg bg-green-50"
          >
            <BarChart3 size={20} style={{ color: "#228B22" }} />
          </motion.button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto">
        {/* API Integration Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 rounded-xl p-3 shadow-sm border-l-4"
          style={{ borderColor: "#228B22" }}
        >
          <div className="flex items-center text-xs">
            <Cloud
              size={14}
              className="mr-2"
              style={{ color: "#228B22" }}
            />
            <span className="text-blue-800">
              API: Business data sync • Real-time menu updates
            </span>
          </div>
        </motion.div>

        {/* Business Photo with Upload */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div className="bg-gray-100 h-32 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-500">
              <div className="text-lg mb-1">🏢</div>
              <div className="text-xs">
                Business Photo (Live Updates)
              </div>
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
          </div>
          <div className="text-xs text-gray-600">
            Historic family-owned vineyard in the heart of
            Shawnee National Forest. Offering wine tastings,
            tours, and seasonal events since 1982.
          </div>
        </motion.div>

        {/* Dynamic Menu Items */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-black">
              Menu & Offerings (API Synced)
            </h3>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              <RefreshCw
                size={12}
                style={{ color: "#228B22" }}
              />
            </motion.div>
          </div>
          <div className="space-y-2">
            {[
              {
                name: "Red Wine Bottle",
                desc: "2021 Cabernet Sauvignon",
                price: "$20",
                popular: true,
              },
              {
                name: "Wine Tasting Experience",
                desc: "5 wine flight with snacks",
                price: "$35",
                popular: false,
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl p-3 shadow-md flex justify-between items-center relative"
                style={{ border: "1px solid #E0E0E0" }}
              >
                {item.popular && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  />
                )}
                <div>
                  <div className="text-xs text-black">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {item.desc}
                  </div>
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#228B22" }}
                >
                  {item.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AR/VR Experience Flow */}
        <div className="space-y-2">
          <h3 className="text-sm text-black">
            Virtual Experience
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToScreen("ar-vr")}
              className="bg-blue-50 border p-3 rounded-xl text-center shadow-sm flex flex-col items-center"
              style={{ borderColor: "#E0E0E0" }}
            >
              <Camera
                size={20}
                className="mb-1 text-blue-600"
              />
              <span className="text-xs text-blue-700">
                View AR Overlay
              </span>
              <ArrowRight size={10} className="mt-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-50 border p-3 rounded-xl text-center shadow-sm flex flex-col items-center"
              style={{ borderColor: "#E0E0E0" }}
            >
              <Headphones
                size={20}
                className="mb-1 text-purple-600"
              />
              <span className="text-xs text-purple-700">
                Start VR Tour
              </span>
            </motion.button>
          </div>
        </div>

        {/* Events with Ticket Flow */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm text-black mb-3">
            Upcoming Events
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-black">
                  Wine & Dine Festival
                </div>
                <div className="text-xs text-gray-600">
                  March 15, 2025
                </div>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 4px 15px rgba(34, 139, 34, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => userFlows.arvrToEvents()}
                className="px-2 py-1 rounded text-xs text-white shadow-sm flex items-center"
                style={{ backgroundColor: "#228B22" }}
              >
                Buy Ticket
                <ArrowRight size={10} className="ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Loyalty Integration */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{
            borderColor: ["#228B22", "#32CD32", "#228B22"],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="bg-green-50 rounded-xl p-4 shadow-md border"
        >
          <h3 className="text-sm text-black mb-2">
            Earn Points Here (Live Tracking)
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 rounded-lg text-white shadow-sm"
            style={{ backgroundColor: "#228B22" }}
          >
            Enter Daily Code for 25 Points
          </motion.button>
        </motion.div>

        {/* Analytics Access Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(0, 123, 255, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => userFlows.businessToAnalytics()}
          className="w-full bg-blue-50 border p-3 rounded-xl text-center text-sm text-blue-700 shadow-sm flex items-center justify-center"
          style={{ borderColor: "#E0E0E0" }}
        >
          <BarChart3 size={16} className="mr-2" />
          <span>View Business Analytics</span>
          <ArrowRight size={16} className="ml-2" />
        </motion.button>
      </div>

      <BottomNavigation
        activeTab="explore"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}
export default BusinessProfileWireframe;