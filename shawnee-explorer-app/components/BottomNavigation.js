// Enhanced Bottom Navigation with Flow Indicators
function BottomNavigation({
  activeTab = "home",
  navigateToScreen,
  hasNotifications = false,
}) {
  const navItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      screen: "homepage",
    },
    {
      id: "profile",
      icon: User,
      label: "Profile",
      screen: "profile",
    },
    {
      id: "loyalty",
      icon: Award,
      label: "Loyalty",
      screen: "loyalty",
    },
    {
      id: "explore",
      icon: Compass,
      label: "Explore",
      screen: "ar-vr",
    },
    {
      id: "events",
      icon: Calendar,
      label: "Events",
      screen: "events",
    },
    {
      id: "shop",
      icon: ShoppingBag,
      label: "Shop",
      screen: "commerce",
    },
  ];

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-18 bg-white shadow-lg"
      style={{ borderTop: "2px solid #E0E0E0" }}
    >
      <div className="flex items-center justify-around h-full px-1">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              navigateToScreen && navigateToScreen(item.screen)
            }
            className={`flex flex-col items-center justify-center p-2 rounded-lg relative transition-all duration-200 ${
              activeTab === item.id
                ? "bg-green-50"
                : "hover:bg-gray-50"
            }`}
            style={{
              color:
                activeTab === item.id ? "#228B22" : "#666666",
            }}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
            {item.id === "loyalty" && hasNotifications && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
export default BottomNavigation;