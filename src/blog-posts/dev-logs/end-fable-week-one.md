---
img: /images/end-fable/somethings-not-quite-right-here.png
alt: Earliest End Fable dev screenshot where I accidentally rotated the entire player's body on the X axis, resulting in the world looking messed up. Oops.
title: End Fable - Week One
date: 2023-09-09
tags:
  - "devlogs"
---
Hey everyone! As promised, I'm finally able to start sharing stuff about End Fable - the game my partner, Up, and I are making together! We started the actual implementation of our first prototype last weekend, and worked on it throughout the week whenever we had the time.

Over the weekend, Up and I got into a call together to discuss what we wanted to get done this week. We decided to keep our goals small, since we're just starting the programming end of things, and want to make sure our goals are reasonably within reach.

Up chose to work on the player controller, and I chose to focus on creating a small level to test out said player controller. This way neither of us would conflict that much with the other, and we'd be able to get our controls figured out without much hassle.

I more or less finished the level within a few days, though there were multiple revisions, and an expansion a couple days ago to add a pool of water. But I was able to meet that goal, and chose to help out with the character controller while Up was unable to work on it. One thing I learned pretty quickly was that our CharacterBody3D wasn't going to cut it. Godot was our choice of game engine, and we were working with v4.1.1, and apparently CharacterBody3Ds struggle with edges of StaticBody3Ds in that version.

So I switched the character controller over to a RigidBody3D, and with... a *few* problems that we fixed quickly...

![](/images/end-fable/somethings-not-quite-right-here.png)

We got it working! The glitchiness we were experiencing on sharp edges was no longer present, but it did introduce a new problem. Now whenever we tried to walk into a wall, it would result in the player getting stuck to it. Unfortunately, our only fix for this was to give the player no friction, which worked, but introduced a new problem: ramps.

I'm sure you see the pattern by now. Every single fix for one problem leads to a new one. Thankfully, the ramps issue is easy to fix, and we would've had to do it anyways since the built-in interaction with slopes isn't what we wanted anyways.

Finally, we had one other major problem that needed to be solved, and it was a big one. One of the inclusions to the map I built was a physics object - a bouncing ball that the player was supposed to be able to shove around, stand on, etc. And while shoving it worked, it worked a little... too well. You could push it through walls with minimal effort, and trying to stand on it would often just shove it through the floor. Not good.

![](/images/end-fable/reality-is-a-simulation.gif)

And this was a bit of a roadblock for us, because as of 4.0, Godot only has one physics engine: Godot Physics. So Up and I tried to fix the problem by messing with physics engine settings, or trying to detect when the ball was against a wall to prevent the player from pushing it, but nothing was working quite right.

Just as we were getting ready to scrap the idea of having physics objects for the player to mess around with, a user by the name of mihe came to our rescue! Turns out, they had been working on a port of the Jolt physics engine to Godot, and it was basically just a drag and drop replacement for Godot Physics. It still required some fiddling with, but it worked! Now the ball acts as a solid object when shoved into a corner or when the player tries standing on it!

Massive thanks to mihe and the Jolt physics engine team! If it weren't for these wonderful people, we probably would've had to scrap that idea and go with something else.

Finally, I began on the water shader. It's... well, it's something! I didn't get a chance to spend too long on this, plus I'm still learning how to even make shaders in Godot, so it's fine for testing purposes.

![](/images/end-fable/wodder.png)

I think I might not use noise to generate the waves going forward, and instead use Gerstner waves for that, that way we can sync the CPU and GPU to allow for objects to float somewhat realistically and be affected by the waves. I want to get the water and its interactions with objects just right since the game literally takes place on an island.

So where does that leave us?

Well, we got most of what we wanted to do this week, and then some since I had finished my goals a bit faster than I expected to. We still have to fix the player going up and down slopes and stairs, as well as add climbing and swimming to the player's movement options, but otherwise we got everything done that we wanted to get done!

Everything's still a bit rough around the edges - especially visually - but we're also only one week into development, so I can't be too hard on what we have right now. Polish and shine come much, much later down the road. After all, this is just our first prototype!

With that, I want to thank you all for reading, and I hope you have a good weekend! Hopefully next weekend, I'll have even more to share with you all! Bye!