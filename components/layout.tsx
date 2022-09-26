import React from 'react'
import { MetaProps } from '../types/layout';
import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://jaytoy.com';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />

        <main>
          <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout