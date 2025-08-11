import React from 'react';

// prop children: Represent these funciton Comp in Layout
function MainLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;
