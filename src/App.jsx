// App.jsx
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Background from './pages/components/Background.jsx';
import FooterBar from './pages/components/Footer.jsx';
import HeaderBar from './pages/components/Header.jsx';

// DIRECT PAGE IMPORTS
import AboutPage from './pages/About.jsx';
import ChatPage from './pages/Chat.jsx';
import DeleteAccount from './pages/DeleteAccount.jsx';
import HomePage from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import TermsConditions from './pages/TermsConditions.jsx';

// (GA4 removed)

// Layout Component
const Layout = () => (
  <Background>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <HeaderBar />
      <main style={{ flex: 1, width: '100%' }}>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  </Background>
);

// Main App with simplified routing
const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Home route is outside Layout */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* All other routes use Layout */}
        <Route element={<Layout />}>
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
