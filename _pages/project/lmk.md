---
featuredImage: "/projects/lmk/lmk-featured.png"
title: "LMK (an Electron.js app)"
subhead: "Combine your web-based applications into a single app"
date: "2018-11-11"
---


![LMK Concept](/projects/lmk/lmk-featured.png)

 I started this project out of personal necessity. I got to a point where I either had several tabs open for each web-based chat application or I had created a bunch of chrome desktop apps and they were all open in my task bar. I really just needed a consolidated application that housed all of these web-based applications (Facebook Messenger, WhatsApp, Teams, Zoom, Android for Web, etc) that were outside of my main browser. With this application, I can now have my main browser open, and all of my chat and music applications in a separate, dedicated window.


## Too Many Browsers, Too Many Tabs, Too Many Windows

![LMK Concept](/projects/lmk/lmk-challenge.jpg)

On a daily basis, I use about 4 to 5 different chat apps a day. I love how these mobile apps adopted web-based versions, however, they started to get lost in my tabs. I started explore my options:
1. Create Chrome taskbar apps – this solved my problem of keeping these apps outside of my main browser, but I started to have too many of them on my taskbar
2. Dedicate a different browser for my chat apps – this worked fine until I have to do things such as cross-browser testing or if I forget that I’m using that browser specifically for chat
3. Download an app that groups chat apps – I did find a couple good ones, however, they were pre-integrated with certain websites so they would be missing Android for Web, for example

<div class="bg bg-gray">

## The Concept is Simple

![LMK Concept](/projects/lmk/lmk-idea.jpg)
<br/>

After learning about Electron.js, and how I could create a native application using HTML, CSS, and JavaScript, I quickly jumped all over it. Sure enough, Electron.js would solve my problem. I would simply create an app that would run multiple webviews and add all of my chat applications to it.
</div>

## Development
<div class="grid">
<div class="col col-6">

![LMK Concept](/projects/lmk/lmk-wireframe.jpg)
</div>
<div class="col col-6">

![LMK Concept](/projects/lmk/lmk-app.jpg)
</div>
</div>

Since this was just a proof of concept, I was heavily focused on functionality. Being new to Electron.js, I did hit a few roadblocks:

* Favicons / Logos – I didn’t want to upload a new logo every time I added a new site and most of the default favicons were very low res
* Persistence – Preventing the app from logging out of all the sites every time I closed it
* Notifications – Do I trigger on title change, media play, favicon change?

<div class="grid">
<div class="col col-4">
<div style='text-align:center'>

<img src='/projects/lmk/lmk-add.gif' alt='LMK Notification' style='width: 100%; border: 1px solid #ededed; margin-top: 1em;' />

</div>
</div>
<div class="col col-8">

**URL Validation and Favicons**

Unlike other applications that have pre-determined integrations with various sites, I wanted to have the flexibility to add any website without any site-specific integrations. I was able to achieve this by fetching all of the URL’s available favicons and adding some preliminary URL validation.

Most sites have multiple favicons to choose from, so this was a great addition to my app.</p>
</div>
</div>

<div class="grid">
<div class="col col-4">
<div style='text-align:center'>


<img src='/projects/lmk/lmk-notification.gif' alt='LMK Notification' style='width: 40%; margin: 0 auto; border: 1px solid #ededed; margin-top: 1em;' />

<img src='/projects/lmk/lmk-music.gif' alt='LMK Music' style='width: 40%; margin: 0 auto; border: 1px solid #ededed; margin-top: 1em;' />


</div>
</div>
<div class="col col-8">

**Notifications and Music Playing**

There are a few ways to trigger notifications, so this took me a while to figure out what worked for me. Since I was also adding my music apps into this, I wanted a way to show that music was playing on a particular tab at any given time, similar to how most browsers show a volume icon.
</div>
</div>

<div class="bg bg-gray no-margin-bottom">

## Success!

<div style='text-align:center; background-color: #fafafa; padding: 20px;'>
<img src='/projects/lmk/lmk-overview.gif' alt='LMK Overview' style='max-width: 650px; width: 100%; margin: 0 auto; border: 1px solid #dddddd;' />
</div>
  
Overall, my proof of concept was a success and I use it every day. I’m able to add any website I want, not have to upload any logos, and keep my main browsers notification-free. The next phase is to refactor the code and publish it for other people to enjoy.
</div>