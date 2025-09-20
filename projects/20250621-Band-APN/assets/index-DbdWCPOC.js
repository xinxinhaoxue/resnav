(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();a("cmcc");a("ctc");a("cucc");a("cbn");s();function a(o){const c=document.getElementById(`${o}`);let n="";switch(o){case"cmcc":n="中国移动";break;case"ctc":n="中国电信";break;case"cucc":n="中国联通";break;case"cbn":n="中国广电";break}c.innerHTML=`<caption>${n}</caption>
                    <tr>
                      <th>频段</th>
                      <th>拥有运营商</th>
                      <th>带宽</th>
                      <th>网络制式</th>
                      <th>备注</th>
                    </tr>`,fetch("datas.json").then(e=>e.json()).then(e=>{let t=[];switch(o){case"cmcc":t=e.cmccData;break;case"ctc":t=e.ctcData;break;case"cucc":t=e.cuccData;break;case"cbn":t=e.cbnData;break}c.innerHTML+=t.map(r=>`<tr>
              <td>${r.band}</td>
              <td>${r.operator}</td>
              <td>${r.bandwidth}</td>
              <td>${r.network}</td>
              <td>${r.range}</td>
            </tr>`).join("")})}function s(){const o=document.getElementById("apn");o.innerHTML=`<caption>四大运营商APN配置信息</caption>
                        <tr>
                          <th>运营商</th>
                          <th>PDP类型</th>
                          <th>配置文件名称</th>
                          <th>APN</th>
                          <th>鉴权方式</th>
                          <th>用户名</th>
                          <th>密码</th>
                          <th>备注</th>
                        </tr>`,fetch("datas.json").then(c=>c.json()).then(c=>{let n=c.apnData;o.innerHTML+=n.map(e=>`<tr>
              <td>${e.operator}</td>
              <td>${e.type}</td>
              <td>${e.name}</td>
              <td>${e.apn}</td>
              <td>${e.way}</td>
              <td>${e.uname}</td>
              <td>${e.password}</td>
              <td>${e.notes}</td>
            </tr>`).join("")})}
