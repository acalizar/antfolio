---
templateKey: project-page
title: LMK (Electron.js App)
date: 2018-11-11T15:04:10.000Z
description: Combine your web-based applications into a single native app
thumbnail: './uploads/lmk-featured.jpg'
tags:
  - design
  - develop
---
<p style='text-align: center'>
<img src='https://acalizar.com/wp-content/uploads/2018/09/LMK-overview-1.gif' alt='LMK Overview' style='max-width: 650px; width: 100%; margin: 0 auto; border: 3px solid #dddddd;' />
</p>

 I started this project out of personal necessity. I got to a point where I either had several tabs open for each web-based chat application or I had created a bunch of chrome desktop apps and they were all open in my task bar. I really just needed a consolidated application that housed all of these web-based applications (Facebook Messenger, WhatsApp, Teams, Zoom, Android for Web, etc) that were outside of my main browser. With this application, I can now have my main browser open, and all of my chat and music applications in a separate, dedicated window.

<hr/>

<h2 style="text-align:center">Too Many Browsers, Too Many Tabs, Too Many Windows</h2>

![LMK Concept](/uploads/lmk-challenge.jpg)
On a daily basis, I use about 4 to 5 different chat apps a day. I love how these mobile apps adopted web-based versions, however, they started to get lost in my tabs. I started explore my options:
1. Create Chrome taskbar apps – this solved my problem of keeping these apps outside of my main browser, but I started to have too many of them on my taskbar
2. Dedicate a different browser for my chat apps – this worked fine until I have to do things such as cross-browser testing or if I forget that I’m using that browser specifically for chat
3. Download an app that groups chat apps – I did find a couple good ones, however, they were pre-integrated with certain websites so they would be missing Android for Web, for example

<div class="bg-grey">

<h2 style="text-align:center">The Concept is Simple</h2>

![LMK Concept](/uploads/lmk-idea.jpg)
<br/>

After learning about Electron.js, and how I could create a native application using HTML, CSS, and JavaScript, I quickly jumped all over it. Sure enough, Electron.js would solve my problem. I would simply create an app that would run multiple webviews and add all of my chat applications to it.
</div>

<h2 style="text-align:center">Development</h2>
<div class="columns">
<div class="column is-6">

![LMK Concept](/uploads/lmk-wireframe.jpg)
</div>
<div class="column is-6">

![LMK Concept](/uploads/lmk-app.jpg)
</div>
</div>
Since this was just a proof of concept, I was heavily focused on functionality. Being new to Electron.js, I did hit a few roadblocks:

* Favicons / Logos – I didn’t want to upload a new logo every time I added a new site and most of the default favicons were very low res
* Persistence – Preventing the app from logging out of all the sites every time I closed it
* Notifications – Do I trigger on title change, media play, favicon change?

<hr/>

<div class="columns">
  <div class="column is-4">
    <p style='text-align: center'>
      <img src='https://acalizar.com/wp-content/uploads/2018/09/LMK-add.gif' alt='LMK Add' style='width: 100%; margin: 0 auto; border: 3px solid #ededed' />
     </p>
  </div>
  <div class="column is-8">
  <h5>URL Validation and Favicons</h5>
  <p>
  Unlike other applications that have pre-determined integrations with various sites, I wanted to have the flexibility to add any website without any site-specific integrations. I was able to achieve this by fetching all of the URL’s available favicons and adding some preliminary URL validation.
<br/>
<br/>
  Most sites have multiple favicons to choose from, so this was a great addition to my app.</p>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <p style='text-align: center'>
      <img src='https://acalizar.com/wp-content/uploads/2018/09/LMK-notification.gif' alt='LMK Notification' style='width: 40%; margin: 0 auto; border: 3px solid #ededed' />
      <img src='https://acalizar.com/wp-content/uploads/2018/09/LMK-music.gif' alt='LMK Music' style='width: 40%; margin: 0 auto; border: 3px solid #ededed' />
    </p>
  </div>
<div class="column is-8">
  <h5>Notifications and Music Playing</h5>
There are a few ways to trigger notifications, so this took me a while to figure out what worked for me. Since I was also adding my music apps into this, I wanted a way to show that music was playing on a particular tab at any given time, similar to how most browsers show a volume icon.
  </div>
</div>

<div class="bg-grey">
<h2 style="text-align:center">Success!</h2>

  ![LMK Final](/uploads/lmk-final.png)
  
Overall, my proof of concept was a success and I use it everyday. I’m able to add any website I want, not have to upload any logos, and keep my main browsers notification-free. The next phase is to refactor the code and publish it for other people to enjoy.
</div>