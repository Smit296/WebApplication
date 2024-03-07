import React from 'react';

const SideBar = () => {
  return (
    <div style={styles.sidebar}>
      
      <ul style={styles.sidebarNav}>
        <li style={styles.sidebarNavItem}>Menu Item 1</li>
        <li style={styles.sidebarNavItem}>Menu Item 2</li>
        <li style={styles.sidebarNavItem}>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default SideBar;

const styles = {
  sidebar: {
    width: '217px', // Set the initial width of the sidebar
    height: '344px', // Make the sidebar full height
    border:'1px solid black', // Set text color to white
    // color: '#fff', // Set text color to white
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Arrange items vertically
    marginLeft:175,
    marginTop:20
  },
  
  sidebarNav: {
    listStyleType: 'none', // Remove default list styling
    padding: '0',
    margin:0,
    backgroundColor:'red'
    // flexGrow: 1, // Allow the sidebar nav to grow and occupy available space
  },
  sidebarNavItem: {
    padding: '10px',
  },
};
