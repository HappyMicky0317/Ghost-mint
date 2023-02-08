import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import routes from 'src/constants/routes';
import Splash from 'src/components/Splash';
import AuthGuard from 'src/components/Auth.guard';
import GuestGuard from 'src/components/Guest.guard';

import PageFactory from "./pages/PageFactory";
import DashboardLayout from "./pages/Dashboard.layout";

const routesConfig = [
  // {
  //   exact: true,
  //   path: '/',
  //   layout: PageFactory,
  //   component: lazy( ()=> import('./pages/Landing'))
  // },
  {
    exact: true,
    path: '/',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/MerchantServices"))
  },
  // {
  //   exact: true,
  //   path: '/merchant',
  //   layout: PageFactory,
  //   component: lazy(() => import("./pages/Services/MerchantServices"))
  // },
  // {
  //   exact: true,
  //   path:'/payment-processing',
  //   layout: PageFactory,
  //   component: lazy(() => import("./pages/Services/PaymentProcessing/PaymentProcessing"))
  // },
  {
    exact: true,
    path:'/a',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/PaymentProcessing"))
  },
  {
    exact: true,
    path: '/creditcard-machines',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/CreditCardMachines"))
  },
  {
    exact: true,
    path: '/point-salesystem',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/SaleSystem/SaleSystem"))
  },
  {
    exact: true,
    path: '/gift-loyalty',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/GiftCards"))
  },
  {
    exact: true,
    path: '/merchant-cash',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/MerchantCash/MerchantCash"))
  },
  // {
  //   exact: true,
  //   path: '/programs',
  //   layout: PageFactory,
  //   component: lazy(() => import("./pages/Services/Programs/"))
  // },
  {
    exact: true,
    path: '/iso-agent',
    layout: PageFactory,
    component: lazy(() => import("./pages/Partners/ISOAgent"))
  },
  // {
  //   exact: true,
  //   path: '/referral-affiliate',
  //   layout: PageFactory,
  //   component: lazy(() => import("./pages/Partners/ReferralAffiliate"))
  // },
  {
    exact: true,
    path: '/brand-permission',
    layout: PageFactory,
    component: lazy(() => import("./pages/Partners/UsagePermissions"))
  },
  {
    exact: true,
    path: '/about',
    layout: PageFactory,
    component: lazy(() => import("./pages/More/About"))
  },
  {
    exact: true,
    path: '/contact',
    layout: PageFactory,
    component: lazy(() => import("./pages/More/ContactUs"))
  },
  {
    exact: true,
    path: '/pricing',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/Pricing"))
  },
  {
    exact: true,
    path: '/next-day',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/FundingTimes"))
  },
  {
    exact: true,
    path: '/ecommerce-processing',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/EcommerceProcessing"))
  },
  {
    exact: true,
    path: '/mobile-payment',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/MobilePaymentProcessing"))
  },
  {
    exact: true,
    path: '/virtual-terminal',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/VirtualTerminals"))
  },
  {
    exact: true,
    path: '/free-payment',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/PaymentProcessing/FreePaymentProcessing"))
  },
  {
    exact: true,
    path: '/clover',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/SaleSystem/CloverPOS"))
  },
  {
    exact: true,
    path: '/vital',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/SaleSystem/VitalPOS"))
  },
  {
    exact: true,
    path: '/bonsai',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/SaleSystem/BonsaiPoint"))
  },
  {
    exact: true,
    path: '/applyfor-cash',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/MerchantCash/ApplyMerchantCash"))
  },
  {
    exact: true,
    path: '/clover',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/SaleSystem/CloverPOS"))
  },
  {
    exact: true,
    path: '/ebt-service',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/Programs/SNAP"))
  },
  {
    exact: true,
    path: '/no-cost',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/Programs/NoCostAccount"))
  },
  {
    exact: true,
    path: '/small-ticket',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/Programs/SmallTicket"))
  },
  {
    exact: true,
    path: '/data-breach',
    layout: PageFactory,
    component: lazy(() => import("./pages/Services/Programs/BrenchProtection"))
  },
  {
    exact: true,
    path: '/referral-overview',
    layout: PageFactory,
    component: lazy(() => import("./pages/Partners/ReferralAffiliate/ProgramOverview"))
  },
  {
    exact: true,
    path: '/referral-faq',
    layout: PageFactory,
    component: lazy(() => import("./pages/Partners/ReferralAffiliate/ProgramFAQ"))
  }
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/login',
  //   component: lazy(() => import('src/pages/Login'))
  // },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/register',
  //   component: lazy(() => import('src/pages/Register'))
  // },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/verify',
  //   component: lazy(() => import('src/pages/VerifyPage'))
  // },
  // {
  //   path: '/app',
  //   guard: AuthGuard,
  //   layout: DashboardLayout,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/app',
  //       component: () => <Redirect to="/app/home" />
  //     },
  //
  //     {
  //       exact: true,
  //       path: '/app/portfolio',
  //       component: lazy(() => import('src/pages/Portfolio'))
  //     },
  //     {
  //       exact: true,
  //       path: '/app/history',
  //       component: lazy(() => import('src/pages/History'))
  //     },
  //     {
  //       exact: true,
  //       path: '/app/prices',
  //       component: lazy(() => import('src/pages/Prices'))
  //     },
  //     {
  //       exact: true,
  //       path: '/app/notifications',
  //       component: lazy(() => import('src/pages/Notifications'))
  //     },
  //     {
  //       exact: true,
  //       path: '/app/account',
  //       component: lazy(() => import('src/pages/Profile'))
  //     },
  //     {
  //       exact: true,
  //       path: '/app/change-password',
  //       component: lazy(() => import('src/pages/ChangePassword'))
  //     },
  //   ]
  // },
]

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<Splash />}>
    <Switch>
      {
        routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {
                      route.routes
                        ? renderRoutes(route.routes)
                        : <Component {...props} />
                    }
                  </Layout>
                </Guard>
              )}
            />
          )
        })
      }
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;