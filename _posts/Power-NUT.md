---
layout: post
---

I recently undertook a project to overhaul my backup process. While more information about my backup process is coming in future blog posts, I want to talk a little bit about power. Specifically uninterruptible power supplies and and [NUT](https://networkupstools.org/).

I never really worried much about backup power, but in the middle of troubleshooting unrelenting parity errors and poor power continuity at my house, I decided it was time to get a battery backup. I ended up with a [850W Cyber Power](https://www.cyberpowersystems.com/product/ups/pfc-sinewave/cp850pfclcd/). I picked for the pure sine power feature, and the fact that it offered monitoring. As configured, it provides about 45 minutes of power to some essential components. Those components are:

- Cable Modem
- Wireless Router
- RaspberryPi 3B
- Synology DS218+
- Unraid Server

Also a nice feature is to pass the coaxal and ethernet through the surge protector before they come and go through the wall. Using NUT, I was able to share the status of the battery backup to the Synology device, and the Unraid server over my network. The pi is connected to the UPS via USB and is running the NUT UPS daemon, monitoring the power status. When an outage occurs, both devices watch the remaining time, and shut down safely when there's ten minutes left.
