(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))C(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&C(v)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function C(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const M="/Hollywood/assets/tablet1-DI05afER.png",Z="/Hollywood/assets/tablet2-CXzRwgtG.png",z="/Hollywood/assets/tablet3-DiySJtBG.png",K="/Hollywood/assets/tablet4-DWBl950X.png",U="/Hollywood/assets/tablet5-DjLgCoPv.png",Y="/Hollywood/assets/tablet6-ZwDvm-dJ.png",F="/Hollywood/assets/tablet7-CEfqwQNK.png",Q="/Hollywood/assets/tablet8-Bs_pjPs1.png",V="/Hollywood/assets/1-DZBJqfX4.png",ee="/Hollywood/assets/2-Cx6Xx__a.png",te="/Hollywood/assets/3-YBqgLRVq.png",o={tabletImgExpert:document.querySelector("#tabletImgExpert"),tabletTitleTextExpert:document.querySelector("#tabletTitleTextExpert"),tabletInfoTextExpert:document.querySelector("#tabletInfoTextExpert")},P=[M,Z,z,K,U,Y,F,Q],B=["Твердохліб Андрій Валерійович","Киселиця Владислав Юрійович","Звягіна Майя Юріївна","Бесчастний Олександр Олександрович","Попеско Анастасія Ігорівна","Пашков Валентин Валерійович","Коваль Тетяна Валеріївна","Олексюк Аліна"],D=["Власник клінік, Терапевтичний прийом,Хірургічний прийом,Ортопедичний прийом.","Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Професійний догляд та профілактика.","Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Терапевтичний прийом, Дитячий прийом, Професійний догляд та профілактика","Ортодонтичний прийом","Асистент стоматолога","Адміністратор"];let c=0,x=0,p=0;setInterval(()=>{o.tabletImgExpert.classList.add("hidden"),o.tabletTitleTextExpert.classList.add("hidden"),o.tabletInfoTextExpert.classList.add("hidden"),setTimeout(()=>{c!=P.length-1&&x!=B.length-1&&p!=D.length-1?(c+=1,x+=1,p+=1):(c=0,x=0,p=0),o.tabletImgExpert.src=P[c],o.tabletTitleTextExpert.textContent=`${B[x]}`,o.tabletInfoTextExpert.textContent=`${D[p]}`,o.tabletImgExpert.classList.remove("hidden"),o.tabletTitleTextExpert.classList.remove("hidden"),o.tabletInfoTextExpert.classList.remove("hidden")},1e3)},3e3);const q=document.querySelector("#tabletImg"),_=[V,ee,te];let m=0;setInterval(()=>{q.classList.add("hidden"),setTimeout(()=>{m!=_.length-1?m+=1:m=0,q.src=_[m],q.classList.remove("hidden")},1e3)},3e3);const se="/Hollywood/assets/phone1-DWgwCCX7.png",oe="/Hollywood/assets/phone2-D8xSL_mW.png",ne="/Hollywood/assets/phone3-CqxzDHAt.png",le="/Hollywood/assets/phone4-BcqQjl0l.png",re="/Hollywood/assets/phone5-6cMgynB2.png",ie="/Hollywood/assets/phone6-CFPZ8U7z.png",de="/Hollywood/assets/phone7-Ces3hoag.png",ae="/Hollywood/assets/phone8-DemyoGbR.png",ce="/Hollywood/assets/1-BGEPoH8x.png",xe="/Hollywood/assets/2-C3-jKeRH.png",pe="/Hollywood/assets/3-DJw4uPYU.png",n={imgPhone:document.querySelector("#imgPhone"),phoneText1:document.querySelector("#phoneText1"),phoneText2:document.querySelector("#phoneText2")},$=[se,oe,ne,le,re,ie,de,ae],R=["Твердохліб Андрій Валерійович","Киселиця Владислав Юрійович","Звягіна Майя Юріївна","Бесчастний Олександр Олександрович","Пашков Валентин Валерійович","Коваль Тетяна Валеріївна","Попеско Анастасія Ігорівна","Олексюк Аліна"],N=["Власник клінік, Терапевтичний прийом,Хірургічний прийом,Ортопедичний прийом.","Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Професійний догляд та профілактика.","Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Ортодонтичний прийом","Асистент стоматолога","Терапевтичний прийом, Дитячий прийом, Професійний догляд та профілактика","Адміністратор"];let g=0,h=0,y=0;setInterval(()=>{n.imgPhone.classList.add("hidden"),n.phoneText1.classList.add("hidden"),n.phoneText2.classList.add("hidden"),setTimeout(()=>{g!=$.length-1&&h!=R.length-1&&y!=N.length-1?(g+=1,h+=1,y+=1):(g=0,h=0,y=0),n.imgPhone.src=$[g],n.phoneText1.textContent=`${R[h]}`,n.phoneText2.textContent=`${N[y]}`,n.imgPhone.classList.remove("hidden"),n.phoneText1.classList.remove("hidden"),n.phoneText2.classList.remove("hidden")},1e3)},3e3);const S=document.querySelector("#phoneImg"),O=[ce,xe,pe];let T=0;setInterval(()=>{S.classList.add("hidden"),setTimeout(()=>{T!=O.length-1?T+=1:T=0,S.src=O[T],S.classList.remove("hidden")},1e3)},3e3);let u=1;const G=()=>{const d=document.getElementsByClassName("phoneMain_block4_bl_forslider3_block");Array.from(d).forEach(a=>{a.classList.add("hidden"),a.style.display="none"}),u++,u>d.length&&(u=1);const i=d[u-1];i.style.display="block",setTimeout(()=>{i.classList.remove("hidden")},50),setTimeout(G,3e3)};G();const me="/Hollywood/assets/1-DZBJqfX4.png",ge="/Hollywood/assets/2-Cx6Xx__a.png",he="/Hollywood/assets/3-YBqgLRVq.png",ye="/Hollywood/assets/1-D_JaLylS.png",Te="/Hollywood/assets/3-ailTS-y6.png",ue="/Hollywood/assets/5-CEO_rrOu.png",Ee="/Hollywood/assets/7-Cj0jnLj8.png",fe="/Hollywood/assets/2-wl-mi6HH.png",be="/Hollywood/assets/4-B5vLlLUe.png",Ie="/Hollywood/assets/6-Dcbu35g8.png",Le="/Hollywood/assets/8-DBiLcMCA.png",H=[me,ge,he],l={btnReturn:document.querySelector("#btnReturn"),btnNext:document.querySelector("#btnNext"),img:document.querySelector("#img")};let r=0;l.btnReturn.addEventListener("click",()=>{l.img.classList.add("hidden"),setTimeout(()=>{r!==0?r-=1:r=H.length-1,l.img.src=H[r],l.img.classList.remove("hidden")},500)});l.btnNext.addEventListener("click",()=>{l.img.classList.add("hidden"),setTimeout(()=>{r!==H.length-1?r+=1:r=0,l.img.src=H[r],l.img.classList.remove("hidden")},500)});const j=[ye,Te,ue,Ee],X=[fe,be,Ie,Le],e={imgExpert1:document.querySelector("#imgExpert1"),titleTextExpert1:document.querySelector("#titleTextExpert1"),infoTextExpert1:document.querySelector("#infoTextExpert1"),imgExpert2:document.querySelector("#imgExpert2"),titleTextExpert2:document.querySelector("#titleTextExpert2"),infoTextExpert2:document.querySelector("#infoTextExpert2")},J=["Твердохліб Андрій Валерійович","Звягіна Майя Юріївна","Бесчастний Олександр Олександрович","Олексюк Аліна"],W=["Киселиця Владислав Юріївич","Коваль Тетяна Валеріївна","Попеско Анастасія Ігорівна","Пашков Валентин Валерійович"],k=["Власник клінік, Терапевтичний прийом,Хірургічний прийом,Ортопедичний прийом.","Професійний догляд та профілактика.","Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Адміністратор"],A=["Терапевтичний прийом, Хірургічний прийом, Ортопедичний прийом","Асистент стоматолога","Терапевтичний прийом, Дитячий прийом, Професійний догляд та профілактика","Ортодонтичний прийом"];let E=0,f=0,b=0,I=0,L=0,w=0;setInterval(()=>{e.imgExpert1.classList.add("hidden"),e.imgExpert2.classList.add("hidden"),e.titleTextExpert1.classList.add("hidden"),e.titleTextExpert2.classList.add("hidden"),e.infoTextExpert1.classList.add("hidden"),e.infoTextExpert2.classList.add("hidden"),setTimeout(()=>{E!==j.length-1&&f!==X.length-1&&b!==J.length-1&&I!==W.length-1&&L!==k.length-1&&w!==A.length-1?(E+=1,f+=1,b+=1,I+=1,L+=1,w+=1):(E=0,f=0,b=0,I=0,L=0,w=0),e.imgExpert1.src=j[E],e.imgExpert2.src=X[f],e.titleTextExpert1.textContent=J[b],e.titleTextExpert2.textContent=W[I],e.infoTextExpert1.textContent=k[L],e.infoTextExpert2.textContent=A[w],e.imgExpert1.classList.remove("hidden"),e.imgExpert2.classList.remove("hidden"),e.titleTextExpert1.classList.remove("hidden"),e.titleTextExpert2.classList.remove("hidden"),e.infoTextExpert1.classList.remove("hidden"),e.infoTextExpert2.classList.remove("hidden")},1e3)},3e3);