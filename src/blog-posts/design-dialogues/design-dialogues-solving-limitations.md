---
img: /carousel/solar_strike.webp
alt: Multiple giant lasers from the sky are striking the ground.
title: Design Dialogues - Solving Limitations
date: 2023-08-27
tags: 
  - designdialogues
---
One of the most time-consuming parts of game design that I don't see enough people talking about is solving limitations of a system you've designed, whether it be a limitation you learned post-release and want to improve for a sequel, or one found early on that you want to fix before you release your game.

I'll share an example of the former situation from my most popular project, *Arcanus: Legacy*. Like its sequel project - *Arcanus: Continuum* - *Arcanus: Legacy* was designed around its unique spell casting system, where the player has to use a combination of left and right mouse clicks to select and cast spells.

If you've ever played *Arcanus: Continuum*, you'll know its spell casting system is quite refined, with its telegraphed features, ability to cast a spell over and over again while only doing the pattern once, and having effectively infinite possible spells!

*Arcanus: Legacy* is... much different. It has none of those features, due to the limitations of its unique casting system. Due to it being based on a 3-input long combination of 2 possible inputs, it has a maximum of 8 possible combinations - 8 possible spells. They could only be cast immediately, no method of continuously casting them existed. And to another player you might be fighting? They have no idea what you could be about to cast as there's no indication of your inputs or how far into casting a spell you are.

From the end result in *Arcanus: Continuum*, the solutions seem rather obvious. But a year ago? I was stumped! So let's start with the limitation I solved first: the spell limit.

The first two ideas that came to me and many players - and I even messed with during *Arcanus: Legacy's* development - were increasing the length of the combination from 3 to 4-5 inputs and increasing the amount of possible inputs from 2 to 3-4. This is a pretty logical way to increase the possible amount of spells, and at the upper end would have theoretically resulted in 1024 possible spells!

However, it's not that simple. Doing either of these resulted in the casting system no longer feeling quick and snappy, and instead feeling slow and clunky - a problem that plagued the only other magic mod that existed in the same niche as *Arcanus: Legacy*. So I ditched that for *Arcanus: Legacy* and just focused on making the rest of the demo at the time, with the greatly limited maximum amount of spells. It did help keep my scope in check though, which was good at the end of the day!

When it came time to start working on *Arcanus: Continuum* though, I couldn't just stick with 8 possible spells. From my previous testing, I knew any solution had to maintain the quick, snappy feeling of casting in *Arcanus: Legacy*, otherwise it would be a downgrade in player experience.

With that in mind, I sat down and brainstormed for a few days, bouncing possible ideas off friends, until I settled on two similar solutions: either putting spells on a player and having any staff they use pull from the same list of spells, or putting spells directly onto the staff so players could carry around more than 8 if they gave up extra inventory space. I eventually settled on the latter, as it would be easier to implement, easier to teach to players, and fit the base game's mechanics the closest.

The second limitation I solved was the lack of information about what spell you might be casting given to other players. Because *Minecraft* is so limited in its animations, there was no difference in animation for the inputs. I wanted the telegraphing to be clear and easily understood at a distance and at a glance.

Obviously, I could have two different animations - and I did consider that! But a different idea won out: magic circles floating in front of the player, corresponding to different inputs.

I chose this because it would be more obvious that two different swinging animations, would telegraph how many inputs have already been done, and would be easier to tell at a glance since they would always be the same shapes regardless of whether or not you saw them at the beginning of the input or just before the next input was put in.

So far, everything seems simple enough, right? Two down, one to go, surely this last one couldn't be so difficult.

Unfortunately, this was the toughest to solve - in part because of a bias I built up while fixing the other two limitations. The simple solutions I thought might fix the problems I had turned out to be less than desireable, while the more complex solutions did everything I wanted while still being simple from a player perspective.

As a result, I ended up starting with a complex solution: whenever the player finished the combination for a spell, instead of immediately casting it, it would give the player a "charge" for that spell that they could then cast as many times as they wanted until they cleared it. Looking back, I can't believe I was considering adding this in to solve what was ostensibly a non-critical flaw with the original casting system - the other two flaws were much worse.

However, I wasn't satisfied with that solution, even then, because it still resulted in effectively needing a fourth input, slowing down the casting of spells. While it would have resulted in some interesting possibilities - like being able to telegraph the exact spell a player was about to cast, or letting players hold onto a spell for a more advantageous moment - it just didn't feel... right.

And then, sometime in fall 2022 I figured it out: just let the player hold down the last input to continously cast the selected spell. A simple, elegant solution that didn't even require explaining to players. It just came naturally to those that playtested for me, and seems to be coming naturally to those who are playing the released mod, which makes me very happy to see.

There's two lessons I want people to take away from this story: first, when you're designing or improving on a system, have clear goals in mind. This will help to weed out which ideas are worth pursuing and which ones would just waste your time. Second, if you're really stuck on a problem, step back and look for any biases you might have preventing you from considering a potential solution. I know we go through life being told that the simplest solutions are always best, but that's not always true. Sometimes a problem calls for a complex solution.

So I hope this helps you with refining your own designs, and I'll see you all next time! I'm sorry about the lack of images for this post, I just didn't have anything other than filler I could show, so I chose to show nothing at all.

And if you want to try out *Arcanus: Continuum*, you can download it from [CurseForge](https://www.curseforge.com/minecraft/mc-mods/arcanus-continuum) now! I just released it a couple days ago, and I'm really stoked to finally be done with modding. I'll hopefully have more time to focus on End Fable, and have more to share about it soon!