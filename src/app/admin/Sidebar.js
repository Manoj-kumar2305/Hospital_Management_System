'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  PlusCircle,
  Package,
  FileText,
  Building2,
  UserMinus,
  Clock,
  UserPlus,
  UserCog,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Superadmin', href: '/superadmin' },
  { label: 'Subscription Management', href: '#', isHeader: true },
  { icon: Building2, label: 'All Hospitals', href: '/hospitals' },
  { icon: PlusCircle, label: 'Create New Hospital', href: '/hospitals/new' },
  { icon: Package, label: 'Packages', href: '/packages' },
  { icon: FileText, label: 'Add New Package', href: '/packages/new' },
  {
    icon: Clock,
    label: 'Subscription Requests',
    href: '/subscription-requests',
  },
  { label: 'Reports', href: '#', isHeader: true },
  {
    icon: Building2,
    label: 'Active Hospitals',
    href: '/reports/active-hospitals',
  },
  {
    icon: UserMinus,
    label: 'Inactive Hospitals',
    href: '/reports/inactive-hospitals',
  },
  { icon: Clock, label: 'Expired', href: '/reports/expired' },
  {
    icon: UserPlus,
    label: 'Registered Patient',
    href: '/reports/registered-patients',
  },
  {
    icon: UserCog,
    label: 'Registered Doctor',
    href: '/reports/registered-doctors',
  },
  {
    icon: FileText,
    label: 'Subscription Report',
    href: '/reports/subscription',
  },
];

export default function Sidebar({ initialMenuOpen = true }) {
  const router = useRouter();
  const pathname = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(initialMenuOpen);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
    };

    if (isClient) {
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  return (
    <>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.hamburgerMenu} onClick={toggleMenu}>
            <div className={styles.hamburgerMenuLine}></div>
            <div className={styles.hamburgerMenuLine}></div>
            <div className={styles.hamburgerMenuLine}></div>
          </div>
          <div className={styles.sidebarLogo}>H</div>
          <span className={styles.sidebarTitle}>Hospital</span>
        </div>
        <div className={styles.sidebarUser}>
          <div className={styles.sidebarUserDetails}>
            <div className={styles.sidebarUserAvatar}></div>
            <span>Super Admin</span>
          </div>
        </div>
        <nav className={styles.sidebarNav}>
          {menuItems.map((item, index) =>
            item.isHeader ? (
              <h2 key={index} className={styles.sidebarNavHeader}>
                {item.label}
              </h2>
            ) : (
              <Link key={index} href={item.href} passHref>
                <button
                  className={`${styles.sidebarNavItem} ${
                    pathname === item.href ? styles.sidebarNavItemActive : ''
                  }`}>
                  {item.icon && <item.icon className={styles.sidebarNavIcon} />}
                  {isMenuOpen && item.label}
                </button>
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
