import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Award,
  Compass,
  Calendar,
  ShoppingBag,
  Search,
  Bell,
  RefreshCw,
  Plus,
  ChevronDown,
  ShoppingCart,
  Heart,
  HelpCircle,
  Shield,
  Camera,
  Headphones,
  Copy,
  MapPin,
  Star,
  Upload,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Download,
  Wifi,
  WifiOff,
  Filter,
  Clock,
  Gift,
  ArrowRight,
  Database,
  Cloud,
  Key,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("homepage");
  const [userAuthenticated, setUserAuthenticated] =
    useState(false);
  const [profileCompleted, setProfileCompleted] =
    useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(1250);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flowStep, setFlowStep] = useState("start");

  // Simulated real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newNotification = {
          id: Date.now(),
          type: "points",
          message: `+${Math.floor(Math.random() * 50)} points earned!`,
          timestamp: new Date(),
        };
        setNotifications((prev) => [
          newNotification,
          ...prev.slice(0, 4),
        ]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Screen navigation with flow tracking
  const navigateToScreen = (screenId, step = null) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveScreen(screenId);
      if (step) setFlowStep(step);
      setIsLoading(false);
    }, 500);
  };

  // User flow transitions
  const userFlows = {
    login: () => {
      setUserAuthenticated(true);
      navigateToScreen("profile", "setup");
    },
    completeProfile: () => {
      setProfileCompleted(true);
      navigateToScreen("loyalty", "onboarding");
    },
    exploreToBusiness: () => {
      navigateToScreen("business", "discovery");
    },
    businessToAnalytics: () => {
      navigateToScreen("analytics", "metrics");
    },
    arvrToEvents: () => {
      navigateToScreen("events", "booking");
    },
    eventsToCommerce: () => {
      navigateToScreen("commerce", "purchase");
    },
  };

  const screens = [
    { id: "homepage", label: "Homepage" },
    { id: "profile", label: "Profile" },
    { id: "loyalty", label: "Loyalty" },
    { id: "business", label: "Business" },
    { id: "ar-vr", label: "AR/VR" },
    { id: "events", label: "Events" },
    { id: "commerce", label: "E-commerce" },
    { id: "analytics", label: "Analytics" },
    { id: "notifications", label: "Support" },
  ];

  return (
    <div
      className="min-h-screen p-4"
      style={{
        background:
          "linear-gradient(135deg, #f0f8ff 0%, #e8f5e8 100%)",
      }}
    >
      <div className="max-w-md mx-auto">
        <div className="mb-6 text-center">
          <h1
            className="mb-2 text-3xl"
            style={{ color: "#228B22" }}
          >
            Shawnee Explorer
          </h1>
          <p className="text-gray-600">
            Interactive Tourism App Prototype
          </p>

          {/* Flow Indicator */}
          {flowStep !== "start" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex items-center justify-center space-x-2"
            >
              <Badge
                variant="outline"
                style={{
                  borderColor: "#228B22",
                  color: "#228B22",
                }}
              >
                Flow: {flowStep}
              </Badge>
              {userAuthenticated && (
                <CheckCircle
                  size={16}
                  style={{ color: "#228B22" }}
                />
              )}
            </motion.div>
          )}
        </div>

        {/* API & Supabase Status Indicators */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg p-2 shadow-sm border flex items-center justify-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Database
              size={14}
              style={{ color: "#228B22" }}
              className="mr-1"
            />
            <span className="text-xs">Supabase Ready</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg p-2 shadow-sm border flex items-center justify-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Cloud
              size={14}
              style={{ color: "#228B22" }}
              className="mr-1"
            />
            <span className="text-xs">API Connected</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg p-2 shadow-sm border flex items-center justify-center"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Key
              size={14}
              style={{ color: "#228B22" }}
              className="mr-1"
            />
            <span className="text-xs">OAuth Ready</span>
          </motion.div>
        </div>

        <Tabs
          value={activeScreen}
          onValueChange={setActiveScreen}
          className="w-full"
        >
          <TabsList
            className="grid grid-cols-5 gap-1 mb-4 h-auto p-1 rounded-lg shadow-sm"
            style={{ backgroundColor: "#ADD8E6" }}
          >
            {screens.slice(0, 5).map((screen) => (
              <TabsTrigger
                key={screen.id}
                value={screen.id}
                className="text-xs p-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200 hover:bg-white/50"
                style={{
                  backgroundColor:
                    activeScreen === screen.id
                      ? "white"
                      : "transparent",
                  color:
                    activeScreen === screen.id
                      ? "#228B22"
                      : "#000000",
                }}
              >
                {screen.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-4 gap-1 mb-6">
            {screens.slice(5).map((screen) => (
              <Button
                key={screen.id}
                variant={
                  activeScreen === screen.id
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setActiveScreen(screen.id)}
                className="text-xs rounded-lg shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105"
                style={{
                  backgroundColor:
                    activeScreen === screen.id
                      ? "#228B22"
                      : "white",
                  borderColor: "#E0E0E0",
                  color:
                    activeScreen === screen.id
                      ? "white"
                      : "#000000",
                }}
              >
                {screen.label}
              </Button>
            ))}
          </div>

          {/* Mobile Frame Container with Loading State */}
          <div className="bg-gray-800 p-4 rounded-3xl shadow-2xl">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-inner relative"
              style={{ height: "680px", width: "360px" }}
            >
              {/* Loading Overlay */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Loader2
                        size={32}
                        className="animate-spin mb-2"
                        style={{ color: "#228B22" }}
                      />
                      <p className="text-sm text-gray-600">
                        Loading...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <TabsContent
                value="homepage"
                className="h-full m-0"
              >
                <HomepageWireframe
                  userFlows={userFlows}
                  userAuthenticated={userAuthenticated}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent
                value="profile"
                className="h-full m-0"
              >
                <ProfileWireframe
                  userFlows={userFlows}
                  profileCompleted={profileCompleted}
                  flowStep={flowStep}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent
                value="loyalty"
                className="h-full m-0"
              >
                <LoyaltyWireframe
                  userFlows={userFlows}
                  loyaltyPoints={loyaltyPoints}
                  notifications={notifications}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent
                value="business"
                className="h-full m-0"
              >
                <BusinessProfileWireframe
                  userFlows={userFlows}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent value="ar-vr" className="h-full m-0">
                <ARVRWireframe
                  userFlows={userFlows}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent
                value="events"
                className="h-full m-0"
              >
                <EventsWireframe
                  userFlows={userFlows}
                  flowStep={flowStep}
                  navigateToScreen={navigateToScreen}
                />
              </TabsContent>

              <TabsContent
                value="commerce"
                className="h-full m-0"
              >
                <CommerceWireframe
                  userFlows={userFlows}
                  flowStep={flowStep}
                  loyaltyPoints={loyaltyPoints}
                />
              </TabsContent>

              <TabsContent
                value="analytics"
                className="h-full m-0"
              >
                <AnalyticsWireframe flowStep={flowStep} />
              </TabsContent>

              <TabsContent
                value="notifications"
                className="h-full m-0"
              >
                <NotificationsWireframe
                  notifications={notifications}
                />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

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

// Enhanced Profile with Flow Integration
function ProfileWireframe({
  userFlows,
  profileCompleted,
  flowStep,
  navigateToScreen,
}) {
  const [showOptional, setShowOptional] = useState(false);

  return (
    <div
      className="h-full flex flex-col relative overflow-y-auto"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      {/* Header with Flow Step */}
      <div className="p-4 bg-white shadow-sm">
        <div className="text-center">
          <AppLogo />
          <h2 className="text-lg" style={{ color: "#228B22" }}>
            My Profile
          </h2>
          {flowStep === "setup" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <Badge
                style={{
                  backgroundColor: "#228B22",
                  color: "white",
                }}
              >
                Setup Flow: Step 1 of 3
              </Badge>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24">
        {/* Supabase Auth Integration Hint */}
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
              Supabase Auth: Profile data encrypted & synced
            </span>
          </div>
        </motion.div>

        {/* Profile Picture with Upload Flow */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md text-center"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div
            className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-dashed transition-all duration-200 hover:border-solid"
            style={{ borderColor: "#E0E0E0" }}
          >
            <Upload size={20} className="text-gray-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs px-3 py-1 rounded-lg border transition-all duration-200 hover:shadow-md"
            style={{ borderColor: "#228B22", color: "#228B22" }}
          >
            Upload Photo (Supabase Storage)
          </motion.button>
        </motion.div>

        {/* Required Fields with Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <h3 className="text-sm mb-3 text-black">
            Required Information
          </h3>
          <div className="space-y-3">
            {["Name", "Email", "Phone", "ZIP Code"].map(
              (field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 border rounded-lg p-3 text-xs relative"
                  style={{ borderColor: "#228B22" }}
                >
                  <label className="text-gray-700">
                    {field} *
                  </label>
                  <div className="mt-1 text-black">
                    [Input Field - Real-time Validation]
                  </div>
                  {index === 1 && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Optional Fields with Interactive Accordion */}
        <motion.div
          layout
          className="bg-white rounded-xl shadow-md overflow-hidden"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <motion.button
            whileHover={{ backgroundColor: "#f9f9f9" }}
            onClick={() => setShowOptional(!showOptional)}
            className="w-full p-3 flex justify-between items-center bg-gray-50 transition-colors duration-200"
            style={{ borderBottom: "1px solid #E0E0E0" }}
          >
            <span className="text-sm text-black">
              Optional Information
            </span>
            <motion.div
              animate={{ rotate: showOptional ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus size={16} style={{ color: "#228B22" }} />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {showOptional && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-3 space-y-2">
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    DOB: [Date Picker]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Gender: [Select Dropdown]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Marital Status: [Select]
                  </div>
                  <div
                    className="text-xs border rounded-lg p-2 bg-gray-50"
                    style={{ borderColor: "#E0E0E0" }}
                  >
                    Interests:
                    <div className="flex flex-wrap gap-1 mt-1">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-green-100 rounded text-xs cursor-pointer"
                      >
                        🍷 Wine
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-green-100 rounded text-xs cursor-pointer"
                      >
                        🥾 Trails
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Loyalty Codes with Real-time Sync */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-4 shadow-md"
          style={{ border: "1px solid #E0E0E0" }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm text-black">
              My Codes (Live Sync)
            </h3>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Copy
                  size={14}
                  className="text-gray-400 hover:text-gray-600"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <RefreshCw
                  size={14}
                  style={{ color: "#228B22" }}
                />
              </motion.button>
            </div>
          </div>
          <motion.div
            animate={{
              borderColor: ["#E0E0E0", "#228B22", "#E0E0E0"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-green-50 p-3 rounded-lg text-center shadow-sm border"
            style={{ backgroundColor: "#E8F5E8" }}
          >
            <div className="text-green-800 mb-1">
              Your Code: <strong>ABC123</strong>
            </div>
            <div className="text-xs text-gray-600">
              Expires Midnight • Auto-refresh enabled
            </div>
          </motion.div>
        </motion.div>

        {/* Flow Navigation */}
        {flowStep === "setup" && (
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(34, 139, 34, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={userFlows.completeProfile}
            className="w-full p-4 rounded-xl text-white shadow-lg flex items-center justify-center"
            style={{ backgroundColor: "#228B22" }}
          >
            <span className="text-sm mr-2">
              Complete Profile & Continue
            </span>
            <ArrowRight size={16} />
          </motion.button>
        )}

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-xl text-center text-sm text-white shadow-sm"
          style={{ backgroundColor: "#800000" }}
        >
          Logout from Adventure
        </motion.button>
      </div>

      <BottomNavigation
        activeTab="profile"
        navigateToScreen={navigateToScreen}
      />
    </div>
  );
}

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