import React, { useEffect, useState } from "react";
import { Users, CheckCircle, XCircle, Loader2, Server } from "lucide-react";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setStatus("Connected successfully");
        setIsLoading(false);
      })
      .catch(() => {
        setStatus("Failed to connect");
        setIsLoading(false);
      });
  }, []);

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 size={20} style={{ animation: 'spin 1s linear infinite', color: '#60a5fa' }} />;
    if (status.includes("successfully")) return <CheckCircle size={20} style={{ color: '#34d399' }} />;
    return <XCircle size={20} style={{ color: '#f87171' }} />;
  };

  const getStatusColor = () => {
    if (isLoading) return "#60a5fa";
    if (status.includes("successfully")) return "#34d399";
    return "#f87171";
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '48px 24px',
      position: 'relative'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      opacity: 0.2
    },
    content: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '48px'
    },
    iconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      borderRadius: '16px',
      marginBottom: '24px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '16px',
      margin: '0 0 16px 0'
    },
    subtitle: {
      color: '#9ca3af',
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    statusCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '24px',
      marginBottom: '32px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
    },
    statusContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    },
    statusText: {
      fontSize: '18px',
      fontWeight: '500'
    },
    usersCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '32px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
    },
    usersHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '32px'
    },
    usersIconContainer: {
      padding: '8px',
      background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
      borderRadius: '12px'
    },
    usersTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    userCount: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      borderRadius: '50%',
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'white'
    },
    usersGrid: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    userCard: {
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    userCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    userContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    userName: {
      color: 'white',
      fontWeight: '600',
      fontSize: '18px',
      margin: '0 0 4px 0'
    },
    userIndex: {
      color: '#9ca3af',
      fontSize: '14px',
      margin: 0
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0'
    },
    emptyIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      opacity: 0.5
    },
    emptyTitle: {
      color: '#9ca3af',
      fontSize: '18px',
      margin: '0 0 8px 0'
    },
    emptySubtitle: {
      color: '#6b7280',
      fontSize: '14px',
      margin: 0
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <Server size={32} color="white" />
          </div>
          <h1 style={styles.title}>
            Full Stack Dashboard
          </h1>
          <p style={styles.subtitle}>
            Modern Dockerized application with seamless backend integration
          </p>
        </div>

        {/* Status Card */}
        <div style={styles.statusCard}>
          <div style={styles.statusContent}>
            {getStatusIcon()}
            <span style={{...styles.statusText, color: getStatusColor()}}>
              {status}
            </span>
          </div>
        </div>

        {/* Users Section */}
        <div style={styles.usersCard}>
          <div style={styles.usersHeader}>
            <div style={styles.usersIconContainer}>
              <Users size={24} color="white" />
            </div>
            <h2 style={styles.usersTitle}>
              Connected Users
              <span style={styles.userCount}>
                {users.length}
              </span>
            </h2>
          </div>

          {users.length > 0 ? (
            <div style={styles.usersGrid}>
              {users.map((user, index) => (
                <UserCard 
                  key={index}
                  user={user}
                  index={index}
                  styles={styles}
                />
              ))}
            </div>
          ) : (
            !isLoading && (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>
                  <Users size={40} color="white" />
                </div>
                <p style={styles.emptyTitle}>No users found</p>
                <p style={styles.emptySubtitle}>Check your backend connection</p>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .user-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

// Separate component for user cards to handle hover states
function UserCard({ user, index, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="user-card"
      style={{
        ...styles.userCard,
        ...(isHovered ? styles.userCardHover : {}),
        animationDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.userContent}>
        <div style={styles.userAvatar}>
          {user.name?.charAt(0)?.toUpperCase() || '?'}
        </div>
        <div>
          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userIndex}>User #{index + 1}</p>
        </div>
      </div>
    </div>
  );
}

export default App;