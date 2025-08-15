// Enhanced Analytics with Real-time Data
function AnalyticsWireframe({ flowStep }) {
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
            Business Analytics
          </h2>
          <p className="text-xs text-gray-600">
            Real-time Dashboard for Business Partners
          </p>
          {flowStep === "metrics" && (
            <Badge
              style={{
                backgroundColor: "#228B22",
                color: "white",
              }}
            >
              Live Metrics Active
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto">
        {/* Real-time Data Connection */}
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
              Supabase: Real-time analytics • API: Live sales
              data • Auto-refresh: 30s
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="ml-2 w-2 h-2 bg-green-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Date Range Filter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-3 shadow-md flex justify-between items-center"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <span className="text-sm text-black">
            Date Range:
          </span>
          <select
            className="text-xs border rounded px-2 py-1"
            style={{ borderColor: "#E0E0E0" }}
          >
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </motion.div>

        {/* Real-time Metrics Cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              value: "500",
              label: "Points Redeemed",
              trend: "up",
              change: "+12%",
            },
            {
              value: "127",
              label: "Unique Visitors",
              trend: "up",
              change: "+8%",
            },
            {
              value: "$2,340",
              label: "Revenue Today",
              trend: "up",
              change: "+15%",
            },
            {
              value: "89%",
              label: "Customer Satisfaction",
              trend: "stable",
              change: "±0%",
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white rounded-xl p-4 shadow-md text-center relative"
              style={{ border: "1px solid #E0E0E0" }}
            >
              <motion.div
                key={metric.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-2xl mb-1"
                style={{ color: "#228B22" }}
              >
                {metric.value}
              </motion.div>
              <div className="text-xs text-gray-600 mb-1">
                {metric.label}
              </div>
              <div
                className={`text-xs flex items-center justify-center ${
                  metric.trend === "up"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <TrendingUp size={10} className="mr-1" />
                {metric.change}
              </div>

              {/* Live update indicator */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.5,
                }}
                className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Sales Chart */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm text-black">
              Sales Trends (Live API Data)
            </h3>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            >
              <RefreshCw
                size={12}
                style={{ color: "#228B22" }}
              />
            </motion.div>
          </div>
          <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-500">
              <BarChart3 size={24} className="mx-auto mb-2" />
              <div className="text-xs">
                Real-time Chart Rendering
              </div>
              <div className="text-xs">
                WebSocket Connection Active
              </div>
            </div>

            {/* Animated data visualization */}
            <motion.div
              animate={{ x: [-20, 300] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
              className="absolute bottom-4 h-1 w-8 rounded-full"
              style={{ backgroundColor: "#228B22" }}
            />
          </div>
        </motion.div>

        {/* Live Loyalty Data */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm text-black mb-3">
            Loyalty Member Data (Supabase Sync)
          </h3>
          <div className="space-y-2">
            {[
              {
                label: "Total Members Visited:",
                value: "89",
                change: "+3",
              },
              {
                label: "Average Points per Visit:",
                value: "35",
                change: "+2",
              },
              {
                label: "Repeat Visitors:",
                value: "67%",
                change: "+5%",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between text-xs"
              >
                <span className="text-gray-600">
                  {stat.label}
                </span>
                <div className="flex items-center">
                  <span className="text-black mr-2">
                    {stat.value}
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.3,
                    }}
                    className="text-green-600 text-xs"
                  >
                    {stat.change}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Points Chart */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm text-black mb-3">
            Points Redeemed (Real-time)
          </h3>
          <div className="flex items-end justify-between h-20 px-2">
            {[60, 80, 45, 90, 70].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#32CD32",
                }}
                className="w-8 rounded-t cursor-pointer"
                style={{ backgroundColor: "#228B22" }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2 px-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </motion.div>

        {/* Export with Real-time Options */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(34, 139, 34, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-3 rounded-xl text-white shadow-lg flex items-center justify-center"
          style={{ backgroundColor: "#228B22" }}
        >
          <Download size={16} className="mr-2" />
          <span className="text-sm">
            Export Live Analytics Data
          </span>
        </motion.button>
      </div>

      {/* Business Navigation */}
      <div
        className="absolute bottom-0 left-0 right-0 h-18 bg-white shadow-lg"
        style={{ borderTop: "2px solid #E0E0E0" }}
      >
        <div className="flex items-center justify-around h-full px-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-green-50"
            style={{ color: "#228B22" }}
          >
            <BarChart3 size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg"
            style={{ color: "#666666" }}
          >
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg"
            style={{ color: "#666666" }}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Events</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default AnalyticsWireframe;