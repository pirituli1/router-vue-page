import{h as r,r as l,o as n,c,a as e,b as d,w as m,d as u,F as i,g as b,u as p}from"./index-BqMDu4oT.js";const f=e("h1",{class:"text-2xl font-semibold mb-4"},"Register",-1),g=b('<div class="mb-4"><label for="username" class="block text-gray-600">Username</label><input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></div><div class="mb-4"><label for="password" class="block text-gray-600">Password</label><input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></div><div class="mb-4 flex items-center"><input type="checkbox" id="remember" name="remember" class="text-blue-500"><label for="remember" class="text-gray-600 ml-2">Remember Me</label></div><div class="mb-6 text-blue-500"><a href="#" class="hover:underline">Forgot Password?</a></div>',4),x={class:"mt-6 text-blue-500 text-center"},w=r({__name:"LoginPage",setup(_){const o=p();localStorage.setItem("Userid","ABC-123");const s=()=>{const t=localStorage.getItem("lastPath")??"/";o.replace(t)};return(t,h)=>{const a=l("RouterLink");return n(),c(i,null,[f,e("form",{action:"#",method:"POST"},[g,e("button",{type:"button",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full",onClick:s}," Login ")]),e("div",x,[d(a,{to:{name:"register"},class:"hover:underline"},{default:m(()=>[u("Sing up Here")]),_:1})])],64)}}});export{w as default};
