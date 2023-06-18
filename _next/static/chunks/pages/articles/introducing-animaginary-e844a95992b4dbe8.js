(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{4335:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/introducing-animaginary",function(){return a(9825)}])},126:function(n,e,a){"use strict";a.d(e,{B:function(){return h}});var s=a(1799),t=a(9396),c=a(5893),i=a(9008),o=a.n(i),l=a(1163),r=a(956),p=a(5933),u=a(6010);function d(n){var e=n.children,a=n.className;return(0,c.jsx)("div",{className:(0,u.Z)(a,"prose dark:prose-invert"),children:e})}function m(n){return(0,c.jsx)("svg",(0,t.Z)((0,s.Z)({viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},n),{children:(0,c.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}function h(n){var e=n.children,a=n.meta,s=n.isRssFeed,t=n.previousPathname,i=(0,l.useRouter)();return void 0!==s&&s?e:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o(),{children:[(0,c.jsx)("title",{children:"".concat(a.title," - Spencer Sharp")}),(0,c.jsx)("meta",{name:"description",content:a.description})]}),(0,c.jsx)(r.W,{className:"mt-16 lg:mt-32",children:(0,c.jsx)("div",{className:"xl:relative",children:(0,c.jsxs)("div",{className:"mx-auto max-w-2xl",children:[t&&(0,c.jsx)("button",{type:"button",onClick:function(){return i.back()},"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",children:(0,c.jsx)(m,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,c.jsxs)("article",{children:[(0,c.jsxs)("header",{className:"flex flex-col",children:[(0,c.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",children:a.title}),(0,c.jsxs)("time",{dateTime:a.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,c.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,c.jsx)("span",{className:"ml-3",children:(0,p.p)(a.date)})]})]}),(0,c.jsx)(d,{className:"mt-8",children:e})]})]})})})]})}},5933:function(n,e,a){"use strict";function s(n){return new Date("".concat(n,"T00:00:00Z")).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}a.d(e,{p:function(){return s}})},9825:function(n,e,a){"use strict";a.r(e),a.d(e,{meta:function(){return c}});var s=a(5893),t=a(126),c={author:"Kerich Kimtai",date:"2022-09-02",title:"Multi-tenancy in  Spring Boot",description:"Multi Tenancy is a software  architecture where a single software instance can serve  multiple, disting group of users.  Each user or group of users is called tenant."},i=function(n){return(0,s.jsx)(t.B,Object.assign({meta:c},n))};function o(n){var e=Object.assign({p:"p",pre:"pre",code:"code",span:"span"},n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Introduction:\nMultitenancy is a powerful architectural concept that allows a single instance of an application to serve multiple clients, known as tenants, while keeping their data and configurations isolated from each other. In this article, we will explore how to implement multitenancy in a Spring Boot application. We will discuss different approaches and provide a sample code snippet to demonstrate the implementation."}),"\n",(0,s.jsx)(e.p,{children:"Understanding Multitenancy:\nMultitenancy can be achieved through various strategies, such as separate databases, shared database with schema separation, or shared database with data segregation. In this example, we will focus on the approach of using a shared database with schema separation, where each tenant has its own dedicated database schema."}),"\n",(0,s.jsx)(e.p,{children:"Sample Code Snippet:"}),"\n",(0,s.jsx)(e.pre,{className:"language-java",children:(0,s.jsxs)(e.code,{className:"language-java",children:[(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Configuration"}),"\n",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"class"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultitenancyConfig"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    \n    ",(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Bean"}),"\n    ",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"DataSource"})," ",(0,s.jsx)(e.span,{className:"token function",children:"multitenantDataSource"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultitenantDataSource"})," dataSource ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultitenantDataSource"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token comment",children:"// Configure your data source properties here"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token keyword",children:"return"})," dataSource",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    \n    ",(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Bean"}),"\n    ",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultiTenantConnectionProvider"})," ",(0,s.jsx)(e.span,{className:"token function",children:"multiTenantConnectionProvider"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,s.jsx)(e.span,{className:"token comment",children:"// Implement your own MultiTenantConnectionProvider"}),"\n        ",(0,s.jsx)(e.span,{className:"token comment",children:"// that provides tenant-specific database connections"}),"\n        ",(0,s.jsx)(e.span,{className:"token keyword",children:"return"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"YourMultiTenantConnectionProvider"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    \n    ",(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Bean"}),"\n    ",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"CurrentTenantIdentifierResolver"})," ",(0,s.jsx)(e.span,{className:"token function",children:"currentTenantIdentifierResolver"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,s.jsx)(e.span,{className:"token comment",children:"// Implement your own CurrentTenantIdentifierResolver"}),"\n        ",(0,s.jsx)(e.span,{className:"token comment",children:"// that resolves the current tenant identifier"}),"\n        ",(0,s.jsx)(e.span,{className:"token keyword",children:"return"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"YourCurrentTenantIdentifierResolver"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    \n    ",(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Bean"}),"\n    ",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"LocalContainerEntityManagerFactoryBean"})," ",(0,s.jsx)(e.span,{className:"token function",children:"entityManagerFactory"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"\n            ",(0,s.jsx)(e.span,{className:"token class-name",children:"DataSource"})," dataSource",(0,s.jsx)(e.span,{className:"token punctuation",children:","}),"\n            ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultiTenantConnectionProvider"})," multiTenantConnectionProvider",(0,s.jsx)(e.span,{className:"token punctuation",children:","}),"\n            ",(0,s.jsx)(e.span,{className:"token class-name",children:"CurrentTenantIdentifierResolver"})," currentTenantIdentifierResolver",(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token class-name",children:"LocalContainerEntityManagerFactoryBean"})," emf ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"LocalContainerEntityManagerFactoryBean"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        emf",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"setDataSource"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"dataSource",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        emf",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"setPackagesToScan"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token string",children:'"com.your.package"'}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token class-name",children:"HibernateJpaVendorAdapter"})," vendorAdapter ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"HibernateJpaVendorAdapter"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        emf",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"setJpaVendorAdapter"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"vendorAdapter",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token class-name",children:"Map"}),(0,s.jsxs)(e.span,{className:"token generics",children:[(0,s.jsx)(e.span,{className:"token punctuation",children:"<"}),(0,s.jsx)(e.span,{className:"token class-name",children:"String"}),(0,s.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"Object"}),(0,s.jsx)(e.span,{className:"token punctuation",children:">"})]})," properties ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"HashMap"}),(0,s.jsxs)(e.span,{className:"token generics",children:[(0,s.jsx)(e.span,{className:"token punctuation",children:"<"}),(0,s.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        properties",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"put"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsxs)(e.span,{className:"token class-name",children:[(0,s.jsxs)(e.span,{className:"token namespace",children:["org",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"hibernate",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"cfg",(0,s.jsx)(e.span,{className:"token punctuation",children:"."})]}),"Environment"]}),(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"MULTI_TENANT",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"MultiTenancyStrategy"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"SCHEMA",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        properties",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"put"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsxs)(e.span,{className:"token class-name",children:[(0,s.jsxs)(e.span,{className:"token namespace",children:["org",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"hibernate",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"cfg",(0,s.jsx)(e.span,{className:"token punctuation",children:"."})]}),"Environment"]}),(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"MULTI_TENANT_CONNECTION_PROVIDER",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," multiTenantConnectionProvider",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        properties",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"put"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsxs)(e.span,{className:"token class-name",children:[(0,s.jsxs)(e.span,{className:"token namespace",children:["org",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"hibernate",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"cfg",(0,s.jsx)(e.span,{className:"token punctuation",children:"."})]}),"Environment"]}),(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"MULTI_TENANT_IDENTIFIER_RESOLVER",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," currentTenantIdentifierResolver",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        \n        emf",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token function",children:"setJpaPropertyMap"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"properties",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n        \n        ",(0,s.jsx)(e.span,{className:"token keyword",children:"return"})," emf",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    \n    ",(0,s.jsx)(e.span,{className:"token annotation punctuation",children:"@Bean"}),"\n    ",(0,s.jsx)(e.span,{className:"token keyword",children:"public"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"JpaTransactionManager"})," ",(0,s.jsx)(e.span,{className:"token function",children:"transactionManager"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token class-name",children:"EntityManagerFactory"})," emf",(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,s.jsx)(e.span,{className:"token keyword",children:"return"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,s.jsx)(e.span,{className:"token class-name",children:"JpaTransactionManager"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"emf",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n\n"]})}),"\n",(0,s.jsx)(e.p,{children:"Conclusion:\nImplementing multitenancy in a Spring Boot application enables you to efficiently serve multiple clients while maintaining data isolation. In this article, we explored the approach of using a shared database with schema separation and provided a sample code snippet demonstrating the configuration required. Feel free to experiment with this code and adapt it to your specific requirements."})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,Object.assign({},n,{children:(0,s.jsx)(o,n)}))}},9008:function(n,e,a){n.exports=a(5443)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4335)}),_N_E=n.O()}]);