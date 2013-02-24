chiliproject-blueish-orange-theme
=========================

This is a blue "Orange" theme (actually there's nearly nothing colored orange) with responsive UI and function to add own menu entries for ChiliProject 3.x

Features:

* changed top menu bar from right to left side
* added header logo
* added Responsive UI support for mobile devices
* changed colors to more orange+blue style
* added JavaScript functions to add own top menu bar entries and footer

Installation:

1. Copy the directory /orange/ to your ChiliProject installation /chiliproject/public/themes/
2. Change the header logo by an own PNG image of size 88x40 pixel (width may vary, 
   but height is max 40 px!), background should be transparent!
   -> replace /chiliproject/public/themes/orange/images/header_dark.png with your logo image
3. Change/add your own top menu bar entries by editing the theme.js
   -> see /chiliproject/public/themes/orange/javascripts/theme.js
4. Select/enable the theme under Administration -> Settings -> Display in the theme combo box

Customizing:

* top menu bar + footer:  javascripts/theme.js
* colors + style:         stylesheets/application.js
* header logo:            images/header_dark.png (88x40px, transparent background)

Authors:

This theme originally was created for the company intranet of ASinteg GmbH by 
Christian Daehn in 2011 and uses the Responsive UI scripts + css of Xander Dumaine (2011).
