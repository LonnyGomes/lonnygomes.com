---
layout: project
title: Raspberry Pi Basil Plant Time Lapse
tags: ['project', 'raspberry pi', 'timelapse']
---

{% image 'raspberry-pi-basil-plant-timelapse.jpg', 'basil plant rig', '320px' %}

I created a custom rig made of steel piping and wood feet for stability. A Raspberry Pi Zero and a Raspberry Pi NoIR camera was mounted on the rig, along side an infrared lamp. The lamp was controlled with a SmartThings plug to activate only after sunset.

The Raspberry Pi ran a NodeJS application that captured an image every 30 minutes. After taking a picture, the application uploaded the image to a S3 bucket; this in effect enabled the time lapse to continue indefinitely.
After the time lapse was completed, ffmpeg was used to compile all images into a mp4.

## Challenges

There were a few post-processing challenges that emerged after examining the initial render:

-   Sometimes the camera took a completely black image which introduced distracting flicker
-   The IR lamp stopped working towards the end of the time lapse
-   There were a few points that the camera stopped taking pictures due to a memory consumption of the NodeJS app
-   The naming of the images was less than ideal

## Solutions

-   Used ffmpeg to analyze histograms of all images. The values were averaged and images that were under a certain darkness threshold were flagged for removal
-   The histogram analysis helped to remove all images that were taken after the IR light failed to function
-   Added additional checks to mitigate memory usage. Memory limits were lowered to trigger NoseJS garbage collection more often due to the limited resources of the Pi
-   Wrote custom scripts to rename images into a consecutive numbered pattern for ffmpeg processing

The final video was time-warped to 3x-4x using Adobe Premiere and the music was created in Garage Band.
Things for next time:

-   I would like to capture at an angle to get a better sense of the height of the plant
-   I’d like to have more control of the light
-   Find a way to reduce flicker
-   Experiment with different intervals
