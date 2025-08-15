// Enhanced Commerce with Purchase Flow
function CommerceWireframe({
  userFlows,
  flowStep,
  loyaltyPoints,
}) {
  return (
    <div
      className="h-full flex flex-col relative"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Flow Status */}
      <div className="p-4 bg-white shadow-sm">
        <div className="text-center">
          <AppLogo />
          <h2 className="text-lg" style={{ color: "#228B22" }}>
            Shop
          </h2>
          {flowStep === "purchase" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-2"
            >
              <Badge
                style={{
                  backgroundColor: "#228B22",
                  color: "white",
                }}
              >
                Purchase Flow: Event Tickets
              </Badge>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto">
        {/* Payment Integration Hint */}
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
              Secure Payment: Stripe API • Loyalty: Real-time
              point sync
            </span>
          </div>
        </motion.div>

        {/* Dynamic Loyalty Points */}
        <motion.div
          animate={{
            borderColor: ["#228B22", "#32CD32", "#228B22"],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="bg-green-50 rounded-xl p-3 shadow-md text-center border"
        >
          <div className="text-sm text-black mb-1">
            Your Points:{" "}
            <strong>{loyaltyPoints.toLocaleString()}</strong>
          </div>
          <div className="text-xs" style={{ color: "#228B22" }}>
            Use Points to Save 10% • Real-time balance
          </div>
        </motion.div>

        {/* Event Ticket (if from events flow) */}
        {flowStep === "purchase" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 rounded-xl p-4 shadow-md border-l-4"
            style={{ borderColor: "#228B22" }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm text-black">
                  🍷 Wine & Dine Festival
                </h3>
                <p className="text-xs text-gray-600">
                  March 15, 2025 • 2:00 PM
                </p>
              </div>
              <div className="text-right">
                <div
                  className="text-lg"
                  style={{ color: "#228B22" }}
                >
                  $45.00
                </div>
                <div className="text-xs text-gray-500">
                  1 ticket
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid with Hover Effects */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: "Shawnee Explorer Gear",
              desc: "Trail Map & Guide",
              price: "$25.00",
              emoji: "📍",
            },
            {
              name: "Forest Tee",
              desc: "100% Organic Cotton",
              price: "$28.99",
              emoji: "👕",
            },
            {
              name: "Insulated Water Bottle",
              desc: "32oz Stainless Steel",
              price: "$35.99",
              emoji: "🍶",
            },
            {
              name: "Complete Hiking Guide",
              desc: "200 Pages, Waterproof",
              price: "$19.99",
              emoji: "📖",
            },
          ].map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border rounded-xl p-3 shadow-md"
              style={{ borderColor: "#E0E0E0" }}
            >
              <div className="bg-gray-100 h-24 rounded-lg mb-3 flex items-center justify-center">
                <div className="text-2xl">{product.emoji}</div>
              </div>
              <h3 className="text-xs text-black mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                {product.desc}
              </p>
              <p
                className="text-sm mb-2"
                style={{ color: "#228B22" }}
              >
                {product.price}
              </p>
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-1 py-1 mr-1 text-xs border rounded-lg transition-all duration-200 hover:shadow-md"
                  style={{ borderColor: "#E0E0E0" }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Heart
                    size={14}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vacation Packages */}
        <div className="space-y-2">
          <h3 className="text-sm text-black">
            Vacation Packages (API Powered)
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border rounded-xl p-4 shadow-md"
            style={{ borderColor: "#E0E0E0" }}
          >
            <h4 className="text-sm text-black mb-2">
              🍷🥾 Winery + Trail Combo
            </h4>
            <p className="text-xs text-gray-600 mb-2">
              2-day experience with wine tastings and guided
              hikes
            </p>
            <div className="flex justify-between items-center">
              <span
                className="text-lg"
                style={{ color: "#228B22" }}
              >
                $149.99
              </span>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 4px 15px rgba(34, 139, 34, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-white text-sm shadow-sm"
                style={{ backgroundColor: "#228B22" }}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Checkout Flow */}
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-pink-50 border p-4 rounded-xl text-center text-sm text-pink-700 shadow-md flex items-center justify-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Heart size={16} className="mr-2" />
            <span>Wish List (3 items)</span>
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border rounded-xl p-3 shadow-md"
            style={{ borderColor: "#E0E0E0" }}
          >
            <h4 className="text-sm text-black mb-2">
              Shipping Options (API Connected)
            </h4>
            <div className="space-y-1">
              <motion.label
                whileHover={{ backgroundColor: "#f9f9f9" }}
                className="flex items-center text-xs p-2 rounded cursor-pointer"
              >
                <input
                  type="radio"
                  name="shipping"
                  className="mr-2"
                  style={{ accentColor: "#228B22" }}
                />
                Local Pickup (IL) - Free
              </motion.label>
              <motion.label
                whileHover={{ backgroundColor: "#f9f9f9" }}
                className="flex items-center text-xs p-2 rounded cursor-pointer"
              >
                <input
                  type="radio"
                  name="shipping"
                  className="mr-2"
                  style={{ accentColor: "#228B22" }}
                />
                Standard Shipping - $5.99
              </motion.label>
            </div>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(34, 139, 34, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-4 rounded-xl text-white text-center text-sm shadow-lg flex items-center justify-center"
            style={{ backgroundColor: "#228B22" }}
          >
            <ShoppingCart size={16} className="mr-2" />
            <span>
              Secure Checkout - $
              {flowStep === "purchase" ? "154.97" : "109.97"}
            </span>
          </motion.button>
        </div>
      </div>

      <BottomNavigation activeTab="shop" />
    </div>
  );
}
export default CommerceWireframe;