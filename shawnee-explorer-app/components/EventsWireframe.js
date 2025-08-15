// Enhanced Events with Commerce Flow
function EventsWireframe({
  userFlows,
  flowStep,
  navigateToScreen,
}) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with API Status */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <AppLogo />
            <h2
              className="text-lg"
              style={{ color: "#228B22" }}
            >
              Events
            </h2>
            {flowStep === "booking" && (
              <Badge
                style={{
                  backgroundColor: "#228B22",
                  color: "white",
                }}
              >
                Booking Flow Active
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            >
              <RefreshCw
                size={12}
                style={{ color: "#228B22" }}
              />
            </motion.div>
            <Filter size={16} className="text-gray-400" />
            <select
              className="text-xs bg-transparent border rounded px-2 py-1"
              style={{ borderColor: "#E0E0E0" }}
            >
              <option>Live Feed</option>
              <option>Winery Events</option>
              <option>Trail Events</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-3 pb-24 overflow-y-auto">
        {/* API Data Feed Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs text-gray-500 mb-2 bg-blue-50 rounded-lg p-2"
        >
          <div className="flex items-center justify-center">
            <Database
              size={12}
              className="mr-1"
              style={{ color: "#228B22" }}
            />
            ↻ Live API feed • Real-time availability • Cached
            for offline
          </div>
        </motion.div>

        {/* Interactive Event Cards */}
        {[
          {
            title: "🍷 Wine & Dine Festival",
            date: "March 15, 2025 • 2:00 PM",
            location: "Garden of the Gods Recreation Area",
            price: "$45",
            available: 23,
            popular: true,
          },
          {
            title: "🌲 Guided Nature Walk",
            date: "March 18, 2025 • 9:00 AM",
            location: "Bell Smith Springs",
            price: "$15",
            available: 8,
            popular: false,
          },
          {
            title: "📸 Photography Workshop",
            date: "March 22, 2025 • 1:00 PM",
            location: "Rim Rock Recreation Trail",
            price: "$35",
            available: 12,
            popular: false,
          },
        ].map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-white border rounded-xl p-4 shadow-md relative"
            style={{ border: "1px solid #E0E0E0" }}
          >
            {event.popular && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >
                Popular
              </motion.div>
            )}

            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-sm text-black mb-1 flex items-center">
                  {event.title}
                  <MapPin
                    size={12}
                    className="ml-2 text-gray-400"
                  />
                </h3>
                <p className="text-xs text-gray-600">
                  {event.date}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {event.location}
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <span
                    className="text-sm"
                    style={{ color: "#228B22" }}
                  >
                    {event.price}
                  </span>
                  <span className="text-xs text-gray-500">
                    • {event.available} spots left
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow:
                      "0 4px 15px rgba(34, 139, 34, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => userFlows.eventsToCommerce()}
                  className="px-3 py-1 rounded-lg text-white text-xs shadow-sm flex items-center"
                  style={{ backgroundColor: "#228B22" }}
                >
                  Buy Ticket
                  <ArrowRight size={10} className="ml-1" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 rounded-lg border text-xs"
                  style={{
                    borderColor: "#228B22",
                    color: "#228B22",
                  }}
                >
                  RSVP +{Math.floor(Math.random() * 5) + 2}pts
                </motion.button>
              </div>
            </div>

            {/* Real-time availability bar */}
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Availability</span>
                <span>{event.available}/50 spots</span>
              </div>
              <div className="bg-gray-200 rounded-full h-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(event.available / 50) * 100}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  className="rounded-full h-1"
                  style={{
                    backgroundColor:
                      event.available > 10
                        ? "#228B22"
                        : "#FF6B6B",
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Quick Commerce Access */}
        {flowStep === "booking" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 rounded-xl p-4 shadow-md border"
            style={{ borderColor: "#228B22" }}
          >
            <div className="text-center">
              <ShoppingCart
                size={24}
                className="mx-auto mb-2"
                style={{ color: "#228B22" }}
              />
              <p className="text-sm text-black mb-2">
                Continue to Checkout
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => userFlows.eventsToCommerce()}
                className="px-4 py-2 rounded-lg text-white text-sm"
                style={{ backgroundColor: "#228B22" }}
              >
                Complete Purchase
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      <BottomNavigation
        activeTab="events"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}
export default EventsWireframe;