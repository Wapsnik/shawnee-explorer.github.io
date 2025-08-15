// Enhanced AR/VR with Event Flow
function ARVRWireframe({ userFlows, navigateToScreen }) {
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
            Explore AR/VR
          </h2>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24">
        {/* Location Services Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 rounded-xl p-3 shadow-sm border-l-4"
          style={{ borderColor: "#228B22" }}
        >
          <div className="flex items-center text-xs">
            <MapPin
              size={14}
              className="mr-2"
              style={{ color: "#228B22" }}
            />
            <span className="text-blue-800">
              GPS: Live location tracking • AR: Camera
              permissions enabled
            </span>
          </div>
        </motion.div>

        {/* Interactive Map with Live Data */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-green-50 border-2 border-dashed h-56 rounded-xl flex flex-col relative shadow-md"
          style={{
            borderColor: "#E0E0E0",
            backgroundColor: "#F0F8F0",
          }}
        >
          {/* Layer Toggles */}
          <div className="absolute top-2 left-2 space-y-1">
            {["Historical Photos", "Seasonal Overlays"].map(
              (layer, index) => (
                <motion.label
                  key={layer}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-xs bg-white bg-opacity-80 rounded px-2 py-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mr-1"
                    style={{ accentColor: "#228B22" }}
                  />
                  {layer}
                </motion.label>
              ),
            )}
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-sm text-black">
                INTERACTIVE MAP (Live GPS)
              </div>
              <div className="text-xs mt-1">
                Real-time location & AR pins
              </div>
            </div>
          </div>

          {/* Animated Location Pins */}
          {[
            { top: 32, left: 32, name: "Garden", events: 2 },
            { top: 80, right: 48, name: "Winery", events: 1 },
            { bottom: 64, left: 64, name: "Trail", events: 0 },
          ].map((pin, index) => (
            <motion.div
              key={pin.name}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 139, 34, 0.7)",
                  "0 0 0 10px rgba(34, 139, 34, 0)",
                  "0 0 0 0 rgba(34, 139, 34, 0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: index * 0.5,
              }}
              className="absolute flex flex-col items-center cursor-pointer"
              style={pin}
              onClick={() =>
                pin.events > 0 && userFlows.arvrToEvents()
              }
            >
              <div
                className="w-3 h-3 rounded-full shadow-md relative"
                style={{ backgroundColor: "#228B22" }}
              >
                {pin.events > 0 && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                  />
                )}
              </div>
              <div className="text-xs bg-white px-1 rounded mt-1">
                {pin.name}
              </div>
              {pin.events > 0 && (
                <ArrowRight
                  size={8}
                  className="mt-1"
                  style={{ color: "#228B22" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* AR/VR Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-50 border p-4 rounded-xl shadow-md flex flex-col items-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Camera size={28} className="mb-2 text-blue-600" />
            <span className="text-sm text-blue-700">
              Scan Location
            </span>
            <span className="text-xs text-gray-500 mt-1">
              (GPS Required)
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-50 border p-4 rounded-xl shadow-md flex flex-col items-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Headphones
              size={28}
              className="mb-2 text-purple-600"
            />
            <span className="text-sm text-purple-700">
              Start Tour
            </span>
            <span className="text-xs text-gray-500 mt-1">
              (Offline Ready)
            </span>
          </motion.button>
        </div>

        {/* Location Story with Points */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border rounded-xl p-4 shadow-md"
          style={{ borderColor: "#E0E0E0" }}
        >
          <h3 className="text-sm text-black mb-2">
            Location Story (API Content)
          </h3>
          <p className="text-xs text-gray-600 mb-3">
            Garden of the Gods was formed over 300 million years
            ago. Experience the geological formations through AR
            overlays showing ancient sea life and rock formation
            processes.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 15px rgba(34, 139, 34, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-2 rounded-lg text-white text-xs shadow-sm"
            style={{ backgroundColor: "#228B22" }}
          >
            ✓ Check In for 3 Points (Supabase Sync)
          </motion.button>
        </motion.div>

        {/* Event Discovery Flow */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => userFlows.arvrToEvents()}
          className="bg-yellow-50 border rounded-xl p-3 shadow-md cursor-pointer"
          style={{ borderColor: "#228B22" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-black mb-1">
                🎪 Events Nearby
              </div>
              <div className="text-xs text-gray-600">
                2 events at this location today
              </div>
            </div>
            <ArrowRight
              size={16}
              style={{ color: "#228B22" }}
            />
          </div>
        </motion.div>

        {/* Offline Content */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border rounded-xl p-3 shadow-md"
          style={{ borderColor: "#E0E0E0" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Download
                size={16}
                className="mr-2"
                style={{ color: "#228B22" }}
              />
              <span className="text-xs text-black">
                Offline Content Available
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-1 rounded text-xs text-white"
              style={{ backgroundColor: "#228B22" }}
            >
              Download
            </motion.button>
          </div>
        </motion.div>
      </div>

      <BottomNavigation
        activeTab="explore"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}
export default ARVRWireframe;