const responses = [{
    keywords: ["layer 8"],
    response: "Layer 8? That's the 'human layer' in tech lingo. It's a playful way to say that sometimes the issue might be... well, the user. But no worries, we've all been there!"
}, {
    keywords: ["osi 8"],
    response: "Ever heard of the OSI Model with its 7 layers? Well, Layer 8 is the unofficial addition, representing us, the humans! Because sometimes the human OS might need a reboot!"
}, {
    keywords: ['not working'],
    response: "Ah, the mysteries of technology. Have you tried turning it off and on again? It's like a mini-vacation for your device!"
}, {
    keywords: ['coffee'], response: "That's a classic Layer 8 issue. Have you tried using a mug with a lid?"
}, {
    keywords: ["password reset"], response: "Resetting again? Passwords just like to keep things fresh."
}, {
    keywords: ['password'],
    response: "Ah, memory issues! The human brain isn't always the best storage device. Try writing it down next time (but keep it safe)!"
}, {
    keywords: ['mouse'], response: 'Is the mouse upside down? Just checking! Happens to the best of us.'
}, {
    keywords: ['screen'],
    response: "Did you try turning up the brightness? Or maybe it's just dark mode taking its job too seriously!"
}, {
    keywords: ['no sound'],
    response: 'Check if your sound is muted. Or maybe your computer just decided to take a vow of silence?'
}, {
    keywords: ['internet'],
    response: 'Perhaps your computer is taking a leisurely stroll on the information superhighway. Patience is key!'
}, {
    keywords: ['error 404'],
    response: "Ah, the elusive 404. It's like the socks that go missing in the laundry. No one knows where they go."
}, {
    keywords: ['printer'],
    response: "Did the printer have breakfast? Maybe it's just a little hungry and munching on some paper."
}, {
    keywords: ['computer'],
    response: 'Your computer might be a fan of the movie Frozen. Let it go, let it go! Try restarting it.'
}, {
    keywords: ['blue screen'],
    response: "Oh, the blue screen of 'deep contemplation'. Your computer is probably just deep in thought."
}, {
    keywords: ['can’t login'],
    response: 'Your computer might just be playing hard to get. Flatter it a bit and try again!'
}, {
    keywords: ['file'],
    response: "Files can be like rebellious teenagers. It's there somewhere, just not where you expect it!"
}, {
    keywords: ['updates'],
    response: "Your computer's just pampering itself with a spa day. Everyone needs a little self-care now and then!"
}, {
    keywords: ['headphones'],
    response: 'Maybe your headphones are having a silent protest. Try unplugging and plugging them back in!'
}, {
    keywords: ['camera'],
    response: "Maybe your camera just doesn't recognize you without your morning coffee. Give it a clearer view!"
}, {
    keywords: ["mouse"], response: "Did the mouse escape? Maybe it's just playing hide and seek."
}, {
    keywords: ["keyboard"], response: "Keyboards can be moody. Maybe it's just not in the typing mood today."
}, {
    keywords: ["wifi"], response: "WiFi can be shy sometimes. Maybe try wooing it with a gentle reboot."
}, {
    keywords: ["monitor"],
    response: "Your monitor might be practicing its impression of a blank canvas. Give it some inspiration!"
}, {
    keywords: ["charger missing"], response: "Chargers like vacations too. Are you sure it's not on a short break?"
}, {
    keywords: ["email"], response: "Emails can be like pigeons. Sometimes they just lose their way."
}, {
    keywords: ["login"], response: "Logins are like puzzles. Maybe you just haven't found the right piece yet."
}, {
    keywords: ["sound"], response: "Sounds like your device is practicing its mime routine."
}, {
    keywords: ["battery"], response: "Battery tired? Maybe it just needs a short nap."
}, {
    keywords: ["slow"], response: "Like a fine wine, some devices just need time to be at their best."
}, {
    keywords: ["freeze"], response: "Your device is just practicing for the next Ice Age."
}, {
    keywords: ["download"], response: "Downloads are like marathons, not sprints. Patience is a virtue."
}, {
    keywords: ["install"], response: "Installation is an art. Sometimes the brush just slips."
}, {
    keywords: ["video"], response: "Video buffering? Maybe it's just building up suspense."
}, {
    keywords: ["audio"], response: "Audio issues? Maybe your device is just whispering."
}, {
    keywords: ["driver"], response: "Drivers can be like grumpy old men. Sometimes they just refuse to cooperate."
}, {
    keywords: ["software"], response: "Software being buggy? Maybe it's just having a bad hair day."
}, {
    keywords: ["hardware"], response: "Hardware hiccups? Maybe it's just a little ticklish."
}, {
    keywords: ["usb"], response: "USB not recognized? Maybe it's just in incognito mode."
}, {
    keywords: ["bluetooth"], response: "Bluetooth can be elusive. It's like trying to catch a butterfly."
}, {
    keywords: ["storage"], response: "Out of storage? Maybe it's time for a digital garage sale."
}, {
    keywords: ["backup"], response: "Backup failed? Your data just wants to live on the edge."
}, {
    keywords: ["cloud"], response: "Cloud issues? Maybe it's just a bit overcast today."
}, {
    keywords: ["error code"], response: "Error codes are like riddles. Let's solve this one together."
}, {
    keywords: ["app"], response: "Apps can be like toddlers. Sometimes they just throw tantrums."
}, {
    keywords: ["update failed"], response: "Updates are like cliffhangers. Maybe it just wants to keep you in suspense."
}, {
    keywords: ["shutdown"], response: "Unexpected shutdown? Maybe it's just playing peek-a-boo."
}, {
    keywords: ["restart"], response: "Constant restarts? Maybe it's just practicing its entrance."
}, {
    keywords: ["lost files"], response: "Files are like socks. Sometimes they just vanish into another dimension."
}, {
    keywords: ["virus"], response: "Got a virus? Your computer might just have caught a cold."
}, {
    keywords: ["malware"], response: "Malware is like junk food. We all get tempted sometimes."
}, {
    keywords: ["popup"], response: "Pop-ups are like party crashers. Nobody likes them."
}, {
    keywords: ["account"], response: "Account issues? Maybe it's just having an identity crisis."
}, {
    keywords: ["subscription"], response: "Subscription woes? Sometimes it's just commitment issues."
}, {
    keywords: ["network"], response: "Network problems? Maybe it's just playing hard to get."
}, {
    keywords: ["broken"], response: "Broken? Or just taking a break? Perspective matters."
}, {
    keywords: ["overheating"], response: "Overheating? Your device might just be showing off its hotness."
}, {
    keywords: ["warranty"], response: "Warranty concerns? It's like a safety net. Sometimes it has holes."
}, {
    keywords: ["repair"], response: "Need repairs? Maybe your device just wants a makeover."
}, {
    keywords: ["settings"], response: "Settings gone haywire? They just like to mix things up sometimes."
}, {
    keywords: ["refunds"], response: "Refunds? Money just likes to play hide and seek sometimes."
}, {
    keywords: ["order"], response: "Order issues? Maybe it's just taking the scenic route."
}, {
    keywords: ["delivery"], response: "Late delivery? It's probably just stuck in traffic."
}, {
    keywords: ["feedback"], response: "Thanks for the feedback! Even machines need a pep talk now and then."
}, {
    keywords: ["suggestion"], response: "Thanks for the suggestion! We'll file it under 'brilliant ideas'."
}, {
    keywords: ["register"], response: "Registration hiccups? Maybe it's just shy."
}, {
    keywords: ["login failed"], response: "Failed login? Your device is probably just playing hard to get."
}, {
    keywords: ["help"], response: "Need help? You're in for a treat (and a few chuckles)."
}, {
    keywords: ["hello"], response: "Hello! How can I help you today?"
}, {
    keywords: ["ping"], response: "Pong!"
}];

function getSupportReply(userMessage) {
    userMessage = userMessage.toLowerCase().split(/\s+/);

    for (const response of responses) {
        if (response.keywords.some(keyword => keyword.split(' ').every(word => userMessage.includes(word)))) {
            return response.response;
        }
    }

    return "Sorry, I'm not sure about that. Can you provide more details?";
}
