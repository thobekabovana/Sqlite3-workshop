import React from 'react';
let styles = {
  footer: {
    backgroundColor: 'violet',
    padding: '10px',
    textAlign: 'center',
    color: '#333'
  }
};
export default function Footer() {
  return (
    <div style={{marginTop:"2%"}}>
      <footer style={styles.footer}>
        <p style={{fontSize:"20px"}}>&copy; Task 7 Thobeka Bovana To Do List App. All rights reserved.</p>
      </footer>
    </div>
  );
}