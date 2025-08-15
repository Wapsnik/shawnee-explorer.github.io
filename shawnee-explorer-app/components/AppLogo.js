// Enhanced Logo Component
function AppLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center mb-3"
    >
      <div
        className="w-16 h-12 rounded-lg border-2 border-dashed flex items-center justify-center shadow-sm bg-white relative transition-all duration-200 hover:shadow-md"
        style={{
          borderColor: "#228B22",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <div className="flex items-center space-x-1">
          <div className="text-lg" style={{ color: "#228B22" }}>
            🧭
          </div>
          <div className="text-lg" style={{ color: "#800000" }}>
            🍷
          </div>
        </div>
        <div
          className="absolute -bottom-2 text-xs px-2 py-0.5 bg-white rounded text-gray-600"
          style={{ fontSize: "8px" }}
        >
          LOGO
        </div>
      </div>
    </motion.div>
  );
}
export default AppLogo;